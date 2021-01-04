import React from 'react';
import {Box,Grid,Card,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography} from "@material-ui/core";
import {makeStyle, makeStyles} from "@material-ui/core/styles";
import Navbar from "./Navbar";
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/react.png";

const useStyles = makeStyles({
    mainContainer:{
        background: "#233",
        height:"100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin:"3rem",
        margin: "5rem auto"
    }
});

const Projects = () => {
    const classes = useStyles();
    return (
        <Box component = "div" className={classes.mainContainer}>
            <Navbar/>
            <Grid container justify="center">
            {/*Project 1*/}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="200"
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component ="p">
                                    Project 1 description:...
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color ="primary">
                                    Share
                                </Button>
                                <Button size="small" color ="primary">
                                    Live Demo
                                </Button>           
                            </CardActions>                        
                    </Card>
                </Grid>

                {/*Project 2*/}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 2"
                                height="200"
                                image={project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 2
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component ="p">
                                    Project 2 description:...
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color ="primary">
                                    Share
                                </Button>
                                <Button size="small" color ="primary">
                                    Live Demo
                                </Button>           
                            </CardActions>             
                    </Card>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Projects