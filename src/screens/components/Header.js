import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import HeaderImage from "../images/header_image.jpg";

const useStyles = makeStyles((theme) => ({
  header: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "rgba(81, 183, 0, 0.81)",
      // position: "relative",
      height: "200px",
    },

    [theme.breakpoints.up("sm")]: {
      backgroundColor: "rgba(81, 183, 0, 0.81)",
      // position: "relative",
      height: "360px",
    },
  },

  image: {
    opacity: "15%",
    height: "100%",
    width: "100%",
  },

  heading: {
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      width: "100%",
      top: "25%",
      textAlign: "center",
      color: "#ffff",
      fontFamily: "jost",
      fontWeight: "bold",
      fontSize: "18px",
    },

    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      width: "100%",
      top: "25%",
      textAlign: "center",
      color: "#ffff",
      fontFamily: "jost",
      fontWeight: "bold",
      fontSize: "30px",
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <img src={HeaderImage} className={classes.image}></img>
      <Box className={classes.heading}>
        <h1>{props.title}</h1>
      </Box>
    </div>
  );
}
