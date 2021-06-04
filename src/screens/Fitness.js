import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import "./css/Service.css";

const useStyles = makeStyles((theme) => ({
  app: {
    backgroundColor: "gray",
  },

  blogsContainer: {
    paddingTop: theme.spacing(3),
    marginLeft: "180px",
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "80%",
    borderRadius: "10px",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",

    margin: theme.spacing(1),
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function Fitness() {
  const classes = useStyles();

  return (
    <div className="App">
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgskG9AmpmD28E7UAZ0S95dEvkFi5BdYE7POylNWphxrXNaUW4Ba7Msr0JJZP3dbupacQ&usqp=CAU"
                  title="Personal Training"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h6"
                    fontfamily="Poppins"
                  >
                    Personal Training
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    fontfamily="Jost"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor ut dolore facilisis.
                  </Typography>
                  <CardActions className={classes.cardActions}>
                    <Button variant="contained" color="secondary">
                      BOOK IT
                    </Button>
                  </CardActions>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.afaa.com/images/default-source/blog/groupfitness-vs-personaltraining.jpg?sfvrsn=2"
                  title="Group Training"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h6"
                    fontfamily="Poppins"
                  >
                    Group Training
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    fontfamily="Jost"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor ut dolore facilisis.
                  </Typography>
                  <CardActions className={classes.cardActions}>
                    <Button variant="contained" color="secondary">
                      BOOK IT
                    </Button>
                  </CardActions>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://www.theskill.ge/wp-content/uploads/2015/12/yoga.jpg"
                  title="Yoga"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h6"
                    fontfamily="Poppins"
                  >
                    Yoga
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    fontfamily="Jost"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor ut dolore facilisis.
                  </Typography>
                  <CardActions className={classes.cardActions}>
                    <Button variant="contained" color="secondary">
                      BOOK IT
                    </Button>
                  </CardActions>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6uCKw_8h48pvslhGb33gO-IzpOVYQMecN4A&usqp=CAU"
                  title="Massage Therapy"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h6"
                    fontfamily="Poppins"
                  >
                    Massage Therapy
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    fontfamily="Jost"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor ut dolore facilisis.
                  </Typography>
                  <CardActions className={classes.cardActions}>
                    <Button variant="contained" color="secondary">
                      BOOK IT
                    </Button>
                  </CardActions>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9krO4kOiLicc0N_iOxB9w6_uIfquhtMHQw&usqp=CAU"
                  title="8 Weeks to Wellness"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h6"
                    fontfamily="Poppins"
                  >
                    8 Weeks to Wellness
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    fontfamily="Jost"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor ut dolore facilisis.
                  </Typography>
                  <CardActions className={classes.cardActions}>
                    <Button variant="contained" color="secondary">
                      BOOK IT
                    </Button>
                  </CardActions>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCzDo1bQvCJW05xseI0kP4C5Ev_OG_S-dGQ&usqp=CAU"
                  title="Body building"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h6"
                    fontfamily="Poppins"
                  >
                    Body building
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    fontfamily="Jost"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor ut dolore facilisis.
                  </Typography>
                  <CardActions className={classes.cardActions}>
                    <Button variant="contained" color="secondary">
                      BOOK IT
                    </Button>
                  </CardActions>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Fitness;
