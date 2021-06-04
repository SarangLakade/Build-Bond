import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import PersonalInfo from "../component/PersonalInfo";
import PaymentForm from "./../component/PaymentForm";
import HealthHistory from "./../component/HealthHistory";
import SlotBook from "../component/SlotBook";
import { useSelector } from "react-redux";
import formValidation from "../Helper/formValidation";
import CustomFooter from "./../component/Footer";
import NavigationBar from "./../component/NavgationBar";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    borderRadius: 30,
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    borderRadius: 50,
    color: "#ffff",
    textTransform: "none",
  },
}));

const labels = [
  "Personal Info",
  "Health History",
  "Choose Date",
  "Payment info",
];

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  date: "",
  time: "",
  bloodGroup: "",
  height: "",
};

const fieldsValidation = {
  firstName: {
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 20,
  },
  lastName: {
    error: "",
    validate: "text",
    minLength: 2,
    maxLength: 20,
  },
  email: {
    error: "",
    validate: "email",
  },
  gender: {},
  appointmentDate: {},
  appointmentTime: {},
  height: {
    error: "",
    validate: "number",
    minLength: 2,
    maxLength: 20,
  },
  bloodGroup: {},
  phone: {
    error: "",
    validate: "phone",
    maxLength: 15,
  },
  weight: {
    error: "",
    validate: "number",
    maxLength: 6,
  },
  problem: {
    error: "",
    validate: "text",
    maxLength: 400,
  },
};

// const steps = [
//   "Shipping address",
//   "Health History",
//   "Slot Booking",
//   "Payment details",
// ];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <PersonalInfo />;
//     case 1:
//       return <HealthHistory />;
//     case 2:
//       return <SlotBook />;
//     case 3:
//       return <PaymentForm />;
//     default:
//       throw new Error("Unknown step");
//   }
// }

const Success = () => {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1">
        Your order number is #2001539. We have emailed your order confirmation,
        and will send you an update when your order has shipped.
      </Typography>
    </React.Fragment>
  );
};

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  // Proceed to next step
  const handleNext = () => setActiveStep((prev) => prev + 1);
  // Go back to prev step
  const handleBack = () => setActiveStep((prev) => prev - 1);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Set values
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // set errors
    const error = formValidation(name, value, fieldsValidation) || "";

    setFormErrors({
      [name]: error,
    });
  };
  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <PersonalInfo
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 1:
        return (
          <HealthHistory
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 2:
        return (
          <SlotBook
            handleNext={handleNext}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 3:
        return (
          <PaymentForm
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      default:
        break;
    }
  };

  return (
    <>
      {activeStep === labels.length ? (
        // Last Component
        <Success values={formValues} />
      ) : (
        <React.Fragment>
          <NavigationBar />
          <main className={classes.layout}>
            <Paper elevation="3" className={classes.paper}>
              <Typography component="h2" variant="h4">
                Book Your Appointment
              </Typography>

              <Stepper
                activeStep={activeStep}
                style={{ margin: "30px 0 15px" }}
                alternativeLabel
              >
                {labels.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              {handleSteps(activeStep)}

              {/* <Stepper
            activeStep={activeStep}
            className={classes.stepper}
            alternativeLabel
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleBack}
                      style={{ color: "#51B700" }}
                      className={classes.button}
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1
                      ? "Book Appoinment"
                      : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment> */}
            </Paper>
            <Copyright />
          </main>
        </React.Fragment>
      )}
    </>
  );
}
