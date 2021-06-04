import React, { useEffect, useState } from "react";
import "./css/Gallery.css";
import { Paper, Box } from "@material-ui/core";
import NavigationBar from "./../component/NavgationBar";
import CustomFooter from "./../component/Footer";
import HeaderImage from "./images/header_image.jpg";
import { makeStyles } from "@material-ui/core/styles";

const images = [
  { id: "1", imageName: "/images/img1.jpg", tag: "free" },
  { id: "2", imageName: "/images/img2.jpg", tag: "new" },
  { id: "3", imageName: "/images/img3.jpg", tag: "pro" },
  { id: "4", imageName: "/images/img4.jpg", tag: "pro" },
  { id: "5", imageName: "/images/img5.jpg", tag: "free" },
  { id: "6", imageName: "/images/img6.jpg", tag: "new" },
  { id: "7", imageName: "/images/img6.jpg", tag: "pro" },
  { id: "8", imageName: "/images/img8.jpg", tag: "free" },
  { id: "9", imageName: "/images/img9.jpg", tag: "new" },
  { id: "10", imageName: "/images/img10.jpg", tag: "new" },
  { id: "11", imageName: "/images/img11.jpg", tag: "new" },
  { id: "12", imageName: "/images/img12.jpg", tag: "new" },
  { id: "13", imageName: "/images/img13.jpg", tag: "free" },
  { id: "14", imageName: "/images/img14.jpg", tag: "pro" },
  { id: "15", imageName: "/images/img15.jpg", tag: "free" },
  { id: "16", imageName: "/images/img5.jpg", tag: "new" },
];

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "-40",
  },
  header: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "rgba(81, 183, 0, 0.81)",

      height: "200px",
    },

    [theme.breakpoints.up("sm")]: {
      backgroundColor: "rgba(81, 183, 0, 0.81)",

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

const options = {
  // settings: {
  // 	overlayColor: 'rgb(25, 136, 124)',
  // 	autoplaySpeed: 1500,
  // 	transitionSpeed: 900
  // },
  // buttons: {
  // 	backgroundColor: 'red',
  // 	iconColor: 'rgba(126, 172, 139, 0.8)'
  // },
  // caption: {
  // 	captionColor: '#a6cfa5',
  // 	captionFontFamily: 'Raleway, sans-serif',
  // 	captionFontWeight: '300',
  // 	captionTextTransform: 'uppercase'
  // },
  // progressBar: {
  // 	height: '20px',
  // 	fillColor: 'blue',
  // 	backgroundColor: 'white'
  // }
};

function Gallery() {
  const classes = useStyles();

  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div className="App">
      <NavigationBar />

      <div className={classes.header}>
        <img src={HeaderImage} className={classes.image}></img>
        <Box className={classes.heading}>
          <TagButton
            name="all"
            tagActive={tag === "all" ? true : false}
            handleSetTag={setTag}
          />{" "}
          /
          <TagButton
            name="new"
            tagActive={tag === "new" ? true : false}
            handleSetTag={setTag}
          />{" "}
          /
          <TagButton
            name="free"
            tagActive={tag === "free" ? true : false}
            handleSetTag={setTag}
          />{" "}
          /
          <TagButton
            name="pro"
            tagActive={tag === "pro" ? true : false}
            handleSetTag={setTag}
          />
        </Box>
      </div>

      <div className="container" style={{ marginTop: -60 }}>
        {filteredImages.map((image) => (
          <Paper key={image.id} className="image-card">
            <a href={`${image.imageName}`}>
              <img className="image" src={`${image.imageName}`} alt="" />
            </a>
          </Paper>
        ))}
      </div>
      <CustomFooter />
    </div>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};

export default Gallery;
