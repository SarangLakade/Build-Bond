import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import Service from "./screens/Service";
import Gallery from "./screens/Gallery";
import Contact from "./screens/ContactUs";
import Profile from "./screens/Profile";
import BlogDiscription from "./screens/BlogDiscription";
import Blog from "./screens/Blog";
import Appoinment from "./screens/Appoinment";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import BlogDescription1 from "./screens/components/BlogDescription1";
import BlogDescription2 from "./screens/components/BlogDescription2";
import BlogDescription3 from "./screens/components/BlogDescription3";
import BlogDescription4 from "./screens/components/BlogDescription4";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/post.js";

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 58,
      fontFamily: "Jost",
      fontWeight: 500,
    },
    h2: {
      fontSize: 40,
      fontFamily: "Jost",
      fontWeight: 600,
    },
    h3: {
      fontSize: 25,
      fontFamily: "Jost",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "Jost",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "Poppins",
      fontWeight: 600,
    },
    h6: {
      fontSize: 20,
      fontFamily: "Poppins",
      fontWeight: 500,
      fontStyle: "italic",
    },

    body1: {
      fontWeight: 400,
      fontSize: 18,
      fontFamily: "Poppins",
    },
    body2: {
      fontWeight: 400,
      fontSize: 17,
      fontFamily: "Poppins",
    },
    body3: {
      fontWeight: 400,
      fontSize: 20,
      fontFamily: "Poppins",
    },
    button: {
      fontFamily: "Jost",
      fontWeight: "500",
      color: "#ffff",
    },
  },
  palette: {
    primary: {
      main: "#51B700",
    },
    secondary: {
      main: "#FFFF",
    },
    text: { white: "#F2F3F4" },
  },
});

function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user);
  useEffect(() => {
    dispatch(getPosts);
  }, [dispatch]);

  function PrivateRoute({ children, ...rest }) {
    // let auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user !== null ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/aboutus" component={AboutUs} exact />
            <Route path="/service" component={Service} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/contactus" component={Contact} />
            <Route path="/blog" component={Blog} />
            <Route path="/blogDiscription" component={BlogDiscription} />

            <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute>
            <PrivateRoute path="/appoinment">
              <Appoinment />
            </PrivateRoute>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />

            <Route
              path="/blogdescription1"
              component={BlogDescription1}
            ></Route>
            <Route
              path="/blogdescription2"
              component={BlogDescription2}
            ></Route>
            <Route
              path="/blogdescription3"
              component={BlogDescription3}
            ></Route>
            <Route
              path="/blogdescription4"
              component={BlogDescription4}
            ></Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
