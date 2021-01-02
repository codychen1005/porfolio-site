import { AppBar, Avatar, Box, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core';
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from "@material-ui/core/Drawer";
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
        background: "#4caf50",
        height: "100%"
    },
    avatar : {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(12),
        height: theme.spacing(12)
    },

    listItem: {
        color: '#e3f2fd',

    }
}));

const menuItems = [
    {
     listIcon: <Home/>,
     listText: "Home"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts"
    },

]

const Navbar = () => {
    const [state, setState] = useState({
        left:false
    });
    const toggleSlider = ((slider,open) =>() => {
        setState({ ...state, [slider]: open });
    });

    const classes = useStyles();
    const sideList = slider => (
        <Box className = {classes.menuSliderContainer} component = "div">
        <Avatar className = {classes.avatar} src ={avatar} alt = "Weihong Chen"/>
        <Divider/>
        <List>
            {menuItems.map((lsItem, key)=>(
                <ListItem button ={key}>
                <ListItemIcon className={classes.listItem}> {lsItem.listIcon} </ListItemIcon>
                <ListItemText className={classes.listItem} primary = {lsItem.listText} />
                </ListItem>
            ))}
        </List>
        </Box>
    );

    return (
        <>
        <Box component="nav">
        <AppBar position ='static' style={{background: "#222"}}>
            <Toolbar>
                <IconButton onClick = {toggleSlider("left", true)}>
                    <ArrowBack style ={{color: "tomato"}}/>
                </IconButton>
                <Typography variant="h5" style = {{color: "tan"}}> Portfolio </Typography>
            <MobilRightMenuSlider 
            anchor ="left"
            open={state.left}
            onClose={toggleSlider("left", false)}
            > 

                {sideList("left")}
                
            </MobilRightMenuSlider>
            </Toolbar>
        </AppBar>
            
        </Box>
        </>
    )
}

export default Navbar
