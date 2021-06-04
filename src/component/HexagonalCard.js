import React from "react";
import { Box, Fab, Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Phone } from "@material-ui/icons";
import Hexagon from "react-svg-hexagon";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

function HexagonalCard(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2} className={classes.margin}>
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Hexagon fill="#51B700" height="90">
            <Phone fontSize="large" style={{ color: "#FFFFFF" }} />
          </Hexagon>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h3">{props.title}</Typography>
          <Typography variant="body2">{props.content1}</Typography>
          <Typography variant="body2">{props.content2}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default HexagonalCard;
