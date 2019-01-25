import React, { Component } from 'react';
import profile from './img/profile.JPG'
import Radium from 'radium'
// import {Button} from 'reactstrap'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ANIMATE from "animate.css";
// import {Link} from 'react-router-dom'
var style = {
    badgeStyle: {
        margin:"0px 10px 10px 20px ",
        fontSize:"2vh",
        color: "#202429",
        border: "1px ridge #202429"
    }
} 
const rightStyle = {
    '@media only screen and (max-width: 780px)': {
        width: "100%",
        position:"absolute",
        bottom:"0px",
        left:"0px",
        height: "55%",
        padding:"20px 20px 0px 20px", 
        textAlign:"left",
    },
    '@media only screen and (min-width: 781px)': {
        position:"absolute",
        top:"0px",
        width:"70%",
        right:"0px",
        padding:"100px 80px 0px 80px", 
        textAlign:"left",
    }

}
const leftStyle = {
    '@media only screen and (max-width: 780px)': {
        position:"absolute",
        top:"10px",
        left:"0px", 
        width:"100%",
        height: "45%", 
        padding:"0px 0px 0px 0px", 
        textAlign:"right", 
        overflow:"hidden",
        backgroundColor:"#D6A5B3"
    },
    '@media only screen and (min-width: 781px)': {
        position:"fixed",
        top:"0px",
        left:"0px", 
        width:"30%", 
        padding:"60px 0px 0px 0px", 
        textAlign:"right", 
        overflow:"auto",
        backgroundColor:"#D6A5B3"
    }
}
const profileStyle = {
    '@media only screen and (max-width: 780px)': {
        float: "left",
        height: "20%",
        width: "auto"
         
    },
    '@media only screen and (min-width: 781px)': {
        maxWidth:"60%",
        height:"auto",
        margin:"20px 0px",
    }
}
const textStyle = {
    '@media only screen and (max-width: 780px)': {
        marginTop:"10px",
        fontSize: "12px"
         
    },
}

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{fontFamily: "Karla, sans-serif"}}> 
                <div id="leftside" style={leftStyle} className="animated slideInRight faster">
                        <div id="innerleftside" style={{ padding:"60px 60px 0px 0px",  height:"100vh"}}>
                            <img className="img-thumbnail" src={profile} alt="Profile" style={profileStyle}/>
                            <div id="text" style={textStyle}>
                            <h1 style={{fontSize:"4vh"}}> <b>Tanvi Wagle </b></h1>
                            <p> <b> <em> student &middot; developer &middot; problem-solver </em> </b> </p>
                            </div>
                            <span style={style.badgeStyle} className="badge dPink">HTML</span>
                            <span style={style.badgeStyle} className="badge dBlue"> JAVASCRIPT </span>
                            <span style={style.badgeStyle} className="badge dGreen2"> CSS</span>
                            <span style={style.badgeStyle} className="badge dGreen"> REACT</span>
                            <span style={style.badgeStyle} className="badge dNavy">IOS</span>
                            <span style={style.badgeStyle} className="badge dPink">PYTHON</span>
                            <span style={style.badgeStyle} className="badge dBlue">SWIFT</span>
                            <span style={style.badgeStyle} className="badge dPurple">JAVA</span>
                            <span style={style.badgeStyle} className="badge dGreen2">LINUX</span>
                            <span style={style.badgeStyle} className="badge dGreen">ANDROID</span>
                            <span style={style.badgeStyle} className="badge dPink">PASCAL</span>
                            <span style={style.badgeStyle} className="badge dBlue">FIREBASE</span>
                            <span style={style.badgeStyle} className="badge dPurple">GITHUB</span>
                            <span style={style.badgeStyle} className="badge dNavy"> ANGULAR </span>
                        </div>
                </div>
                <div id="rightside" style={rightStyle} className="animated slideInRight faster">
                    <h1 className="display-3"> About Me </h1>
                    <h2> Hello World! My name is Tanvi Wagle. I am currently a student at Rutgers University working towards a Bachelor's Degree in Computer Science. </h2>
                    <br />
                    <div style={{backgroundColor:"#e1e6f9"}} className="rounded"> 
                        <h4 style={{fontFamily: "Inconsolata, monospace"}}> Tanvi.background </h4> 
                        <p style={{fontSize:"18px"}}> 
                        I fell in love with computer science in high school where the first language I was taught was Pascal (People still teach pascal? Crazy right?). That is where my journey began and I found the subject that fueled my intellectual curiosity. I began taking more computer science classes, creating projects on my own and becoming engrossed in the field of computer science. I became an skillful developer in Java and moved on to creating mobile applications for Android devices. In my senior year of high school, I was awarded BEST USE OF GOOGLE API in Femmehacks, a hackathon in University of Pennsylvania. I later published an app in the Apple Store called SBHS GPA Calculator to help students calculate their GPA. Now, in college I endeavor to continue this journey into a limitless world of learning.  
                        </p>
                    </div>
                    <div style={{backgroundColor:"#d7dfe9"}} className="rounded"> 
                        <h4 style={{fontFamily: "Inconsolata, monospace"}}> Tanvi.education</h4> 
                        <p style={{fontSize:"18px"}}> 
                            High School Diploma from South Brunswick High School. <br />
                            Currently a Student in Honors Program Rutgers University. 
                        </p>
                    </div>
                    <div style={{backgroundColor:"#e8f1f0"}} className="rounded"> 
                        <h4 style={{fontFamily: "Inconsolata, monospace"}}> Tanvi.skills </h4> 
                        <p style={{fontSize:"18px"}}> 
                            The language that I am most skilled in is Java. However, I currently mainly work on building mobile applications in Android and iOS and python scripting. I am working towards become more proficient in web development by learning modern platforms, libraries and frameworks.
                        </p>
                    </div>
                    <div style={{backgroundColor:"#e1dbf5"}} className="rounded"> 
                        <h4 style={{fontFamily: "Inconsolata, monospace"}}> Tanvi.personality </h4> 
                        <p style={{fontSize:"18px"}}> 
                            Organized <br />
                            Passionate <br />
                            Hard working <br />
                            Leader <br />
                        </p>
                    </div>
                    <div style={{backgroundColor:"#f7e1f5"}} className="rounded"> 
                        <h4 style={{fontFamily: "Inconsolata, monospace"}}> Tanvi.interests</h4> 
                        <p style={{fontSize:"18px"}}> 
                            Data Science, Machine Learning, Artifical Intelligence, Mobile App Development<br />
                            Music, Dance, Swimming, Travel 
                        </p>
                    </div>
                    <div style={{backgroundColor:"#e1e6f9"}} className="rounded"> 
                        <h4 style={{fontFamily: "Inconsolata, monospace"}}> Tanvi.coursework</h4> 
                        <p style={{fontSize:"18px"}}> 
                            Data Structures <br />
                            Discrete Mathematics<br />
                            Linear Alegbra<br />
                            Calculus I and II <br />
                            Technical Writing<br />
                        </p>
                    </div>
                    <div style={{backgroundColor:"#e8f1f0"}} className="rounded"> 
                        <h4 style={{fontFamily: "Inconsolata, monospace"}}> Tanvi.workExperience</h4> 
                        <p style={{fontSize:"18px"}}> 
                            <b>Bloomberg LP Software Developer Contractor:</b> October 2018 - Current<br />
                            Part-Time Position working towards reducing MTTD and MTTR through automation processes. <br /> <br />
                            <b>Bloomberg LP Data Center Intern:</b> June to August 2018 <br />
                            Summer Internship at a Bloomberg Data Center working towards enriching automation tools 
                        </p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Radium(About);

