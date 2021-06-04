import React from "react";
import { Fab, Grid, Typography } from "@material-ui/core";

import { Phone } from "@material-ui/icons";

function CircularCard(props) {
  return (
    <div>
      <Grid container spacing={0} style={{ marginTop: 10, marginBottom: 10 }}>
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Fab color={props.green ? "primary" : "white"} aria-label="add">
            <Phone style={{ color: props.green ? "#FFFFFF" : "#51B700" }} />
          </Fab>
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

export default CircularCard;
