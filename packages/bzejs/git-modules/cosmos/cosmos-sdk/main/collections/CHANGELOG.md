<!--
Guiding Principles:

Changelogs are for humans, not machines.
There should be an entry for every single version.
The same types of changes should be grouped.
Versions and sections should be linkable.
The latest version comes first.
The release date of each version is displayed.
Mention whether you follow Semantic Versioning.

Usage:

Change log entries are to be added to the Unreleased section under the
appropriate stanza (see below). Each entry should ideally include a tag and
the Github issue reference in the following format:

* (<tag>) [#<issue-number>] Changelog message.

Types of changes (Stanzas):

"Features" for new features.
"Improvements" for changes in existing functionality.
"Deprecated" for soon-to-be removed features.
"Bug Fixes" for any bug fixes.
"API Breaking" for breaking exported APIs used by developers building on SDK.
Ref: https://keepachangelog.com/en/1.0.0/
-->

# Changelog

## [Unreleased]

## [v1.3.1](https://github.com/cosmos/cosmos-sdk/releases/tag/collections%2Fv1.3.1)

* Prep for Cosmos SDK v0.54.0

## [v1.2.1](https://github.com/cosmos/cosmos-sdk/releases/tag/collections%2Fv1.2.1)

## Bug Fixes

* [#24737](https://github.com/cosmos/cosmos-sdk/pull/24737) Ensure that map memory will never be reused unintentionally.

## [v1.2.0](https://github.com/cosmos/cosmos-sdk/releases/tag/collections%2Fv1.2.0)

### Improvements

* [#24081](https://github.com/cosmos/cosmos-sdk/pull/24081) Remove `cosmossdk.io/core` dependency.

## [v1.1.0](https://github.com/cosmos/cosmos-sdk/releases/tag/collections%2Fv1.1.0)

### Improvements

* [#23515](https://github.com/cosmos/cosmos-sdk/pull/23515) Bring in `collections/protocodec` go module as package within `collections` module.

## [v1.0.0](https://github.com/cosmos/cosmos-sdk/releases/tag/collections%2Fv1.0.0)

### Features

* [#22641](https://github.com/cosmos/cosmos-sdk/pull/22641) Add reverse iterator support for `Triple`.
* [#17656](https://github.com/cosmos/cosmos-sdk/pull/17656) Introduces `Vec`, a collection type that allows to represent a growable array on top of a KVStore.
* [#18933](https://github.com/cosmos/cosmos-sdk/pull/18933) Add LookupMap implementation. It is basic wrapping of the standard Map methods but is not iterable.
* [#19343](https://github.com/cosmos/cosmos-sdk/pull/19343) Simplify IndexedMap creation by allowing to infer indexes through reflection.
* [#19861](https://github.com/cosmos/cosmos-sdk/pull/19861) Add `NewJSONValueCodec` value codec as an alternative for `codec.CollValue` from the SDK for non protobuf types.
* [#21090](https://github.com/cosmos/cosmos-sdk/pull/21090) Introduces `Quad`, a composite key with four keys.
* [#20704](https://github.com/cosmos/cosmos-sdk/pull/20704) Add `ModuleCodec` method to `Schema` and `HasSchemaCodec` interface in order to support `cosmossdk.io/schema` compatible indexing.
* [#20538](https://github.com/cosmos/cosmos-sdk/pull/20538) Add `Nameable` variations to `KeyCodec` and `ValueCodec` to allow for better indexing of `collections` types.
* [#22544](https://github.com/cosmos/cosmos-sdk/pull/22544) Schema's `ModuleCodec` will now also return Enum descriptors to be registered with the indexer.

## [v0.4.0](https://github.com/cosmos/cosmos-sdk/releases/tag/collections%2Fv0.4.0)

### Features

* [#17024](https://github.com/cosmos/cosmos-sdk/pull/17024) Introduces `Triple`, a composite key with three keys.

### API Breaking

* [#17290](https://github.com/cosmos/cosmos-sdk/pull/17290) Collections iteration methods (Iterate, Walk) will not error when the collection is empty.

### Improvements

* [#17021](https://github.com/cosmos/cosmos-sdk/pull/17021) Make collections implement the `appmodule.HasGenesis` interface.

## [v0.3.0](https://github.com/cosmos/cosmos-sdk/releases/tag/collections%2Fv0.3.0)

### Features

* [#16074](https://github.com/cosmos/cosmos-sdk/pull/16607) Introduces `Clear` method for `Map` and `KeySet`
* [#16773](https://github.com/cosmos/cosmos-sdk/pull/16773)
    * Adds `AltValueCodec` which provides a way to decode a value in two ways.
    * Adds the possibility to specify an alternative way to decode the values of `KeySet`, `indexes.Multi`, `indexes.ReversePair`.

## [v0.2.0](https://github.com/cosmos/cosmos-sdk/releases/tag/collections%2Fv0.2.0)

### Features

* [#16074](https://github.com/cosmos/cosmos-sdk/pull/16074)  Makes the generic Collection interface public, still highly unstable.

### API Breaking

* [#16127](https://github.com/cosmos/cosmos-sdk/pull/16127)  In the `Walk` method the call back function being passed is allowed to error.

## [v0.1.0](https://github.com/cosmos/cosmos-sdk/releases/tag/collections%2Fv0.1.0)

Collections `v0.1.0` is released! Check out the [docs](https://docs.cosmos.network/main/build/packages/collections) to know how to use the APIs.
