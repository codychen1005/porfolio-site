import React from 'react'
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {TextField, Typography, Button, Grid, Box, ButtonBase} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar"

const useStyles=makeStyles(theme=>({
    form:{
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        position: "absolute",
    },
    button: {
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tomato"
    }
}))

const InputField = withStyles({
    root:{
        "& label.Mui-focused": {
            color:"white",

        },
        "& label":{
            color: "white",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldSet": {
                borderColor: "grey"
            },
            "&:hover fieldSet":{
                borderColor: "grey"
            },
            "&.Mui-focused fieldSet": {
                borderColor: "grey"
            }
        },
    },

})(TextField);

const Contacts = () => {
    const classes = useStyles()

    return (
        <Box component="div" style={{background: "#233", height: "100vh"}}>
            <Navbar/>
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant ="h5" style={{color:"white", textAlign: "center", textTransform: "uppercase" }}>
                        Want to Contact Me?
                    </Typography>
                    <InputField fullWidth = {true} label="Name" variant ="outlined" inputProps={{style:{color: "white"}}} margin ="dense" size="medium" />
                    <br/>

                    <InputField fullWidth = {true} label="Email" variant ="outlined" inputProps={{style:{color: "white"}}} margin ="dense" size="medium"/>

                    <br/>
                    <InputField fullWidth = {true} label="Leave your message here" variant ="outlined" inputProps={{style:{color: "white"}}} margin ="dense" size="medium"/>
                    <br/>  
                    <Button className={classes.button} variant="outlined"  fullWidth={true} endIcon={<SendIcon/>}>
                        Contact me
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contacts
