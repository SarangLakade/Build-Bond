import React, { isValidElement, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { createPosts } from "../actions/post";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}
const _DEV_ = document.domain === "localhost";

export default function PaymentForm({
  handleNext,
  handleBack,
  handleChange,
  values: {
    firstName,
    lastName,
    email,
    gender,
    appointmentDate,
    appointmentTime,
    bloodGroup,
    height,
  },
  formErrors,
}) {
  const [name, setName] = useState("sarang");

  const [isValid, setIsValid] = useState();

  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log({
      firstName,
      lastName,
      gender,
      appointmentDate,
      appointmentTime,
      bloodGroup,
      height,
    });
    dispatch(createPosts({ firstName, lastName, gender }));
    handleNext();
  };

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. are you online");
      return;
    }

    const data = await fetch("http://localhost:5000/razorpay", {
      method: "POST",
    }).then((t) => t.json());

    const options = {
      key: "rzp_test_iy0Rqq8BWgZAGy",
      amount: data.amount,
      currency: data.currency,
      name: "Acme Corp",
      description: "Thank You",
      // image: "https://example.com/your_logo",
      order_id: data.id,
      handler: function(response) {
        setIsValid(response.razorpay_payment_id);
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
      },
      prefill: {
        name,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <a
          className="App-link"
          onClick={displayRazorpay}
          target="_bank"
          rel="nooper noreferrer"
        >
          Pay 55
        </a>
      </Grid>
      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button variant="contained" color="default" onClick={handleBack}>
          Back
        </Button>
        <Button
          style={{ marginLeft: 20 }}
          variant="contained"
          disabled={!isValid}
          color="primary"
          onClick={!isValid ? handleSubmit : null}
        >
          Confirm & Continue
        </Button>
      </div>
    </React.Fragment>
  );
}
