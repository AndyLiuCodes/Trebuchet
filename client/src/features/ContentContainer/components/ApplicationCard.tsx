import Card from '@mui/material/Card';
import EditIcon from '@mui/icons-material/Edit';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActions } from '@mui/material';
import LensIcon from '@mui/icons-material/Lens';
import { styled } from '@mui/material/styles';
import { OnlineStatus } from '@/features/ContentContainer/';
import { getImage } from '@/features/ContentContainer/utils/ImageHelper';

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

type ApplicationCardProps = {
  name: string;
  isEditable: boolean;
  onlineStatus: OnlineStatus;
  imageName: string;
};

export const ApplicationCard = function ({
  name,
  isEditable,
  onlineStatus,
  imageName,
}: ApplicationCardProps) {
  function handleEditButtonClick() {
    console.log('To open editing window');
  }
  return (
    <Card variant={'outlined'} elevation={0}>
      <Box sx={{ display: 'flex', flexDirection: 'row', padding: '12px' }}>
        <CardMedia
          component='img'
          image={getImage(imageName)}
          sx={{
            display: 'flex',
            minWidth: 0,
            flexBasis: 0,
            flexGrow: 1,
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexBasis: 0,
            flexGrow: 1,
          }}
        >
          <CardContentNoPadding
            sx={{
              display: 'flex',
              flex: '1 0 auto',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                height: '10%',
              }}
            >
              {isEditable && (
                <CardActions>
                  <EditIcon
                    sx={{ marginLeft: 'auto' }}
                    onClick={handleEditButtonClick}
                  />
                </CardActions>
              )}
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography component='div' variant='h3'>
                {name}
              </Typography>
            </Box>
            <Box sx={{ height: '10%', marginLeft: 'auto' }}>
              {onlineStatus !== OnlineStatus.NotTracked && (
                <LensIcon
                  color={
                    onlineStatus === OnlineStatus.Online ? 'success' : 'error'
                  }
                />
              )}
            </Box>
          </CardContentNoPadding>
        </Box>
      </Box>
    </Card>
  );
};
