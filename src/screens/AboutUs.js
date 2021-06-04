import "./css/AboutUs.css";
import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import NavigationBar from "./../component/NavgationBar";
import CustomFooter from "./../component/Footer";
import Header from "./components/Header";
import {
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  Box,
  Fab,
} from "@material-ui/core";
import CircularCard from "../component/CircularCard";
import RadioButtonChecked from "@material-ui/icons/RadioButtonChecked";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: 20,
    marginTop: -50,
  },
}));

export default function AboutUs() {
  const classes = useStyles();
  return (
    <div className="container-cont-abou">
      <NavigationBar />
      <Header title="About Us" />
      {/* <Box>
        <Container maxWidth="md">
          <Paper elevation={3} className={classes.paper}>
            <Grid
              container
              alignContent="center"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={6} md={3}>
                <CircularCard
                  green={true}
                  title="Contact No"
                  content1="+91 9146082480"
                  content2="+07233 238845"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CircularCard
                  green={true}
                  title="Contact No"
                  content1="+91 9146082480"
                  content2="+07233 238845"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CircularCard
                  green={true}
                  title="Contact No"
                  content1="+91 9146082480"
                  content2="+07233 238845"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <CircularCard
                  green={true}
                  title="Contact No"
                  content1="+91 9146082480"
                  content2="+07233 238845"
                />
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box> */}
      <div className="container-cont-abou">
        <div className="container-cont-abou">
          <div className="row-cont-abou">
            <div className="column-cont-abou">
              <img
                src={"contactUs.png"}
                alt="about-us"
                className="img-cont-abou"
              ></img>
            </div>
            <div className="column-cont-abou">
              <h1>About The Company</h1>
              <p>
                Finding time to lead a healthy lifestyle can be tricky.<br></br>
                Our 1-on-1 online nutrition programs deliver guidance <br></br>
                and support when and where you need most.
              </p>
              <ul>
                <li>
                  <RadioButtonChecked
                    fontSize="small"
                    className="icons-about"
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp; First Feature
                </li>
                <br></br>
                <li>
                  <RadioButtonChecked
                    fontSize="small"
                    className="icons-about"
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp; Second Feature
                </li>
                <br></br>
                <li>
                  <RadioButtonChecked
                    fontSize="small"
                    className="icons-about"
                  />
                  &nbsp;&nbsp;&nbsp;&nbsp; Third Feature
                </li>
                <br></br>
              </ul>
              <button className="btn-primary">Know More</button>
            </div>
          </div>
        </div>
        <div className="container-cont-abou">
          <div className="container-expertise">
            <div className="row-cont-abou">
              <div className="column-cont-abou">
                <h2 className="underline-small">Our Expertise</h2>
                <div className="row-cont-abou">
                  <div className="column-cont-abou">
                    <div className="card-expertise">
                      <PersonIcon fontSize="large" className="icons-about" />
                      <h3>Title Third</h3>
                      <p>Some text that describes me lorem ipsum.</p>
                    </div>
                  </div>
                  <div className="column-cont-abou">
                    <div className="card-expertise">
                      <PersonIcon fontSize="large" className="icons-about" />
                      <h3>Title Third</h3>
                      <p>Some text that describes me lorem ipsum.</p>
                    </div>
                  </div>
                </div>
                <div className="row-cont-abou">
                  <div className="column-cont-abou">
                    <div className="card-expertise">
                      <PersonIcon fontSize="large" className="icons-about" />
                      <h3>Title Third</h3>
                      <p>Some text that describes me lorem ipsum.</p>
                    </div>
                  </div>
                  <div className="column-cont-abou">
                    <div className="card-expertise">
                      <PersonIcon fontSize="large" className="icons-about" />
                      <h3>Title Third</h3>
                      <p>Some text that describes me lorem ipsum.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column-abou-img">
                <img
                  src={"contactUs.png"}
                  alt="contact-us"
                  className="img-cont-abou"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
}
