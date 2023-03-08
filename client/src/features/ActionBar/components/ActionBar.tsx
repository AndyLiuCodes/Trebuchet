import { Box, Grid, Tooltip, Zoom, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { ReactElement } from 'react';
import { useHomeAction, useHomeSetAction } from '@/pages/Home';
import { ActionState } from '@/features/ActionBar/types/actionStateTypes';

interface TooltipProps {
  title: string;
  children: ReactElement;
}

type ActionBarProps = {
  onAddOpenClick: () => void;
};

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

export function ActionBar({ onAddOpenClick }: ActionBarProps) {
  const action = useHomeAction();
  const setAction = useHomeSetAction();

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
            <IconButton
              sx={{
                borderRadius: 0,
                backgroundColor:
                  action === ActionState.Viewing
                    ? 'secondary.contrastText'
                    : '',
                '&:hover': {
                  backgroundColor: 'secondary.contrastText',
                },
              }}
              onClick={() => onIconClick(ActionState.Viewing)}
            >
              <HomeIcon />
            </IconButton>
          </CustomTooltip>
        </Grid>
        <Grid item>
          <CustomTooltip title='Add new application'>
            <IconButton
              sx={{
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: 'secondary.contrastText',
                },
              }}
              onClick={onAddOpenClick}
            >
              <AddIcon />
            </IconButton>
          </CustomTooltip>
        </Grid>
        <Grid item>
          <CustomTooltip title='Edit applications'>
            <IconButton
              sx={{
                borderRadius: 0,
                backgroundColor:
                  action === ActionState.Editing
                    ? 'secondary.contrastText'
                    : '',
                '&:hover': {
                  backgroundColor: 'secondary.contrastText',
                },
              }}
              onClick={() => onIconClick(ActionState.Editing)}
            >
              <EditIcon />
            </IconButton>
          </CustomTooltip>
        </Grid>
        <Grid item>
          <CustomTooltip title='Delete applications'>
            <IconButton
              sx={{
                borderRadius: 0,
                backgroundColor:
                  action === ActionState.Deleting
                    ? 'secondary.contrastText'
                    : '',
                '&:hover': {
                  backgroundColor: 'secondary.contrastText',
                },
              }}
              onClick={() => onIconClick(ActionState.Deleting)}
            >
              <DeleteIcon />
            </IconButton>
          </CustomTooltip>
        </Grid>
        <Grid item>
          <CustomTooltip title='Application list'>
            <IconButton
              sx={{
                borderRadius: 0,
                '&:hover': {
                  backgroundColor: 'secondary.contrastText',
                },
              }}
            >
              <FormatListBulletedIcon />
            </IconButton>
          </CustomTooltip>
        </Grid>
      </Grid>
    </Box>
  );
}
