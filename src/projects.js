import React, { Component } from 'react';
import logo2 from './img/logo2.png'
import calc from './img/calc.jpeg'
import {Button} from 'reactstrap'
import snapsnax from './img/snapsnax.png'
import incredibles from './img/incredibles.png'
import molecule from './img/molecule.jpg'
import bqplot from './img/bqplot.png'
import julia from '/Users/tanviwagle/Desktop/myprofile/src/img/julia.png'
import agenda from './img/agenda.png'
import './aboutstyles.css'
import ANIMATE from "animate.css";

const originalProjectData = [
    {title: "SBHS GPA Calculator", desciption:"An iOS application that calculates the GPA of an SBHS high school student",tags:["iOS","Mobile App","Swift"],award:"On App Store",link:"AppStore https://itunes.apple.com/us/app/sbhs-gpa-calculator/id1372553205#?platform=iphone", img: calc, },
    {title: "Julia Fractals", desciption:"A java applet that creates images through the mathematical computations of juila sets",tags:["Visualization","Java"],award:"",link:"", img: julia},
    {title: "SnapSnax", desciption:"An android app that allows you to keep track of your calories for the day",tags:["Android","Mobile App","Java"],award:"Femmehacks 2018",link:"Github https://github.com/WagleTanvi/SnapSnax", img: snapsnax},
    {title: "Incredibles Game", desciption:"A swing based animation applet",tags:["Game","Java"], award:"", link: "Github https://github.com/WagleTanvi/IncrediblesGame",img: incredibles},
    {title: "Chemistry Molecule", desciption:"A 3D Rendering of HONC molecules using scenekit",tags:["iOS","Swift","Mobile App","Visualization"],award:"",link:"Github https://github.com/WagleTanvi/ChemistryMolecule",img: molecule},
    {title: "My Agenda", desciption:"An android app that helps keep track of homework for classes",tags:["Android","Java","Mobile App"],award:"",link:"Github https://github.com/WagleTanvi/MyAgenda", img: agenda},
    {title: "Stock Market", desciption:"A data visualization of the stock market of last three presedencies using BQPlot",tags:["Python","Visualization","Jupyter"],award:"",link:"Github https://github.com/WagleTanvi/bloombergProject", img: bqplot},
    {title: "My Portfolio", desciption:"A website introducing me using REACT",tags:["Javascript","HTML","CSS","ReactJS", "Bootstrap"],award:"",link:"", img: logo2}
]
function Ribbon(params){
    if (params.data !== ""){
        return (
        <div class="corner-ribbon top-right" style={{position: "absolute", backgroundColor:"#DF507B"}}>{params.data}</div>
        )
    }
    else {
        return (
            <div> </div>
        )
    }
}
function More(params){
    var link = String(params.data)
    var arr = link.split(" ")
    console.log (arr[0])
    console.log (arr[1])
    if (params.data !== ""){
        return (
            <a href={arr[1]} target="_blank" rel="noopener noreferrer"> 
            <Button className="btn dNavy" style={{margin:"10px", width:"160px"}}> View on {arr[0]} </Button>
            </a>
        )
    }
    else {
        return (
            <div> </div>
        )
    }
}
const ProjectCard = (props) => {
    return (  
        // {boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}
        <div className="col-md-3 px-2">
            <div className="card my-2 cardStyle" style={{backgroundColor:"#eeeeee"}}>
                <div className="card-block" style={{width:"auto"}}>
                    <img className="card-img-top" src={props.img} alt="Project" style={{height: "28vh", width:"100%", objectFit: "cover"}}/>
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                    </div>
                    <Ribbon data={props.award}> </Ribbon>
                </div>
                <div className="overlay ">
                    <div className="card-block" style={{width:"auto"}}>
                        <div class="card-body">
                            <h5 class="card-title"><b>{props.title}</b></h5>
                            <h5 class="card-subtitle"> <b>{props.desciption} </b></h5>
                        </div>
                        {props.tags.map( function(tag) {
                                return <span className="badge dBlue" style={{fontSize:"18px", margin: "2px", color:"white"}}> {tag} </span>
                            } )}
                        <br />
                        <More data={props.link}> </More>
                    </div>
                </div>
            </div>
        </div>
    );
}
const badgeStyle = {
    margin:"0px 10px 10px 20px ",
    fontSize:"18px",
};
class Filter extends Component {
    state = { selected:false,};
  
    handleClick = (value) => {
        this.setState(prevState => {
            if (prevState.selected === false){
                this.props.filterAdd(this.props.title)
            }
            if (prevState.selected === true){
                this.props.filterRemove(this.props.title)
            }
            return { selected: !prevState.selected };
        });
    }
    render() { 
        return (  
            
            <button onClick={this.handleClick} className={this.state.selected ? "btn dBlue": "btn btn-filter"} style={badgeStyle}>{this.props.title}</button>
        );
    }
}
 

class Projects extends Component {

    state = { array: [], projectData: originalProjectData };
    
    addFilter= (title) => {
        //console.log("add")
        this.setState(prevState => ({
            array: [...prevState.array, title]
          }),() => {
            for (let pIndex = 0; pIndex < originalProjectData.length; ++pIndex) {
                // console.log(this.state.projectData[pIndex])
                let p = originalProjectData[pIndex]
                var x=0;
                for (let fIndex = 0; fIndex < this.state.array.length; ++fIndex){
                    //console.log(this.state.array[fIndex])
                    if (p.tags.includes(this.state.array[fIndex])){
                        //console.log(p.title)
                        //console.log(p.tags)
                        x++;
                    }
                }
                if (x < this.state.array.length) {
                    this.setState(prevState => ({
                        projectData: prevState.projectData.filter(item => item !== p)
                    }))
                }
            }
        });        
    }
    componentDidMount(){

    }
    removeFilter= (title) => {
        console.log("remove")
        let filteredArray = this.state.array.filter(item => item !== title)
        this.setState({array: filteredArray}, () => {
            if (this.state.array.length === 0){
                console.log(this.state.array.length)
                this.setState({ projectData: originalProjectData });
            }
            else{
                this.setState({ projectData: originalProjectData });
                for (let pIndex = 0; pIndex < originalProjectData.length; ++pIndex) {
                    // console.log(this.state.projectData[pIndex])
                    let p = originalProjectData[pIndex]
                    var x=0;
                    for (let fIndex = 0; fIndex < this.state.array.length; ++fIndex){
                        console.log(this.state.array[fIndex])
                        if (p.tags.includes(this.state.array[fIndex])){
                            console.log(p.title)
                            console.log(p.tags)
                            x++;
                        }
                    }
                    if (x < this.state.array.length) {
                        this.setState(prevState => ({
                            projectData: prevState.projectData.filter(item => item !== p)
                        }))
                    }
                }
            }
        });
    }
    render() { 
        return (  
            <div className="animated slideInRight faster" style={{background: 'linear-gradient(to right, #e1e6f9, #f7e1f5)', height:"100vh",  overflow: "auto", fontFamily: "Karla, sans-serif"}}> 
                <div className="py-5">
                    <div className="container pt-5" id="top">
                        <div className="row">
                            <div className="col  px-2"> 
                                <h1> <b> My Portfolio! </b></h1> 
                            </div>
                        </div> 
                        <div className="row md-auto pt-3">
                            <div className="col px-2">
                                <span style={{fontSize:"28px"}}> <b> Filters </b> </span>
                                <Filter title="Mobile App" filterAdd={this.addFilter} filterRemove={this.removeFilter}> </Filter>
                                <Filter title="Java" filterAdd={this.addFilter} filterRemove={this.removeFilter}> </Filter>
                                <Filter title="iOS" filterAdd={this.addFilter} filterRemove={this.removeFilter}> </Filter>
                                <Filter title="Swift" filterAdd={this.addFilter} filterRemove={this.removeFilter}> </Filter>
                                <Filter title="Android" filterAdd={this.addFilter} filterRemove={this.removeFilter}> </Filter>
                                <Filter title="Python" filterAdd={this.addFilter} filterRemove={this.removeFilter}> </Filter>
                                <Filter title="ReactJS" filterAdd={this.addFilter} filterRemove={this.removeFilter}> </Filter>
                            </div>
                        </div> 
                    </div>
                    <div id="cards" className="container">
                        <div className="row pt-5">
                            {this.state.projectData.map((project) => <ProjectCard key={project.title} {...project}> </ProjectCard>)}
                        </div><br />
                    </div>
                </div>
            </div> 
            
 
            
        );
    }
}
 
export default Projects;