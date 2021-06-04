import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

// Destructuring props
const HealthHistory = ({
  handleNext,
  handleBack,
  handleChange,
  values: {
    firstName,
    lastName,
    email,
    gender,
    bloodGroup,
    height,
    weight,
    problem,
  },
  formErrors,
}) => {
  // Check if all values are not empty or if there are some error
  const isValid =
    height?.length > 0 &&
    !formErrors.height &&
    weight?.length > 0 &&
    !formErrors.weight &&
    bloodGroup?.length > 0 &&
    problem?.length > 0 &&
    !formErrors.problem;

  return (
    <Fragment>
      <Grid container spacing={2} noValidate>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Height"
            name="height"
            placeholder="Enter your Height"
            margin="normal"
            value={height || ""}
            onChange={handleChange}
            error={!!formErrors.height}
            helperText={formErrors.height}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Weight"
            name="weight"
            placeholder="Enter your Weight (cm)"
            margin="normal"
            value={weight || ""}
            onChange={handleChange}
            error={!!formErrors.weight}
            helperText={formErrors.weight}
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required margin="normal">
            <InputLabel>Blood Group</InputLabel>
            <Select
              value={bloodGroup}
              onChange={handleChange}
              name="bloodGroup"
            >
              <MenuItem value={"A+"}>A+</MenuItem>
              <MenuItem value={"A-"}>A-</MenuItem>
              <MenuItem value={"B+"}>B+</MenuItem>
              <MenuItem value={"B-"}>B-</MenuItem>
              <MenuItem value={"O+"}>O+</MenuItem>
              <MenuItem value={"O-"}>O-</MenuItem>
              <MenuItem value={"AB+"}>AB+</MenuItem>
              <MenuItem value={"AB-"}>AB-</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            label="Problem"
            name="problem"
            placeholder="Describe your Problem"
            type="text"
            value={problem || ""}
            onChange={handleChange}
            margin="normal"
            error={!!formErrors.problem}
            helperText={formErrors.problem}
            required
          />
        </Grid>
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
    </Fragment>
  );
};

export default HealthHistory;
