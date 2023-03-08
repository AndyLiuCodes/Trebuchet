import {
  Box,
  CardActions,
  Modal,
  Tooltip,
  Button,
  Grid,
  Typography,
  Fade,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import { ActionState } from '@/features/ActionBar';
import { useState } from 'react';
import { useHomeSetAction } from '@/pages/Home';
import useApplicationService from '@/hooks/ApplicationService';

type ActionsPropType = {
  id: number;
  name: string;
  cardState: ActionState;
  description: string;
  handleDelete: () => void;
};

const iconSizes = {
  xs: 21,
  sm: 20,
  lg: 18,
  xl: 17,
};

const modalStyle = {
  position: 'absolute' as 'absolute',
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

export function ApplicationCardActions({
  id,
  name,
  cardState,
  description,
  handleDelete,
}: ActionsPropType) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const applicationService = useApplicationService();

  function handleEditClick() {
    console.log('To open editing window');
  }

  function handleOpen() {
    setDeleteModalOpen(true);
  }

  function handleClose() {
    setDeleteModalOpen(false);
  }

  function handleApplicationDelete() {
    applicationService.deleteServerApplication(id).then(() => {
      handleDelete();
      handleClose();
    });
  }

  return (
    <CardActions
      sx={{
        position: 'absolute',
        zIndex: 9,
        padding: 0,
        display: 'block',
        right: 0,
        top: 0,
        margin: '2px',
      }}
    >
      {cardState === ActionState.Viewing && description !== '' && (
        <Tooltip
          title={description}
          sx={{ padding: 0, marginLeft: 'auto', fontSize: iconSizes }}
        >
          <InfoOutlinedIcon />
        </Tooltip>
      )}
      {cardState === ActionState.Editing && (
        <EditIcon
          color='warning'
          sx={{
            marginLeft: 'auto',
            cursor: 'pointer',
            fontSize: iconSizes,
          }}
          onClick={handleEditClick}
        />
      )}
      {cardState === ActionState.Deleting && (
        <HighlightOffIcon
          color='error'
          sx={{
            marginLeft: 'auto',
            cursor: 'pointer',
            fontSize: iconSizes,
          }}
          onClick={handleOpen}
        />
      )}
      <Modal open={deleteModalOpen} onClose={handleClose} closeAfterTransition>
        <Fade in={deleteModalOpen}>
          <Box sx={{ ...modalStyle }}>
            <Typography sx={{ width: '100%' }} variant='h4'>
              Confirm?
            </Typography>
            <Typography sx={{ paddingY: '10px' }}>
              Confirm that you want to delete "{name}" application?
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
                  onClick={handleApplicationDelete}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item>
                <Button sx={{ color: 'info.main' }} onClick={handleClose}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </CardActions>
  );
}
