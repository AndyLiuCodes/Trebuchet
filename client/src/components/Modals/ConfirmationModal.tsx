import { Box, Modal, Button, Grid, Typography, Fade } from '@mui/material';

type ConfirmationModal = {
  modalOpen: boolean;
  confirmationMessage: string;
  onClose: () => void;
  onCancel: () => void;
  onSubmit: () => void;
  submitText: string;
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'secondary.main',
  border: '2px solid secondary.contrastText',
  borderRadius: '8px',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 1,
};

export function ConfirmationModal({
  modalOpen,
  onClose,
  onCancel,
  onSubmit,
  confirmationMessage,
  submitText,
}: ConfirmationModal) {
  return (
    <Modal open={modalOpen} onClose={onClose} closeAfterTransition>
      <Fade in={modalOpen}>
        <Box sx={{ ...modalStyle }}>
          <Typography sx={{ width: '100%' }} variant='h4'>
            Confirm?
          </Typography>
          <Typography sx={{ paddingY: '10px' }}>
            {confirmationMessage}
          </Typography>
          <Grid container justifyContent={'flex-end'} spacing={1}>
            <Grid item>
              <Button
                sx={{
                  backgroundColor: 'error.main',
                  '&:hover': {
                    backgroundColor: 'error.contrastText',
                  },
                }}
                onClick={onSubmit}
              >
                {submitText}
              </Button>
            </Grid>
            <Grid item>
              <Button sx={{ color: 'info.main' }} onClick={onCancel}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
}
