import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avator: {
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "#ffff",
      color: "#51B700",
      height: theme.spacing(20),
      width: theme.spacing(20),
      boxShadow: theme.shadows[4],
    },

    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#ffff",
      color: "#51B700",
      height: theme.spacing(15),
      width: theme.spacing(15),
      boxShadow: theme.shadows[4],
      margin: "auto",
    },
  },

  heading: {
    margin: "20px",
    padding: "5px",
    borderBottom: "5px solid #51B700",
    width: "auto",
    fontFamily: "jost",
  },

  card: {
    [theme.breakpoints.up("sm")]: {
      boxShadow: theme.shadows[4],
      borderRadius: "20px",
      backgroundColor: "#ffff",
    },

    [theme.breakpoints.down("sm")]: {
      borderRadius: "20px",
      backgroundColor: "#ffff",
      margin: "auto",
    },
  },

  box: {
    boxShadow: theme.shadows[1],
    margin: "20px",
    padding: "5px 15px",
    width: "auto",
    fontFamily: "poppins",
    borderRadius: "10px",
  },
}));

export default function UserInfo(props) {
  const classes = useStyles();
  const User = JSON.parse(localStorage.getItem("profile"));
  const user = User.result;

  return (
    <div style={{ marginTop: "-60px" }}>
      <Grid container justify="center">
        <Grid style={{ marginBottom: "50px" }} item xs={4} sm={3} md={2} lg={2}>
          <Avatar className={classes.avator} src={user.imageUrl} />
        </Grid>

        <Grid
          style={{ position: "relative" }}
          item
          xs={10}
          sm={8}
          md={6}
          lg={5}
        >
          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.heading}
                gutterBottom
                variant="p"
                component="h2"
              >
                Hello {user.givenName}
              </Typography>

              <Box className={classes.box}>
                <Typography gutterBottom variant="p" component="p">
                  <strong>Name :</strong> {user.givenName}
                </Typography>
              </Box>

              <Box className={classes.box}>
                <Typography gutterBottom variant="p" component="p">
                  <strong>Surname :</strong>
                  {user.familyName}
                </Typography>
              </Box>

              <Box className={classes.box}>
                <Typography gutterBottom variant="p" component="p">
                  <strong>Email :</strong>
                  {user.email}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
