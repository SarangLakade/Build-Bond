import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import blog1 from '../images/blog1.jpg';
import BlogData from './BlogData';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const useStyles = makeStyles({

  card: {
    margin: " 20px",
    borderRadius: "15px",
    borderBottom: '5px solid rgba(81, 183, 0, 0.81)'
  },
  heading: {
    fontStyle: 'poppins',
    fontWeight: 500,
    height:"60px"
  },

  para: {
    fontStyle: 'poppins',
    height: "100px",
    overflow: "hidden",
    textAlign:"center"
  },

  more: {
    fontFamily: "poppins",
    color: "#51B700",
    cursor: "pointer",

  },


  date: {
    marginLeft: "auto",
    marginRight: "5px",
    fontFamily: "poppins",
    color: "#51B700",
    cursor: "pointer"
  }

});
export default function BlogCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={props.image}
          title="Contemplative Reptile"
        />

        <CardContent>
          <Typography className={classes.heading} variant="h5" component="h2">
            {props.heading}
          </Typography>

          <Typography variant="body2"  component="p">
          <div className={classes.para}>
            {props.info}
            </div>
          </Typography>
        </CardContent>

      </CardActionArea>

        <Divider ></Divider>
        
        <CardActions >
          <Typography style={{ marginRight: "auto", marginLeft: "5px" }} gutterBottom>
          
            <Link to={props.link} className={classes.more}>Read More<ArrowForwardIosIcon style={{ fontSize: "12px" }} /></Link>
           
          </Typography>

          <Typography gutterBottom className={classes.date}><CalendarTodayIcon style={{ fontSize: "15px" }} />10 jan 2021 </Typography>
        </CardActions>
        
        
    </Card>
  );
}