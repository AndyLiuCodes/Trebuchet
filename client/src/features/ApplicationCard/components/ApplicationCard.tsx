import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import _ from 'lodash';
import { ActionState } from '@/features/ActionBar';
import { ApplicationCardActions } from '@/features/ApplicationCard/components/ApplicationCardActions';

type ApplicationCardProps = {
  id: number;
  name: string;
  cardState: ActionState;
  imagePath: string;
  url: string;
  description: string;
};

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

const defaultCardProps = {
  sx: {
    display: 'flex',
    flexDirection: 'row',
    padding: '12px',
  },
};

export const ApplicationCard = function ({
  id,
  name,
  cardState,
  imagePath,
  url,
  description,
}: ApplicationCardProps) {
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

  const cardGlow = 'lightgreen';
  const cardGlowStyle = {
    WebkitBoxShadow: `0 0 10px ${cardGlow}`,
    MozBoxShadow: `0 0 10px ${cardGlow}`,
    boxShadow: `0 0 10px ${cardGlow}`,
  };

  return (
    <Card
      sx={[
        {
          backgroundColor: 'secondary.main',
          maxWidth: 400,
          transition: 'background 0.5s',
          '&:hover': {
            backgroundColor: 'secondary.hover',
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
        />
      </Box>
      <Box {...cardProps}>
        <CardMedia
          component='img'
          image={imagePath}
          sx={{
            display: 'flex',
            maxWidth: '100%',
            flexBasis: 0,
            flexGrow: 1,
            objectFit: 'contain',
            height: 'auto',
            width: 'auto',
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
                  color: 'background.paper',
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
