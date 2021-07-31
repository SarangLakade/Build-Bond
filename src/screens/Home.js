import React from "react";
import { Container, Grid, Typography, Button, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RadioButtonChecked, Chat } from "@material-ui/icons";
import HexagonalCard from "../component/HexagonalCard";
import Carousel from "react-bootstrap/Carousel";
import { FaQuoteRight } from "react-icons/fa";
import "./../Home.css";
import CustomFooter from "./../component/Footer";
import NavigationBar from "./../component/NavgationBar";
import { useHistory } from "react-router-dom";
import CustomChatBot from "./../component/CustomChatBot";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(4),
    borderRadius: 50,
    color: "#ffff",
    textTransform: "none",
  },
  paper: {
    borderRadius: 20,
    marginTop: -60,
  },
  Footer: {
    padding: theme.spacing(3),
    borderRadius: 20,
  },
  margin: {
    marginTop: 50,
    marginBottom: 50,
  },
  carouselContent: {
    position: "absolute",
    top: "15%",
    bottom: "50%",
    left: "50%",
    transform: `translateX(${-50}%) translateY(${50}%)`,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffff",
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  SocialIcon: {
    color: "#fff",
    margin: theme.spacing(2),
  },
}));

function Home() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <React.Fragment>
      <NavigationBar />
      <CustomChatBot />
      <Box bgcolor="#E5F4D9" pb={9}>
        <Container maxWidth="lg" sty>
          <Grid
            container
            alignContent="center"
            justify="center"
            alignItems="center"
          >
            <Grid item md={8} sm={6} xs={12}>
              <Typography variant="h1">
                Looking for an Online Nutritionist?
              </Typography>
              <Typography variant="body1" style={{ marginTop: 10 }}>
                Finding time to lead a healthy lifestyle can be tricky. Our
                1-on-1 online nutrition programs deliver guidance and support
                when and where you need it most.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => {
                  history.push("/appoinment");
                }}
              >
                Book Appoinment
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                color="primary"
                onClick={() => {
                  history.push("/service");
                }}
              >
                Our Services
              </Button>
            </Grid>
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Box m={2}>
                <img
                  src="/images/consultation.png"
                  style={{ width: 300 }}
                  alt="Logo"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Three circular card */}

      {/* <Container maxWidth="md">
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
      </Container> */}

      {/* About us Section */}

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
                src="/images/Aboutus.png"
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
                <Button
                  variant="contained"
                  className={classes.button}
                  color="primary"
                  onClick={() => {
                    history.push("/aboutus");
                  }}
                >
                  know More
                </Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <div
        style={{
          backgroundColor: "#E5F4D9",
          paddingTop: 50,
          paddingBottom: 50,
        }}
      >
        <Container maxWidth="md">
          <Typography
            style={{
              fontSize: 40,
              fontFamily: "Jost",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Why Us
          </Typography>
          <Typography variant="body1" style={{ textAlign: "center" }}>
            Finding time to lead a healthy lifestyle can be tricky. Our 1-on-1
            online nutrition programs deliver guidance and support when and
            Finding time to lead a healthy lifestyle can be tricky. Our 1-
          </Typography>
        </Container>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={4}
            style={{ marginTop: 30, marginBottom: 20 }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <HexagonalCard
                title="Feature 1"
                content1="Finding time to lead a healthy lifestyle can be tricky. "
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <HexagonalCard
                title="Feature 2"
                content1="Finding time to lead a healthy lifestyle can be tricky. "
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <HexagonalCard
                title="Feature 3"
                content1="Finding time to lead a healthy lifestyle can be tricky. "
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <HexagonalCard
                title="Feature 1"
                content1="Finding time to lead a healthy lifestyle can be tricky. "
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <HexagonalCard
                title="Feature 2"
                content1="Finding time to lead a healthy lifestyle can be tricky. "
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <HexagonalCard
                title="Feature 3"
                content1="Finding time to lead a healthy lifestyle can be tricky. "
              />
            </Grid>
          </Grid>
        </Container>
      </div>

      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="./images/Testimonial1.png"
              alt="First slide"
              style={{ height: 550, objectFit: "cover" }}
            />
            <div className={classes.carouselContent}>
              <div style={{ marginBottom: 10 }}>
                <FaQuoteRight style={{ fontSize: 50 }} />
              </div>
              <div>
                <Typography variant="h6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                  eu lobortis porttitor nibh sem convallis turpis. Facilisis
                  tortor scelerisque ullamcorper et, et eget. Congue amet vel
                  enim maecenas netus.
                </Typography>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="/images/Testimonial2.png"
              alt="Second slide"
              style={{ height: 550, objectFit: "cover" }}
            />
            <div className={classes.carouselContent}>
              <div style={{ marginBottom: 10 }}>
                <FaQuoteRight style={{ fontSize: 50 }} />
              </div>
              <div>
                <Typography variant="h6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                  eu lobortis porttitor nibh sem convallis turpis. Facilisis
                  tortor scelerisque ullamcorper et, et eget. Congue amet vel
                  enim maecenas netus.
                </Typography>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="/images/Testimonial3.png"
              alt="Third slide"
              style={{ height: 550, objectFit: "cover" }}
            />
            <div className={classes.carouselContent}>
              <div style={{ marginBottom: 10 }}>
                <FaQuoteRight style={{ fontSize: 50 }} />
              </div>
              <div>
                <Typography variant="h6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                  eu lobortis porttitor nibh sem convallis turpis. Facilisis
                  tortor scelerisque ullamcorper et, et eget. Congue amet vel
                  enim maecenas netus.
                </Typography>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div style={{ position: "relative", marginTop: 50, marginBottom: 50 }}>
        <img
          className="d-block w-100 "
          src="/images/subscriptionImage.png"
          alt="Third slide"
          style={{ height: 450, objectFit: "contain" }}
        />
        <div id="textContainer">
          <Typography id="h4Text">Your problem</Typography>
          <Typography id="h4Text">Our Solution</Typography>
          <Typography id="h4Text" style={{ color: "#51B700" }}>
            Be a nourished Person
          </Typography>

          <Button
            size="large"
            variant="contained"
            style={{
              borderRadius: 50,
              color: "#ffff",
              textTransform: "none",
              marginTop: 20,
            }}
            color="primary"
          >
            Book Appoinment
          </Button>
        </div>
      </div>
      {/* Footer> */}
      <CustomFooter />
    </React.Fragment>
  );
}

export default Home;
