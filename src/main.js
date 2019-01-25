//should not animate everytime clicked
import React, { Component } from 'react';
import {Jumbotron} from 'reactstrap'
import linkedin from './img/linkedin.png'
import github from './img/github.png'
import mail from './img/mail.png'
import './aboutstyles.css'
import ANIMATE from "animate.css";
import Radium from 'radium'
import Typing from 'react-typing-animation';
import Cursor from '../node_modules/react-typing-animation/dist/Cursor';
var style = { 
}

function Bottom(props){
        if (props.typingCompleted){
            return (
            <div> 
                <div id="logos" className="animated bouncein">
                    <a href="http://www.linkedin.com/in/tanvi-wagle-78924416a"> 
                    <img className="img-responsive logo" src={linkedin} alt="Linked In" style={{margin:"20px", width:"50px"}}/>
                    </a>
                    <a href="https://github.com/WagleTanvi"> 
                    <img className="img-responsive logo" src={github} alt="GitHub" style={{ margin:"20px", width:"50px"}}/>
                    </a>
                    <a href="mailto:tanviw@hotmail.com">
                    <img className="img-responsive logo" src={mail} alt="Email" style={{ margin:"20px", width:"60px"}}/>
                    </a>
                </div>
                {/* <div className="animated fadein delay-1s">
                    <img className="img-responsive" src={avatar} alt="Avatar" style={{maxWidth:"10%",height:"auto"}}/>
                </div> */}
            </div>
            )
        } else {
            return <div> </div> 
        }

}
function Top(params){
    if (params.animated){
        console.log("animated if")
        console.log(params.animated)
        return (
        <div> 
            <Typing onFinishedTyping={params.toggleComplete}>
                    <Typing.Delay ms={500} />
                <h2> Hello my name is </h2>
                <h1 className="display-3" style={{fontSize:"110px"}}><span style={{backgroundColor:"#CE6180"}}>TANVI WAGLE</span> </h1>
                <h3> I am a student.</h3>
                <Typing.Delay ms={500} />
                <Typing.Backspace count={16} />
                <h3> I am a problem solver.</h3>
                <Typing.Delay ms={500} />
                <Typing.Backspace count={23} />
                <h3> I am a developer.<Cursor> </Cursor></h3>
            </Typing>
        </div>
        )
    } else {
        return <div> 
                    <h2> Hello my name is </h2>
                    <h1 className="display-3" style={{fontSize:"110px"}}><span style={{backgroundColor:"#CE6180"}}>TANVI WAGLE</span> </h1>
                    <h3> I am a developer.<Cursor> </Cursor></h3>
                </div> 
    }

}

class Main extends Component {
    state = { typingCompleted: false};
    toggleComplete = () => {
        this.props.toggle();
        this.setState(prevState => {
            return { typingCompleted: !prevState.typingCompleted };
        });
    }
    componentDidMount(){
        console.log("component mounted");
        console.log(this.props.animated)
    }
    render() { 
        return (  
            <div id="pageContent" className="animated slideInRight faster main" style={{height:"100vh", overflow: "hidden"}}>
                 {/* <canvas ref="canvas" style={{minHeight:"100vh", height:"100vh"}} /> */}
                <Jumbotron style= {{minHeight: "100vh", height:"100vh",padding: "50px 0px 0px 10px", backgroundColor:"#D6A5B3"}}>
                <div id="header" style={{padding: "60px 0px 0px 0px", fontFamily: "Inconsolata, monospace"}}>
                    <Top animated={this.props.animated} toggle={this.props.toggle} toggleComplete={this.toggleComplete}> </Top>
                    <Bottom typingCompleted={this.state.typingCompleted}> </Bottom>
                    {/* <a style={style.logo} href="http://google.com/"> GOOGLE</a> */}
                </div>
                </Jumbotron>
            </div>
            
        );
    }
}
 
export default Radium(Main);

