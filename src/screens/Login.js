import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const responseGoogleSuccess = (response) => {
    const result = response?.profileObj;
    const token = response?.tokenId;
    console.log(response);
    // console.log(token);
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/");
      // window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };
  const responseGoogleFailure = (response) => {
    console.log("google sign in is unsuccessful ! try latter");
    console.log(response);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {/* <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <Link href="/" variant="body2" style={{ color: "white" }}>
              Sign In
            </Link>
          </Button> */}
        <GoogleLogin
          clientId="610964004414-bmik2ojfuorgsr40oalrudj6n3ed3jni.apps.googleusercontent.com"
          buttonText="Login with Google"
          accessType="offline"
          approvalPrompt="force"
          prompt="consent"
          redirectUri={"http://localhost:3000/auth"}
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogleFailure}
          cookiePolicy={"single_host_origin"}

          // 6bZLm6-2kD9tFsCIj4o3blQ3
        />
        {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form> */}
        {/* google button */}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
