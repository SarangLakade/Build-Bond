import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { addDays, set, lightFormat } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function SlotBook({
  handleNext,
  handleChange,
  handleBack,
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
  const classes = useStyles();
  const [startDate, setStartDate] = useState(new Date());

  const date = lightFormat(new Date(startDate), "yyyy-MM-dd");

  const [time, setTime] = useState(new Date());
  const startTime = lightFormat(new Date(time), "HH:mm");

  {
    console.log(startTime);
  }

  const isValid =
    firstName.length > 0 &&
    !formErrors.firstName &&
    lastName.length > 0 &&
    !formErrors.lastName &&
    email.length > 0 &&
    !formErrors.email &&
    gender.length > 0;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Choose Convenient Date
      </Typography>
      <Grid container justify="space-around">
        <DatePicker
          selected={startDate}
          isClearable
          inline
          onChange={(date) => {
            console.log(date);
            setStartDate(date);
          }}
          // showTimeSelect
          minDate={new Date()}
          maxDate={addDays(new Date(), 45)}
          dateFormat="MMMM d, yyyy"
          placeholderText="Please Select Date and Time"
        />
        <DatePicker
          inline
          selected={time}
          minTime={setHours(setMinutes(new Date(), 0), 17)}
          maxTime={setHours(setMinutes(new Date(), 30), 20)}
          excludeTimes={[setHours(setMinutes(new Date(), 30), 17)]}
          onChange={(d) => {
            console.log(time);
            setTime(d);
          }}
          showTimeSelect
          showTimeSelectOnly
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
      </Grid>
      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button
          variant="contained"
          color="default"
          onClick={handleBack}
          style={{ marginRight: 10 }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          disabled={!isValid}
          color="primary"
          onClick={isValid ? handleNext : null}
        >
          Next
        </Button>
      </div>
    </React.Fragment>
  );
}
