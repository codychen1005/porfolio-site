import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
    root:{
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,

        }
    },

})

const Footer = () => {
    const classes = useStyles();
    return (
        (<BottomNavigation width="auto" style={{background:"#222"}}>
            <BottomNavigationAction className={classes.root} style ={{padding:0}} icon={<FacebookIcon/>}
                icon={
                    <a href="https://github.com/codychen1005">
                        <FacebookIcon/>
                    </a>
                }
            />
            <BottomNavigationAction className={classes.root} style ={{padding:0}} icon={<LinkedInIcon/>}
                icon={
                    <a href="https://github.com/codychen1005">
                        <LinkedInIcon/>
                    </a>
                }
            />
            <BottomNavigationAction className={classes.root} style ={{padding:0}} icon={<GitHubIcon/>}
                icon={
                    <a href="https://github.com/codychen1005">
                        <GitHubIcon/>
                    </a>
                }
            />
             <BottomNavigationAction className={classes.root} style ={{padding:0}} icon={<InstagramIcon/>}
                icon={
                    <a href="https://github.com/codychen1005">
                        <InstagramIcon/>
                    </a>
                }
            />
        </BottomNavigation>)
    )
}

export default Footer
