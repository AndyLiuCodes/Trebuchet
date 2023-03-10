import { Box, Grid, Tooltip, Zoom, IconButton, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { ReactElement } from 'react';
import { ActionState } from '@/features/ActionBar/types/actionStateTypes';
import { ModalOptions, useHomeAction } from '@/pages/Home';

interface TooltipProps {
  title: string;
  children: ReactElement;
}

type ActionBarProps = {
  onOpenModal: (modal: ModalOptions) => void;
};

const StyledIconButton = styled(IconButton)({
  borderRadius: 0,
  '&:hover': {
    backgroundColor: 'secondary.contrastText',
  },
});

function CustomTooltip(props: TooltipProps) {
  return (
    <Tooltip
      title={props.title}
      placement='left'
      TransitionComponent={Zoom}
      arrow
    >
      {props.children}
    </Tooltip>
  );
}

export function ActionBar({ onOpenModal }: ActionBarProps) {
  const [action, setAction] = useHomeAction();

  function onIconClick(iconAction: ActionState) {
    action === iconAction
      ? setAction(ActionState.Viewing)
      : setAction(iconAction);
  }

  return (
    <Box>
      <Grid
        container
        direction={'column'}
        justifyContent={'right'}
        sx={{
          opacity: 0.7,
          backgroundColor: 'secondary.main',
          borderRadius: '4px 4px 0 0',
        }}
      >
        <Grid item>
          <CustomTooltip title='View applications'>
            <StyledIconButton
              sx={{
                backgroundColor:
                  action === ActionState.Viewing
                    ? 'secondary.contrastText'
                    : '',
              }}
              onClick={() => onIconClick(ActionState.Viewing)}
            >
              <HomeIcon />
            </StyledIconButton>
          </CustomTooltip>
        </Grid>
        <Grid item>
          <CustomTooltip title='Add new application'>
            <StyledIconButton
              onClick={() => onOpenModal(ModalOptions.AddApplication)}
            >
              <AddIcon />
            </StyledIconButton>
          </CustomTooltip>
        </Grid>
        <Grid item>
          <CustomTooltip title='Edit applications'>
            <StyledIconButton
              sx={{
                backgroundColor:
                  action === ActionState.Editing
                    ? 'secondary.contrastText'
                    : '',
              }}
              onClick={() => onIconClick(ActionState.Editing)}
            >
              <EditIcon />
            </StyledIconButton>
          </CustomTooltip>
        </Grid>
        <Grid item>
          <CustomTooltip title='Delete applications'>
            <StyledIconButton
              sx={{
                backgroundColor:
                  action === ActionState.Deleting
                    ? 'secondary.contrastText'
                    : '',
              }}
              onClick={() => onIconClick(ActionState.Deleting)}
            >
              <DeleteIcon />
            </StyledIconButton>
          </CustomTooltip>
        </Grid>
        <Grid item>
          <CustomTooltip title='Application list'>
            <StyledIconButton>
              <FormatListBulletedIcon />
            </StyledIconButton>
          </CustomTooltip>
        </Grid>
      </Grid>
    </Box>
  );
}
