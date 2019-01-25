import React, { Component } from 'react';
import {Jumbotron,Button} from 'reactstrap'
import mail from './img/mail.png'
import ANIMATE from "animate.css";
import './aboutstyles.css'

class Contact extends Component {
    render() { 
        return ( 
            <div className="animated slideInRight faster">
                <Jumbotron style= {{minHeight: "100vh", height:"100vh",padding: "40px 0px 0px 10px", backgroundColor: "#E4D8F5"}}>
                <div id="header" style={{padding: "60px 0px 0px 0px"}}>
                    <h1 className="display-3" style={{fontSize:"60px", fontFamily: "Karla, sans-serif"}}><b> Let's work together!</b></h1>
                        <a href="mailto:tanviw@hotmail.com"><Button className="btn dBlue logo" style={{fontSize:"30px", margin: "60px 0px 0px 0px", border: "0px"}}> Contact Me! </Button>  <br /> 
                        <img className="img-responsive logo" src={mail} alt="Email" style={{ margin:"20px", width:"60px"}}/> </a>
                </div>
                </Jumbotron>
            </div>
         );
    }
}
 
export default Contact;