package solomachine

import (
	"bytes"

	errorsmod "cosmossdk.io/errors"

	clienttypes "github.com/cosmos/ibc-go/v10/modules/core/02-client/types"
	"github.com/cosmos/ibc-go/v10/modules/core/exported"
)

var _ exported.ClientMessage = (*Misbehaviour)(nil)

// ClientType is a Solo Machine light client.
func (Misbehaviour) ClientType() string {
	return exported.Solomachine
}

// ValidateBasic implements Misbehaviour interface.
func (m Misbehaviour) ValidateBasic() error {
	if m.Sequence == 0 {
		return errorsmod.Wrap(clienttypes.ErrInvalidMisbehaviour, "sequence cannot be 0")
	}

	if err := m.SignatureOne.ValidateBasic(); err != nil {
		return errorsmod.Wrap(err, "signature one failed basic validation")
	}

	if err := m.SignatureTwo.ValidateBasic(); err != nil {
		return errorsmod.Wrap(err, "signature two failed basic validation")
	}

	// misbehaviour signatures cannot be identical.
	if bytes.Equal(m.SignatureOne.Signature, m.SignatureTwo.Signature) {
		return errorsmod.Wrap(clienttypes.ErrInvalidMisbehaviour, "misbehaviour signatures cannot be equal")
	}

	// message data signed cannot be identical if both paths are the same.
	if bytes.Equal(m.SignatureOne.Path, m.SignatureTwo.Path) &&
		bytes.Equal(m.SignatureOne.Data, m.SignatureTwo.Data) {
		return errorsmod.Wrap(clienttypes.ErrInvalidMisbehaviour, "misbehaviour signature data must be signed over different messages")
	}

	return nil
}

// ValidateBasic ensures that the signature and data fields are non-empty.
func (sd SignatureAndData) ValidateBasic() error {
	if len(sd.Signature) == 0 {
		return errorsmod.Wrap(ErrInvalidSignatureAndData, "signature cannot be empty")
	}
	if len(sd.Data) == 0 {
		return errorsmod.Wrap(ErrInvalidSignatureAndData, "data for signature cannot be empty")
	}
	if len(sd.Path) == 0 {
		return errorsmod.Wrap(ErrInvalidSignatureAndData, "path for signature cannot be empty")
	}
	if sd.Timestamp == 0 {
		return errorsmod.Wrap(ErrInvalidSignatureAndData, "timestamp cannot be 0")
	}

	return nil
}
