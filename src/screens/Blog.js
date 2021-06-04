import React from "react";
import Header from "./components/Header";
import BlogArea from "./components/BlogArea";
import BigBlog from "./components/BigBlog";
import NavigationBar from "./../component/NavgationBar";
import CustomFooter from "../component/Footer";
export default function Blog() {
  return (
    <>
      <NavigationBar />
      <Header title="Our Blogs"></Header>
      <BigBlog link="/blogdescription1"></BigBlog>
      <BlogArea></BlogArea>
      <CustomFooter />
    </>
  );
}
