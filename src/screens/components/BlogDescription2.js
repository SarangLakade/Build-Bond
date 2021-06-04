import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import blogImg2 from '../images/blog2.jpg';
import BlogData from './BlogData';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const useStyles = makeStyles({
 
  heading:{
    fontStyle:'poppins', 
    fontWeight: "bold",
    textAlign:"center",
    fontSize: "40px",
    margin:"20px 0 40px 0"
  },

  para:{
    fontStyle:'poppins',
    
    fontSize: "20px"
   
  },

  more:{
    fontFamily: "poppins",
    color: "#51B700",
    cursor: "pointer",
    marginLeft:"8px",
    fontSize:"18px"
  },

  
});



  


  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);




export default function BlogDescription1(){

    const classes = useStyles();

    return(
    <div style={{marginTop: "20px"}}>
    <Grid container  justify="center">
    <Grid spacing={10} item xs={10} >
    <Card  >
      <CardActionArea>
        <CardMedia 
          component="img"
          alt="blog"
          image={blogImg2}
          title="blog image"
          height="500px"
        />
        <CardContent>
        <ThemeProvider >
          <Typography className={classes.heading}  gutterBottom variant="h5" component="h2">
            {BlogData[1].heading}
          </Typography>
          </ThemeProvider>

          <ThemeProvider >
          
          <Typography className={classes.para} variant="body2" component="p">
            {BlogData[1].info}
          </Typography>
         
          </ThemeProvider>
        </CardContent>

      </CardActionArea>
      
    </Card>
    </Grid>
    </Grid>
    </div>
    )
}