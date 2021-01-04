import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute",
        opacity: "0.5"
    }
});

const Home = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar/>
            <Header/>
            <Particles
                canvasClassName ={classes.particlesCanva}
                params = {{
                    number:{
                        value: 1000,
                        density: {
                            enable: true,
                            value_area: 2000
                        }
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 100,
                            color: "tomato"
                        }
                    },
                    size: {
                        value: 80,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 5,
                            size_min: 0.1,
                            sync: true
                        }
                    },
                    opacity: {
                        value: 1,
                        random: true,
                        anim:{
                            enable:true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: true
                        }
                    }
                    
                }}
            />
            <Particles
                canvasClassName ={classes.particlesCanva}
                params = {{
                    number:{
                        value: 1000,
                        density: {
                            enable: true,
                            value_area: 2000
                        }
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 100,
                            color: "tomato"
                        }
                    },
                    size: {
                        value: 80,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 5,
                            size_min: 0.1,
                            sync: true
                        }
                    },
                    opacity: {
                        value: 1,
                        random: true,
                        anim:{
                            enable:true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: true
                        }
                    }
                    
                    
                }}
            />

                <Particles
                canvasClassName ={classes.particlesCanva}
                params = {{
                    number:{
                        value: 1000,
                        density: {
                            enable: true,
                            value_area: 2000
                        }
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 100,
                            color: "tomato"
                        }
                    },
                    size: {
                        value: 80,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 5,
                            size_min: 0.1,
                            sync: true
                        }
                    },
                    opacity: {
                        value: 1,
                        random: true,
                        anim:{
                            enable:true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: true
                        }
                    }
                    
                }}
            />

                <Particles
                canvasClassName ={classes.particlesCanva}
                params = {{
                    number:{
                        value: 1000,
                        density: {
                            enable: true,
                            value_area: 2000
                        }
                    },
                    shape: {
                        type: 'circle',
                        stroke: {
                            width: 100,
                            color: "tomato"
                        }
                    },
                    size: {
                        value: 80,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 5,
                            size_min: 0.1,
                            sync: true
                        }
                    },
                    opacity: {
                        value: 1,
                        random: true,
                        anim:{
                            enable:true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: true
                        }
                    }
                    
                }}
            />

        </>
    );
};

export default Home;
