import { Grid } from '@mui/material';
import { ApplicationCard } from '@/features/ApplicationCard/components/ApplicationCard';
import { ApplicationDetails } from '@/types';
import { ActionState } from '@/features/ActionBar';

type GridLayoutProps = {
  data: ApplicationDetails[];
  action: ActionState;
};

export function GridLayout({ data, action }: GridLayoutProps) {
  return (
    <Grid
      direction='row'
      container
      columns={12}
      justifyContent={'center'}
      spacing={3}
    >
      {data.map((server: ApplicationDetails) => {
        return (
          <Grid
            item
            key={server.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            display='flex'
            justifyContent={'space-around'}
          >
            <ApplicationCard
              id={server.id}
              name={server.name}
              cardState={action}
              imageName={server.serverImage || 'proxmox-logo.png'}
              url={server.url}
              description={server.description}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
