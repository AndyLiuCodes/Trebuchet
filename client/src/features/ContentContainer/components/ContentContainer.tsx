import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useHomeAction } from '@/pages/Home';
import { useServerApplications } from '@/pages/Home/hooks/ServerApplicationsProvider';
import { ApplicationDetails } from '@/types';
import useApplicationService from '@/hooks/ApplicationService';
import { Layouts, LayoutOptions } from '@/features/ContentContainer';
import { ContentContainerProvider } from '@/features/ContentContainer/providers/ContentContainer';

type ContentContainerProps = {
  layout: LayoutOptions;
};

export function ContentContainer({ layout }: ContentContainerProps) {
  const applicationService = useApplicationService();
  const [serverApplications, setServerApplications] = useServerApplications();
  const [action, _] = useHomeAction();

  useEffect(() => {
    applicationService.getServerApplications().then((data) => {
      setServerApplications(data);
    });
  }, []);

  function handleDelete(id: number) {
    setServerApplications(
      serverApplications.filter((server: ApplicationDetails) => server.id != id)
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <ContentContainerProvider handleDelete={handleDelete}>
        {(layout === LayoutOptions.Grid && (
          <Layouts.Grid data={serverApplications} action={action} />
        )) || <Layouts.List data={serverApplications} action={action} />}
      </ContentContainerProvider>
    </Box>
  );
}
