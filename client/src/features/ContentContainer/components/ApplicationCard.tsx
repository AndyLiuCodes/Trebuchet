import Card from '@mui/material/Card';
import EditIcon from '@mui/icons-material/Edit';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActions, Tooltip } from '@mui/material';
import LensIcon from '@mui/icons-material/Lens';
import { styled } from '@mui/material/styles';
import { OnlineStatus } from '@/features/ContentContainer/';
import { getImage } from '@/features/ContentContainer/utils/ImageHelper';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import _ from 'lodash';

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
  url: string;
  description: string;
};

export const ApplicationCard = function ({
  name,
  isEditable,
  onlineStatus,
  imageName,
  url,
  description,
}: ApplicationCardProps) {
  var cardDefaultProps = {
    sx: { display: 'flex', flexDirection: 'row', padding: '12px' },
  };
  var cardProps = isEditable
    ? cardDefaultProps
    : _.merge(cardDefaultProps, {
        onClick: () => {
          window.open(url, '_blank');
        },
        sx: {
          cursor: 'pointer',
        },
      });

  function handleEditButtonClick() {
    console.log('To open editing window');
  }

  return (
    <Card variant={'outlined'} elevation={0}>
      <Box>
        {!isEditable && description !== '' && (
          <CardActions
            sx={{
              position: 'absolute',
              zIndex: 9,
              padding: 0,
              display: 'block',
              right: '25px',
              top: '25px',
            }}
          >
            <Tooltip
              title={description}
              sx={{ padding: 0, marginLeft: 'auto' }}
            >
              <InfoOutlinedIcon />
            </Tooltip>
          </CardActions>
        )}
        <Box {...cardProps}>
          <CardMedia
            component='img'
            image={getImage(imageName)}
            sx={{
              display: 'flex',
              maxWidth: '100px',
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
                  <CardActions sx={{ padding: 0 }}>
                    <EditIcon
                      sx={{ marginLeft: 'auto', cursor: 'pointer' }}
                      onClick={handleEditButtonClick}
                    />
                  </CardActions>
                )}
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography component='div' variant='h6'>
                  {name}
                </Typography>
              </Box>
              <Box sx={{ height: '20%', marginLeft: 'auto', padding: 0 }}>
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
      </Box>
    </Card>
  );
};
