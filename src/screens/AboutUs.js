import "./css/AboutUs.css";
import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import NavigationBar from "./../component/NavgationBar";
import CustomFooter from "./../component/Footer";
import Header from "./components/Header";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import RadioButtonChecked from "@material-ui/icons/RadioButtonChecked";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: 20,
    marginTop: -50,
  },
  margin: {
    marginTop: 20,
  },
}));

export default function AboutUs() {
  const classes = useStyles();
  return (
    <div className="container-cont-abou">
      <NavigationBar />
      <Header title="About Us" />

      <Container maxWidth="lg" className={classes.margin}>
        <Box>
          <Grid
            container
            alignItems="center"
            alignContent="center"
            justify="center"
          >
            <Grid item xs={12} sm={6} md={4} style={{ textAlign: "center" }}>
              <img
                src="/images/contactUs.png"
                style={{ width: 250, textAlign: "center" }}
                alt="Logo"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={8}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <Typography
                  style={{ fontSize: 40, fontFamily: "Jost", fontWeight: 600 }}
                >
                  About The Company
                </Typography>
                <Typography variant="body1">
                  Finding time to lead a healthy lifestyle can be tricky. Our
                  1-on-1 online nutrition programs deliver guidance and support
                  when and where you need it most.
                </Typography>
                <div style={{ display: "flex", marginTop: 10 }}>
                  <RadioButtonChecked
                    color="primary"
                    style={{ marginRight: 5 }}
                  />
                  <Typography variant="body2">First Feature </Typography>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                  <RadioButtonChecked
                    color="primary"
                    style={{ marginRight: 5 }}
                  />
                  <Typography variant="body2">Secound Feature </Typography>
                </div>
                <div style={{ display: "flex", marginTop: 10 }}>
                  <RadioButtonChecked
                    color="primary"
                    style={{ marginRight: 5 }}
                  />
                  <Typography variant="body2">Third Feature </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
        <div className="container-cont-abou">
          {/* <div className="container-cont-abou">
          <div className="row-cont-abou">
          <div className="column-cont-abou">
          <img
          src={"/images/contactUs.png"}
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
            </div>
            </div>
          </div> */}
          <div className="container-cont-abou">
            <div className="container-expertise">
              <div className="row-cont-abou">
                <div className="column-cont-abou">
                  <Typography
                    style={{
                      fontSize: 40,
                      fontFamily: "Jost",
                      fontWeight: 600,
                    }}
                  >
                    Our Expertise
                  </Typography>
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
                    src={"/images/contactUs.png"}
                    alt="contact-us"
                    className="img-cont-abou"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <CustomFooter />
    </div>
  );
}
