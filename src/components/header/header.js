import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <header id="home">
      <nav id="nav-wrap">
       <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
       <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
       <ul id="nav" className="nav">
         <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
         <li><a className="smoothscroll" href="#about">About</a></li>
         <li><a className="smoothscroll" href="#portfolio">Works</a></li>
         <li><a className="smoothscroll" href="#contact">Contact</a></li>
       </ul> {/* end #nav */}
     </nav> {/* end #nav-wrap */}
     <div className="row banner">
       <div className="banner-text">
         <h1 className="responsive-headline">Desh Bhardwaj</h1>
         <h3>I am a passionate web developer with 4+ years of web development and QA experience.
         I enjoy learning new tools & technologies. Lets <a className="smoothscroll" href="#about"> start scrolling </a>
          and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
         <hr />
         <ul className="social">
           <li><a href="https://www.linkedin.com/in/desh-y-45237211/"><i className="fa fa-linkedin" /></a></li>
           <li><a href="https://www.xing.com/profile/Desh_Bhardwaj"><i className="fa fa-xing" /></a></li>
           <li><a href="https://github.com/yadavdesh"><i className="fa fa-github" /></a></li>

         </ul>
       </div>
     </div>
     <p className="scrolldown">
       <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
     </p>
      </header>
      </React.Fragment>
    );
  }
}
