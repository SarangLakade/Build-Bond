import React, { Profiler } from "react";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import Prescription from "./components/Prescription";

import CustomFooter from "./../component/Footer";
import NavigationBar from "./../component/NavgationBar";
export default function Profile() {
  return (
    <>
      <NavigationBar />
      <Header title="Profile"> </Header>
      <UserInfo></UserInfo>
      <Prescription></Prescription>
      <CustomFooter />
    </>
  );
}
