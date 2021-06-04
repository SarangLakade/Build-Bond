import React from "react";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { shadows } from "@material-ui/system";
import Header from "./Header";
import jsPDF from "jspdf";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import { OverlayTrigger, Tooltip } from "../../../node_modules/react-bootstrap";

const handle = () => {
  var doc = new jsPDF();
  doc.setFontSize(30);
  doc.text("Hospital Name", 70, 20);
  doc.setFontSize(16);
  doc.text("Doctor's Name", 20, 40);
  doc.setFontSize(14);
  doc.text("Address", 20, 50);
  doc.setFontSize(14);
  doc.text("Phone number", 20, 60);
  doc.setDrawColor(82, 183, 0);
  doc.setLineWidth(2.0);
  doc.line(20, 70, 190, 70);
  doc.setFontSize(14);
  doc.text("Prescription", 20, 100);
  doc.setDrawColor(82, 183, 0);
  doc.save("prescription.pdf");
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: "100px",
    marginBottom: "50px",
  },
}));

export default function Prescription() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={10} sm={10} md={8} lg={7}>
          <AppBar style={{ backgroundColor: "#51B700" }} position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Prescription" {...a11yProps(0)} />
              <Tab label="Subscription" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <OverlayTrigger
              placement="right-end"
              overlay={
                <Tooltip id="button-tooltip-1">Download Prescription</Tooltip>
              }
            >
              <button onClick={handle} disabled={false}>
                <PictureAsPdfIcon />
                Download
              </button>
            </OverlayTrigger>
          </TabPanel>
          <TabPanel value={value} index={1}></TabPanel>
        </Grid>
      </Grid>
    </div>
  );
}
