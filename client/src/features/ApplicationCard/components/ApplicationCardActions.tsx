import { CardActions, Tooltip } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import { ActionState } from '@/features/ActionBar';
import { useState } from 'react';
import useApplicationService from '@/hooks/ApplicationService';
import { useDeleteServerApplication } from '@/features/ContentContainer/hooks/ContentContainerProvider';
import { ConfirmationModal } from '@/components/Modals/ConfirmationModal';

type ActionsPropType = {
  id: number;
  name: string;
  cardState: ActionState;
  description: string;
};

const iconSizes = {
  xs: 21,
  sm: 20,
  lg: 18,
  xl: 17,
};

export function ApplicationCardActions({
  id,
  name,
  cardState,
  description,
}: ActionsPropType) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const applicationService = useApplicationService();
  const handleDelete = useDeleteServerApplication();

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
      handleDelete(id);
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
      <ConfirmationModal
        modalOpen={deleteModalOpen}
        onClose={handleClose}
        onCancel={handleClose}
        onSubmit={handleApplicationDelete}
        confirmationMessage={`Confirm that you want to delete "${name}" application?`}
        submitText={'Delete'}
      />
    </CardActions>
  );
}
