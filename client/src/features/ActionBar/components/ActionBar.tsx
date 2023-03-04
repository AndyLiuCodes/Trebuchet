import { Box, Grid, Tooltip, Zoom, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { ReactElement } from 'react';
import { useHomeAction, useHomeSetAction } from '@/components/Home';
import { ActionState } from '@/features/ActionBar/types/actionStateTypes';

interface TooltipProps {
  title: string;
  children: ReactElement;
}

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

export function ActionBar() {
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
          backgroundColor: '#E5E5CB',
          borderRadius: '4px 4px 0 0',
        }}
      >
        <Grid item>
          <CustomTooltip title='View applications'>
            <IconButton
              sx={{
                borderRadius: 0,
                backgroundColor:
                  action === ActionState.Viewing ? '#0000001a' : '',
                '&:hover': {
                  backgroundColor: '#0000001a',
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
                backgroundColor:
                  action === ActionState.Adding ? '#0000001a' : '',
                '&:hover': {
                  backgroundColor: '#0000001a',
                },
              }}
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
                  action === ActionState.Editing ? '#0000001a' : '',
                '&:hover': {
                  backgroundColor: '#0000001a',
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
                  action === ActionState.Deleting ? '#0000001a' : '',
                '&:hover': {
                  backgroundColor: '#0000001a',
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
                  backgroundColor: '#0000001a',
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
