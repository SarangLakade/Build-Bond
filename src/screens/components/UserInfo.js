import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { shadows } from '@material-ui/system';
import Header from "./Header";




const useStyles = makeStyles((theme) => ({
    avator: {
        [theme.breakpoints.up('sm')]:{
        backgroundColor: "#ffff",
        color: "#51B700",
        height: theme.spacing(20),
        width: theme.spacing(20),
        boxShadow: theme.shadows[4]
    },

    [theme.breakpoints.down('sm')]:{
        backgroundColor: "#ffff",
        color: "#51B700",
        height: theme.spacing(15),
        width: theme.spacing(15),
        boxShadow: theme.shadows[4],
        margin:"auto"
    }
    },

    heading:{
        
        margin: "20px",
        padding: "5px",
        borderBottom: "5px solid #51B700",
        width: "auto",
        width: "150px",
        fontFamily:"jost"
    },

    card:{
        [theme.breakpoints.up('sm')]:{
        boxShadow: theme.shadows[4],
        borderRadius:"20px",
        backgroundColor: "#ffff",
    },

    [theme.breakpoints.down('sm')]:{
        borderRadius:"20px",
        backgroundColor: "#ffff",
        margin:"auto"
    }
    },

    box:{

        boxShadow: theme.shadows[1],
        margin: "20px",
        padding: "5px 15px",
        width: "auto",
        fontFamily:"poppins",
        borderRadius:"10px"
    }

   

}));

export default function UserInfo() {
    const classes = useStyles();
    let name="XYZ";
    return (
        <div style={{  marginTop: "-60px" }}>
            <Grid container  justify="center" >

                <Grid style={{marginBottom:"50px"}} item xs={4} sm={3} md={2} lg={2} >
                    <Avatar className={classes.avator} src="/broken-image.jpg" />
                </Grid>

                <Grid style={{ position:"relative"}} item xs={10} sm={8} md={6} lg={5} >
                    
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.heading} gutterBottom variant="p" component="h2">
                                Hello, {name}
                            </Typography>

                            <Box className={classes.box}>
                            <Typography gutterBottom variant="p" component="p">
                                Name
                            </Typography>
                            </Box>

                            <Box className={classes.box}>
                            <Typography gutterBottom variant="p" component="p">
                                Surname
                            </Typography>
                            </Box>

                            <Box className={classes.box}>
                            <Typography gutterBottom variant="p" component="p">
                                Email Id
                            </Typography>
                            </Box>
                            

                        </CardContent>
                    </Card>
                    
                </Grid>

            </Grid>
        </div>

       

    )
}