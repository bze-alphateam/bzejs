// @ts-ignore
import downloadProtos from '@hyperweb/telescope/commands/download'
import { cpSync, existsSync, readdirSync, rmSync } from 'fs'
import { join, relative } from 'path'

// Pin every source to the version the BZE chain runs (see the chain's go.mod).
const COSMOS_SDK_TAG = 'v0.53.8'
const IBC_GO_TAG = 'v10.7.0'
const RATE_LIMITING_TAG = 'modules/rate-limiting/v10.7.0'

const root = join(__dirname, '..')
const protosDir = join(root, 'protos')
// The downloader wipes its output dir, so it writes to a scratch dir and only the
// pinned trees are copied into protos/ (protos/bze is synced from the chain separately).
const downloadDir = join(root, 'git-modules', 'protos-download')

// Top-level proto trees taken from the download.
const SYNCED_DIRS = ['cosmos', 'ibc', 'ratelimit']
// ibc-go ships these, but the chain does not run them.
const DROPPED_DIRS = [
  'ibc/applications/rate_limiting',
  'ibc/applications/packet_forward_middleware',
]

// Buf dependencies are cloned at their default branch, so a newer cosmos-sdk clone can
// add files the pinned tag does not have. Only files of the pinned clone are kept,
// apart from the dependency trees the pinned repos import.
const gitModules = join(root, 'git-modules')
const PINNED_SOURCES: Record<string, string> = {
  cosmos: join(gitModules, 'cosmos', 'cosmos-sdk', COSMOS_SDK_TAG, 'proto'),
  ibc: join(gitModules, 'cosmos', 'ibc-go', IBC_GO_TAG, 'proto'),
}
const DEPENDENCY_DIRS = ['cosmos/ics23']

const config = {
  repos: [
    { owner: 'cosmos', repo: 'cosmos-sdk', branch: COSMOS_SDK_TAG },
    { owner: 'cosmos', repo: 'ibc-go', branch: IBC_GO_TAG },
    { owner: 'cosmos', repo: 'ibc-apps', branch: RATE_LIMITING_TAG },
  ],
  protoDirMapping: {
    'gogo/protobuf/master': '.',
    'googleapis/googleapis/master': '.',
    'protocolbuffers/protobuf/main': 'src',
    [`cosmos/ibc-apps/${RATE_LIMITING_TAG}`]: 'modules/rate-limiting/proto',
  },
  outDir: downloadDir,
  ssh: false,
  tempRepoDir: 'git-modules',
  targets: [
    'cosmos/**/*.proto',
    'ibc/**/*.proto',
    'ratelimit/**/*.proto',
  ],
}

function listFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name)
    return entry.isDirectory() ? listFiles(path) : [path]
  })
}

function pruneUnpinned(): void {
  for (const [dir, pinnedRoot] of Object.entries(PINNED_SOURCES)) {
    for (const file of listFiles(join(protosDir, dir))) {
      const rel = relative(protosDir, file)
      if (DEPENDENCY_DIRS.some((dep) => rel.startsWith(`${dep}/`))) continue
      if (!existsSync(join(pinnedRoot, rel))) {
        rmSync(file)
        console.log(`Dropped ${rel} (not in the pinned tag)`)
      }
    }
    removeEmptyDirs(join(protosDir, dir))
  }
}

function removeEmptyDirs(dir: string): void {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) removeEmptyDirs(join(dir, entry.name))
  }
  if (readdirSync(dir).length === 0) rmSync(dir, { recursive: true })
}

function syncDownloaded(): void {
  for (const dir of SYNCED_DIRS) {
    const from = join(downloadDir, dir)
    if (!existsSync(from)) {
      throw new Error(`download-protos: ${dir}/ missing from the download`)
    }
    rmSync(join(protosDir, dir), { recursive: true, force: true })
    cpSync(from, join(protosDir, dir), { recursive: true })
  }
  for (const dir of DROPPED_DIRS) {
    rmSync(join(protosDir, dir), { recursive: true, force: true })
  }
  pruneUnpinned()
}

downloadProtos(config)
  .then(() => {
    syncDownloaded()
    console.log('✅ Proto download completed')
  })
  // @ts-ignore
  .catch((error) => {
    console.error('❌ Proto download failed:', error)
    process.exit(1)
  })
