import React, { Component } from 'react';
import './App.css';
import TopBar from './TopBar';
import Main from './main';
import About from './about';
import {Route, Switch} from 'react-router'
import {BrowserRouter } from 'react-router-dom'
import Contact from './contact';
import Projects from './projects';
import {StyleRoot} from 'radium';
import './aboutstyles.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class App extends Component {
  state = {animated: true};
  toggleAnimate = () => {
    this.setState({ animated: false });
  }
  componentDidUpdate(){
    console.log("hello")
    console.log(this.state.animated)
  }
  render() {
    return (
      <StyleRoot>
      <div className="App">
          <BrowserRouter>
            <div>
            <Route render={({ location }) => ( 
                <div>
                  <TopBar> </TopBar>
                  <ReactCSSTransitionGroup
                    key={location.key}
                    transitionName='example'
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                  >
                  <Switch location={location}>
                    <Route exact render={(props) => <Main toggle={this.toggleAnimate} animated={this.state.animated}/>}  path="/" key="home"/>
                    <Route exact component={About} path="/about/" key="about"/>
                    <Route exact component={Projects} path="/projects/" key="projects"/>
                    <Route exact component={Contact} path="/contact/" key="contact"/>
                    <Route render={() => <div><h1 style={{padding:"100px"}}>Page Not Found</h1></div>} />
                  </Switch>
                  </ReactCSSTransitionGroup>
                </div>
            )} />
            </div>
          </BrowserRouter>
        </div>
      </StyleRoot>
      // <div className="App">
      // <Route component={Page404} />
      //   <TopBar ></TopBar>
      //   <div className="Content" style={{position:"relative"}}>
      //     <Router history={browserHistory}>
      //       <Route path={"home"} component={Main} />
      //       <Route path={"about"} component={About} />
      //     </Router>
      //   </div>
      // </div>
    );
  }
}

export default App;
