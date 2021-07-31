import "./css/AboutUs.css";
import React, { useState } from "react";
import { TextField, Typography } from "@material-ui/core";
import NavigationBar from "./../component/NavgationBar";
import Header from "./components/Header";
import CustomFooter from "../component/Footer";
import emailjs from "emailjs-com";

export default function Contact() {
  const [account, setAccount] = useState({
    username: "",
    password: "",
    description: "",
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

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_f6ce9jo",
  //       "template_x4gydwk",
  //       e.target,
  //       "user_nk5CLddP491SeT0Kdlj5P"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   e.target.reset();
  // }

  return (
    <div className="container-cont-abou">
      <NavigationBar />
      <Header title="Contact Us" />
      <div className="row-cont-abou">
        <div className="column-cont-abou">
          <Typography
            style={{ fontSize: 40, fontFamily: "Jost", fontWeight: 600 }}
          >
            Drop a Message here
          </Typography>
          <form method="post" onSubmit={save}>
            <div className="row-cont-abou">
              <div className="column-cont-abou">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  type="text"
                  name="name"
                  label="Name"
                  onChange={handleChange}
                />
              </div>

              <div className="column-cont-abou">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  type="text"
                  name="email"
                  label="Email"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row-cont-abou">
              <div className="column-cont-abou">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  label="subject"
                  type="text"
                  name="subject"
                  onChange={handleChange}
                />
              </div>

              <div className="column-cont-abou">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  type="text"
                  label="Message"
                  name="message"
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
          </form>
        </div>

        <div className="column-cont-abou">
          <img
            src={"/images/contactUs.png"}
            alt="contact-us"
            className="img-cont-abou"
          ></img>
        </div>

        <div className="container-cont-abou">
          {/* <img
            src={"/images/map.png"}
            alt="map"
            className="img-cont-abou"
          ></img> */}
        </div>
      </div>
      <iframe
        className="responsive-map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60538.339326375986!2d73.833676!3d18.499678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x31a7749831cbb41e!2sThe%20Senate%20Business%20Centre%20%26%20Co-working%20Spaces%20-%20Erandwane!5e0!3m2!1sen!2sus!4v1622566092010!5m2!1sen!2sus"
        title="map"
        allowfullscreen
        loading="lazy"
      ></iframe>
      <CustomFooter />
    </div>
  );
}
