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
import NavigationBar from "./../component/NavgationBar";
import Header from "./components/Header";
import CustomFooter from "../component/Footer";

const useStyles = makeStyles((theme) => ({
  app: {
    backgroundColor: "gray",
  },

  blogsContainer: {
    paddingTop: theme.spacing(3),
    marginLeft: "180px",
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

function Service() {
  const classes = useStyles();

  return (
    <div className="App">
      <NavigationBar />
      <Header title="Services" />
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://aaptiv.com/magazine/wp-content/uploads/2018/08/Pros-and-Cons-of-Hiring-a-Nutritionist_Dietitian.jpg"
                  title="Personal Nutrition Counseling"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h5"
                    fontfamily="Poppins"
                  >
                    Personal Nutrition Counseling
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    fontfamily="Jost"
                  >
                    Hi guys, you can share any nutritional problem in this
                    session through a video call. I am here to help you. First
                    time you need...
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
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdD6s--DkWE8cGpItfKBynou1iIiFjaoFIaA&usqp=CAU"
                  title="Family Nutrition Counseling"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h1"
                    fontfamily="Poppins"
                  >
                    Family Nutrition Counseling
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    fontfamily="Jost"
                  >
                    Hi guys, you can share any nutritional problem in this
                    session through a video call. I am here to help you. First
                    time you need...
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
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXoH0pIZuXFxoC9PGlwURS34QKmM_5zlmmBg&usqp=CAU"
                  title=" Diabetic Diet"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    fontfamily="Poppins"
                  >
                    Diabetic Diet
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    fontfamily="Jost"
                  >
                    Hi guys, you can share any nutritional problem in this
                    session through a video call. I am here to help you. First
                    time you need...
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
                  image="https://mommabe.com/wp-content/uploads/2019/03/beautiful-pregnant-woman-kitchen-shopping-bag-pregnancy-diet-ss-Feature.jpg"
                  title="Diet For Pregnancy"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h1"
                    fontfamily="Poppins"
                  >
                    Diet For Pregnancy
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    fontfamily="Jost"
                  >
                    Hi guys, you can share any nutritional problem in this
                    session through a video call. I am here to help you. First
                    time you need...
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
                  image="https://www.childrensmedgroup.com/cmg-media/uploads/2018/01/VegetarianDietTipsForChildren-1024x796.jpg"
                  title="Diet For Children"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h1"
                    fontfamily="Poppins"
                  >
                    Diet For Children
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    fontfamily="Jost"
                  >
                    Hi guys, you can share any nutritional problem in this
                    session through a video call. I am here to help you. First
                    time you need...
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
                  image="https://www.health.harvard.edu/media/content/images/cr/bf926b9c-4cbf-422d-9ad0-c287ac6b17d8.jpg"
                  title="Diet For Heart Disease "
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h1"
                    fontfamily="Poppins"
                  >
                    Diet For Heart Disease
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    fontfamily="Jost"
                  >
                    Hi guys, you can share any nutritional problem in this
                    session through a video call. I am here to help you. First
                    time you need...
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
      <CustomFooter />
    </div>
  );
}

export default Service;
