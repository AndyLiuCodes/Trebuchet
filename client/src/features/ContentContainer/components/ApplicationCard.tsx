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
  var defaultCardProps = {
    sx: {
      display: 'flex',
      flexDirection: 'row',
      padding: '12px',
    },
  };
  var cardProps = isEditable
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

  const serverStatusColor =
    onlineStatus === OnlineStatus.NotTracked
      ? 'none'
      : onlineStatus === OnlineStatus.Online
      ? 'success.main'
      : 'error.main';

  const iconSizes = {
    xs: 21,
    sm: 20,
    lg: 18,
    xl: 17,
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        borderColor: serverStatusColor,
        borderWidth: '2.5px',
      }}
      variant={'outlined'}
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
            {!isEditable && description !== '' && (
              <Tooltip
                title={description}
                sx={{ padding: 0, marginLeft: 'auto', fontSize: iconSizes }}
              >
                <InfoOutlinedIcon />
              </Tooltip>
            )}
            {isEditable && (
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
