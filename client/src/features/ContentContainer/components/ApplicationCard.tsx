import Card from '@mui/material/Card';
import EditIcon from '@mui/icons-material/Edit';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActions, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { OnlineStatus } from '@/features/ContentContainer/';
import { getImage } from '@/features/ContentContainer/utils/ImageHelper';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import _ from 'lodash';
import { ActionState } from '@/features/ActionBar';

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

const iconSizes = {
  xs: 21,
  sm: 20,
  lg: 18,
  xl: 17,
};

type ApplicationCardProps = {
  name: string;
  cardState: ActionState;
  onlineStatus: OnlineStatus;
  imageName: string;
  url: string;
  description: string;
  lastSync: number;
  nextSync: number;
};

export const ApplicationCard = function ({
  name,
  cardState,
  onlineStatus,
  imageName,
  url,
  description,
  lastSync,
  nextSync,
}: ApplicationCardProps) {
  var defaultCardProps = {
    sx: {
      display: 'flex',
      flexDirection: 'row',
      padding: '12px',
    },
  };
  var cardProps =
    cardState === ActionState.Viewing
      ? defaultCardProps
      : _.merge(defaultCardProps, {
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

  const currentTime = Date.now();
  const isPendingSync =
    onlineStatus === OnlineStatus.NotTracked
      ? 'NO_SYNC'
      : currentTime - nextSync > 300000
      ? 'ERROR'
      : currentTime - nextSync >= 0
      ? 'SYNCING'
      : 'VALID';

  const cardGlow =
    onlineStatus === OnlineStatus.NotTracked
      ? 'none'
      : isPendingSync === 'SYNCING'
      ? 'yellow'
      : onlineStatus === OnlineStatus.Offline || isPendingSync === 'ERROR'
      ? 'red'
      : 'lightgreen';

  const cardGlowStyle =
    onlineStatus === OnlineStatus.NotTracked
      ? {}
      : {
          WebkitBoxShadow: `0 0 10px ${cardGlow}`,
          MozBoxShadow: `0 0 10px ${cardGlow}`,
          boxShadow: `0 0 10px ${cardGlow}`,
        };

  return (
    <Card
      sx={[
        {
          backgroundColor: '#E5E5CB',
          maxWidth: 400,
          transition: 'background 0.5s',
          '&:hover': {
            backgroundColor: '#D5CEA3',
          },
        },
        cardGlowStyle,
      ]}
    >
      <Box>
        <Box sx={{ position: 'relative' }}>
          <CardActions
            sx={{
              position: 'absolute',
              zIndex: 9,
              padding: 0,
              margin: '10px',
              display: 'block',
              right: 0,
              top: 0,
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
              <CardActions sx={{ padding: 0 }}>
                <EditIcon
                  sx={{
                    marginLeft: 'auto',
                    cursor: 'pointer',
                    fontSize: iconSizes,
                  }}
                  onClick={handleEditButtonClick}
                />
              </CardActions>
            )}
          </CardActions>
        </Box>
        <Box {...cardProps}>
          <CardMedia
            component='img'
            image={getImage(imageName)}
            sx={{
              display: 'flex',
              maxWidth: '100%',
              minWidth: 0,
              flexBasis: 0,
              flexGrow: 1,
              objectFit: 'cover',
              height: 'auto',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexBasis: 0,
              flexGrow: 2,
            }}
          >
            <CardContentNoPadding
              sx={{
                display: 'flex',
                flex: '1 0 auto',
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    color: '#1A120B',
                    fontSize: {
                      xs: 25,
                      sm: 19,
                      md: 19,
                      lg: 16,
                      xl: 16,
                    },
                  }}
                >
                  {name}
                </Typography>
              </Box>
            </CardContentNoPadding>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
