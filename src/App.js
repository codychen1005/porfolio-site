import React from "react";
import './App.css';
import {Route} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from "./components/";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Cover from "./components/Cover";

function App() {
    return (
      <>
        <CssBaseline/>
        <Route exact path="/" component ={Home}/>
        <Route path="/resume" component ={Resume}/>
        <Route path="/cover" component ={Cover}/>
        <Route path="/projects" component ={Projects}/>
      </>
      );  
}

export default App;
