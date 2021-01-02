import { AppBar, Avatar, Box, Divider, IconButton, ListItem, ListItemText, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
ArrowBack, 
AssignmentInd,
Home,
Apps,
ContactMail
} from "@material-ui/icons";
import avatar from "../avatar.png";

//CSS Styles
const useStyles = makeStyles(theme =>({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "30rem"
    },
    avatar : {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    }
}));


const Navbar = () => {
    const classes = useStyles();
    return (
        <>
        <Box className = {classes.menuSliderContainer} component = "div">
        <Avatar className = {classes.avatar} src ={avatar} alt = "Weihong Chen"/>

        </Box>



        <Box component="nav">
        <AppBar position ='static' style={{background: "#222"}}>
            <Toolbar>
                <IconButton>
                    <ArrowBack style ={{color: "tomato"}}/>
                </IconButton>
                <Typography variant="h5" style = {{color: "tan"}}> Portfolio </Typography>
            </Toolbar>
        </AppBar>
            
        </Box>
        </>
    )
}

export default Navbar
