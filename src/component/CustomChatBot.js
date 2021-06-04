import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import emailjs from "emailjs-com";
import { json } from "body-parser";

const config = {
  width: "400px",
  height: "500px",
  background: "#73ff00",
  floating: true,
};

const theme = {
  background: "#f5f8fb",
  fontFamily: "Poppins",
  headerBgColor: "#51B700",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#51B700",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

export default function CustomChatBot() {
  const Review = ({ name, email, message }) => {
    console.log(name);
    //   var templateParams = {
    //     name: name.value,
    //     email: email.value,
    //     message: message.value
    // };

    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
    //     .then(function(response) {
    //        console.log('SUCCESS!', response.status, response.text);
    //     }, function(error) {
    //        console.log('FAILED...', error);
    //     });
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <ChatBot
          // speechSynthesis={{ enable: true, lang: "en" }}
          steps={[
            {
              id: "intro",
              message: "Hi😍",
              trigger: "intro-wellcome",
            },
            {
              id: "intro-wellcome",
              message:
                "Wellcome to Build and Bond, i'm your virtual chat assistant and i'm here to help you today.😊",
              trigger: "q-name",
            },
            {
              id: "q-name",
              message: "What's yout name?",
              trigger: "name",
            },
            {
              id: "name",
              user: true,
              validator: (value) => {
                if (
                  /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value)
                ) {
                  return true;
                } else {
                  return "Please input alphabet characters only.";
                }
              },
              trigger: "a-name",
            },
            {
              id: "a-name",
              message: "Hi {previousValue}, How may i assist you?",
              trigger: "option",
            },
            {
              id: "option",
              options: [
                { value: 1, label: "Book Appoinment", trigger: "b-appoinment" },
                { value: 2, label: "Customer Concern", trigger: "c-Concern" },
              ],
            },
            {
              id: "c-Concern",
              message:
                "Please let us know with what you'd like to assistance today?",
              trigger: "options",
            },
            {
              id: "options",
              options: [
                { value: 1, label: "Query", trigger: "c-email" },
                { value: 2, label: "Complaints", trigger: "c-email" },
                { value: 2, label: "Feedback", trigger: "c-email" },
              ],
            },

            {
              id: "b-appoinment",
              message:
                "Refer this link to book your Appoinment http://localhost:3000/appoinment . Thank You",
              end: true,
            },
            {
              id: "c-email",
              message: "Please enter your Email Address",
              trigger: "email",
            },
            {
              id: "email",
              user: true,

              validator: (value) => {
                if (
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
                ) {
                  return console.log(value);
                } else {
                  return "Please enter a valid email.";
                }
              },
              trigger: "c-phone",
            },
            {
              id: "c-phone",
              message: "please Describe it in few words",
              trigger: "input",
            },
            {
              id: "input",
              user: true,
              trigger: "response",
            },
            {
              id: "response",
              message: "Thanks For Response",
              component: <Review />,
            },
          ]}
          {...config}
        />
      </ThemeProvider>
    </div>
  );
}
