import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <CameraAltIcon className={classes.icon} />
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm" style={{ marginTop: '100px' }}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello this is a photo album. I'm trying to make this sentence as
              long as possible!
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={4} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See My Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {/* Måste även göra en array const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]; för att bläddra igenom flera bilder 
          
          För att få upp flera bilder på sidan utan att kopiera flera containers med cards är det bara att göra map() */}

            {/*Obs. xs visar stl på image för mobile och sm är tablets och md är desktop*/}
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Something here to give the footer a purpose
        </Typography>
      </footer>
    </>
  );
};

export default App;
