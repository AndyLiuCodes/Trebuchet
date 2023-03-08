import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { getImage } from '@/features/ContentContainer/utils/ImageHelper';
import _ from 'lodash';
import { ActionState } from '@/features/ActionBar';
import { ApplicationCardActions } from '@/features/ContentContainer/components/ApplicationCardActions';

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

type ApplicationCardProps = {
  id: number;
  name: string;
  cardState: ActionState;
  imageName: string;
  url: string;
  description: string;
  lastSync: number;
  nextSync: number;
  handleDelete: () => void;
};

export const ApplicationCard = function ({
  id,
  name,
  cardState,
  imageName,
  url,
  description,
  lastSync,
  nextSync,
  handleDelete,
}: ApplicationCardProps) {
  var defaultCardProps = {
    sx: {
      display: 'flex',
      flexDirection: 'row',
      padding: '12px',
    },
  };

  // Determine whether the card can be clicked
  var cardProps =
    cardState !== ActionState.Viewing
      ? defaultCardProps
      : _.merge(defaultCardProps, {
          onClick: () => {
            window.open(url, '_blank');
          },
          sx: {
            cursor: 'pointer',
          },
        });

  const currentTime = Date.now();
  const onlineStatus = false;

  const cardGlow = 'lightgreen';
  // onlineStatus === OnlineStatus.NotTracked
  //   ? 'none'
  //   : isPendingSync === 'SYNCING'
  //   ? 'yellow'
  //   : onlineStatus === OnlineStatus.Offline || isPendingSync === 'ERROR'
  //   ? 'red'
  //   : 'lightgreen';

  const cardGlowStyle = onlineStatus
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
      <Box sx={{ position: 'relative' }}>
        <ApplicationCardActions
          id={id}
          name={name}
          cardState={cardState}
          description={description}
          handleDelete={handleDelete}
        />
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
    </Card>
  );
};
