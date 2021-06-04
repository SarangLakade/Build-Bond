import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import BlogData from "./BlogData";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import blogImg1 from "../images/blog1.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles({
  heading: {
    fontStyle: "poppins",
    fontWeight: 500,
  },

  para: {
    fontStyle: "poppins",
    height: "100px",
    overflow: "hidden",
  },

  more: {
    fontFamily: "poppins",
    color: "#51B700",
    cursor: "pointer",
    marginLeft: "8px",
    fontSize: "18px",
  },
});

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function BigBlog(props) {
  const classes = useStyles();

  return (
    <div style={{ marginTop: "-7vw" }}>
      <Grid container justify="center">
        <Grid spacing={10} item xs={10} sm={10} md={7} lg={6} xl={6}>
          <Card
            style={{
              borderRadius: "15px",
              borderBottom: "10px solid rgba(81, 183, 0, 0.81)",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="blog"
                image={blogImg1}
                title="blog image"
              />
              <CardContent>
                <ThemeProvider>
                  <Typography
                    className={classes.heading}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {BlogData[0].heading}
                  </Typography>
                </ThemeProvider>

                <ThemeProvider>
                  <Typography variant="body2" component="p">
                    <div className={classes.para}>{BlogData[0].info}</div>
                  </Typography>
                </ThemeProvider>
              </CardContent>
            </CardActionArea>
            <Divider></Divider>
            <CardActions>
              <Typography gutterBottom>
                <Link to={"/blogdescription1"} className={classes.more}>
                  {" "}
                  Read More
                  <ArrowForwardIosIcon
                    style={{ fontSize: "12px" }}
                  ></ArrowForwardIosIcon>
                </Link>
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
