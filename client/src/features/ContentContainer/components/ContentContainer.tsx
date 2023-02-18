import { Grid, Box } from '@mui/material';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

//card data
/*
[
  {
    id
    name
    description (optional)
    onlineStatus
    lastSync
    nextSync
    serverApplication
    image
    url
  }
]
*/

export function ContentSquare() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        direction='row'
        container
        columns={12}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Item>4</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Item>5</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Item>6</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Item>7</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Item>8</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Item>9</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Item>10</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Item>11</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Item>12</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Item>13</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={1}>
          <Item>14</Item>
        </Grid>
        <Grid xs={12} sm={6} md={3} lg={1}>
          <Item>15</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
