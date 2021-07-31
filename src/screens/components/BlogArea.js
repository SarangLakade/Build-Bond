import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BlogCard from "./BlogCard.js";
import Grid from "@material-ui/core/Grid";
import blogImg2 from "../images/blog2.jpg";
import blogImg3 from "../images/blog3.jpg";
import blogImg4 from "../images/blog4.jpg";
import BlogData from "./BlogData";

const useStyles = makeStyles((theme) => ({
  allBlog: {
    [theme.breakpoints.up("xs")]: {
      width: "100px",
      borderBottom: "5px solid rgba(81, 183, 0, 0.81)",
      fontFamily: "jost",
      fontWeight: "bold",
      textAlign: "center",
      margin: "auto",
      fontSize: "25px",
      paddingBottom: "10px",
    },

    [theme.breakpoints.up("sm")]: {
      width: "160px",
      borderBottom: "5px solid rgba(81, 183, 0, 0.81)",
      fontFamily: "jost",
      fontWeight: "bold",
      margin: "auto",
      fontSize: "40px",
      paddingBottom: "10px",
    },

    [theme.breakpoints.up("md")]: {
      width: "160px",
      borderBottom: "5px solid rgba(81, 183, 0, 0.81)",
      fontFamily: "jost",
      fontWeight: "bold",
      marginLeft: "210px",
      fontSize: "40px",
      paddingBottom: "10px",
    },
  },
}));

export default function BlogArea() {
  const classes = useStyles();

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <div style={{ marginBottom: "50px" }}>
          <h2 className={classes.allBlog}>All Blogs</h2>
        </div>
        <Grid container justify="center">
          <Grid item lg={12}></Grid>
          <Grid item xs={10} sm={10} md={5} lg={3}>
            <BlogCard
              image={blogImg2}
              heading={BlogData[1].heading}
              info={BlogData[1].info}
              link={BlogData[1].link}
            />
          </Grid>

          <Grid item xs={10} sm={10} md={5} lg={3}>
            <BlogCard
              image={blogImg3}
              heading={BlogData[2].heading}
              info={BlogData[2].info}
              link={BlogData[2].link}
            ></BlogCard>
          </Grid>

          <Grid item xs={10} sm={10} md={5} lg={3}>
            <BlogCard
              image={blogImg4}
              heading={BlogData[3].heading}
              info={BlogData[3].info}
              link={BlogData[3].link}
            ></BlogCard>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
