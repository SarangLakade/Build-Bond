import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  Box,
  TextField,
  Avatar,
  Fab,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Mail, Call, LocationOn } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";

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
    padding: theme.spacing(3),
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
  cFooter: {
    [theme.breakpoints.up("xs")]: {
      marginTop: 70,
    },
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: 0,
    },
  },
}));

export default function CustomFooter() {
  const classes = useStyles();
  const history = useHistory();

  const [account, setAccount] = useState({
    message: "",
    email: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    account[name] = value;
    setAccount(account);
  };

  const save = (e) => {
    e.preventDefault();
    console.log(account);

    emailjs
      .sendForm(
        "service_f6ce9jo",
        "template_x4gydwk",
        e.target,
        "user_nk5CLddP491SeT0Kdlj5P"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f6ce9jo",
        "template_1r53a0v",
        e.target,
        "user_nk5CLddP491SeT0Kdlj5P"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div
      style={{
        backgroundColor: "#51B700",

        marginTop: 90,
        paddingTop: 120,
        position: "relative",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          position: "absolute",
          top: -60,
          left: 0,
          right: 0,
          margin: "auto",
        }}
      >
        <Paper elevation={3} className={classes.Footer}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography style={{ fontFamily: "Poppins", fontSize: 30 }}>
                Join Our Blogs
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box display="flex" alignItems="center" my={2}>
                <form onSubmit={sendEmail}>
                  <TextField
                    // error
                    id="outlined-error-helper-text"
                    label="Email Address"
                    name="email"
                    type="email"
                    variant="outlined"
                    style={{ marginRight: 10 }}
                  />
                  <Button
                    size="large"
                    variant="contained"
                    type="submit"
                    style={{ borderRadius: 50, color: "#fff" }}
                    color="primary"
                  >
                    Subscribe
                  </Button>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <Container maxWidth="lg">
        <Grid
          container
          style={{ maxWidth: "lg" }}
          spacing={3}
          className={classes.cFooter}
        >
          <Grid item md={3} sm={6} xs={12}>
            <Typography variant="h5">Logo</Typography>
            <Box my={2} color="text.white">
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                ultrices tortor fringilla commodo ac.
              </Typography>
            </Box>
          </Grid>

          <Grid item md={3} sm={6} xs={6}>
            <Typography variant="h5">Contact Us</Typography>
            <Box my={2} display="flex" alignItems="center" color="text.white">
              <Mail color="white" fontSize="large" style={{ marginRight: 5 }} />
              <div style={{ display: "grid" }}>
                <Typography variant="body2">info@company1.com</Typography>
                <Typography variant="body2">info@company2.com</Typography>
              </div>
            </Box>
            <Box my={1} display="flex" alignItems="center" color="text.white">
              <Call color="white" style={{ marginRight: 5 }} fontSize="large" />
              <div style={{ display: "grid" }}>
                <Typography variant="body2">+91 9146082480</Typography>
                <Typography variant="body2">+91 8788864281</Typography>
              </div>
            </Box>
            <Box my={1} display="flex" alignItems="center" color="text.white">
              <LocationOn
                color="white"
                style={{ marginRight: 5 }}
                fontSize="large"
              />
              <Typography variant="body2">Katraj, Pune </Typography>
            </Box>
          </Grid>

          <Grid item md={3} sm={6} xs={6}>
            <Typography variant="h5">Quick Link</Typography>
            <Box my={2} color="text.white">
              <Typography
                variant="body2"
                style={{ marginTop: 3, marginBottom: 3 }}
              >
                <Link
                  onClick={() => {
                    history.push("/appoinment");
                  }}
                  color="inherit"
                >
                  Get Appoinment
                </Link>
              </Typography>
              <Typography
                variant="body2"
                style={{ marginTop: 3, marginBottom: 3 }}
              >
                <Link
                  color="inherit"
                  onClick={() => {
                    history.push("/service");
                  }}
                >
                  Services
                </Link>
              </Typography>
              <Typography
                variant="body2"
                style={{ marginTop: 3, marginBottom: 3 }}
              >
                <Link
                  color="inherit"
                  onClick={() => {
                    history.push("/blog");
                  }}
                >
                  Blogs
                </Link>
              </Typography>
              <Typography
                variant="body2"
                style={{ marginTop: 3, marginBottom: 3 }}
              >
                <Link
                  color="inherit"
                  onClick={() => {
                    history.push("/contactus");
                  }}
                >
                  Contact us
                </Link>
              </Typography>
            </Box>
          </Grid>

          <Grid item md={3} sm={6} xs={12}>
            <Typography variant="h5">FeedBack Form</Typography>
            <form noValidate autoComplete="off">
              <TextField
                fullWidth
                id="standard-basic"
                color="secondary"
                label="Email"
                type="text"
                name="message"
                onChange={handleChange}
              />
              <TextField
                fullWidth
                id="standard-basic"
                color="secondary"
                label="Message"
                type="text"
                name="email"
                onChange={handleChange}
              />
            </form>
            <Box textAlign="right">
              <Button
                size="large"
                variant="contained"
                style={{
                  borderRadius: 50,
                  color: "#51B700",
                  textTransform: "none",
                  marginTop: 20,
                }}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Fab className={classes.SocialIcon} aria-label="add">
            <Avatar src="/socialIcon/Facebook.png" />
          </Fab>
          <Fab className={classes.SocialIcon} aria-label="add">
            <Avatar src="/socialIcon/Dribbble.png" />
          </Fab>
          <Fab className={classes.SocialIcon} aria-label="add">
            <Avatar src="/socialIcon/GooglePlus.png" />
          </Fab>
          <Fab className={classes.SocialIcon} aria-label="add">
            <Avatar src="/socialIcon/Instagram.png" />
          </Fab>
          <Fab className={classes.SocialIcon} aria-label="add">
            <Avatar src="/socialIcon/Twitter.png" />
          </Fab>
        </Box>
      </Container>
      <Box
        display="flex"
        bgcolor="#4BA503"
        alignItems="center"
        justifyContent="center"
        py={2}
      >
        <Typography variant="body2" color="secondary">
          Copyright ©2020 Design & Developed by Team D13
        </Typography>
      </Box>
    </div>
  );
}
