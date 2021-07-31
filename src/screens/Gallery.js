import React, { useEffect, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { Paper } from "@material-ui/core";
import NavigationBar from "./../component/NavgationBar";
import CustomFooter from "./../component/Footer";
import "./css/Gallery.css";

const Images = [
  {
    id: "1",
    imageName: "img1.jpg",
    tag: "Nutrition",
  },
  { id: "2", imageName: "img2.jpg", tag: "Nutrition" },
  { id: "3", imageName: "img3.jpg", tag: "Fitness" },
  { id: "4", imageName: "img4.jpg", tag: "Fitness" },
  { id: "5", imageName: "img5.jpg", tag: "Nutrition" },
  { id: "6", imageName: "img6.jpg", tag: "Nutrition" },
  { id: "7", imageName: "img6.jpg", tag: "Fitness" },
  { id: "8", imageName: "img8.jpg", tag: "Nutrition" },
  { id: "9", imageName: "img9.jpg", tag: "Nutrition" },
  { id: "10", imageName: "img10.jpg", tag: "Nutrition" },
  { id: "11", imageName: "img11.jpg", tag: "Nutrition" },
  { id: "12", imageName: "img12.jpg", tag: "Nutrition" },
  { id: "13", imageName: "img13.jpg", tag: "Nutrition" },
  { id: "14", imageName: "img14.jpg", tag: "Fitness" },
  { id: "15", imageName: "img15.jpg", tag: "Fitness" },
  { id: "16", imageName: "img5.jpg", tag: "Nutrition" },
  { id: "17", imageName: "img10.jpg", tag: "Nutrition" },
  { id: "18", imageName: "img11.jpg", tag: "Nutrition" },
  { id: "19", imageName: "img12.jpg", tag: "Nutrition" },
  { id: "20", imageName: "img13.jpg", tag: "Fitness" },
  { id: "21", imageName: "img14.jpg", tag: "Fitness" },
  { id: "22", imageName: "img15.jpg", tag: "Fitness" },
  { id: "23", imageName: "img5.jpg", tag: "Nutrition" },
  { id: "24", imageName: "img6.jpg", tag: "Nutrition" },
];

const options = {
  settings: {
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },

  caption: {
    captionColor: "#a6cfa5",
    captionFontFamily: "Raleway, sans-serif",
    captionFontWeight: "300",
    captionTextTransform: "uppercase",
  },
};

function Gallery() {
  const [tag, setTag] = useState("All");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "All"
      ? setFilteredImages(Images)
      : setFilteredImages(Images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div className="App">
      <NavigationBar />
      <div className="tags">
        <TagButton
          name="All"
          tagActive={tag === "All" ? true : false}
          handleSetTag={setTag}
        />{" "}
        /
        <TagButton
          name="Nutrition"
          tagActive={tag === "Nutrition" ? true : false}
          handleSetTag={setTag}
        />{" "}
        /
        <TagButton
          name="Fitness"
          tagActive={tag === "Fitness" ? true : false}
          handleSetTag={setTag}
        />
      </div>
      <SRLWrapper options={options}>
        <div className="container">
          {filteredImages.map((image) => (
            <Paper key={image.id} className="image-card">
              <a href={`/images/${image.imageName}`}>
                <img
                  className="image"
                  src={`/images/${image.imageName}`}
                  alt=""
                />
              </a>
            </Paper>
          ))}
        </div>
      </SRLWrapper>
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
