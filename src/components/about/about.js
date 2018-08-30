import React, { Component } from 'react';
export default class About extends Component {
  render(){
    return (
      <React.Fragment>
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/pic.jpg" alt />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>I have started my career as QA engineer where I have learned
            different testing techniques and get some exposure of scrum and
            kanban practices. After working couple of years as a QA Engineer for manual
            and automation testing I get inclined towards web development and
            decided to learn web development.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Desh Bhardwaj</span><br />
                  <span>Am Steinberg 4, 13086 Berlin
                  </span><br />
                  <span>(176)459-36837</span><br />
                  <span>bhardwajdesh@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="images/cv.pdf" className="button" target ="_blank"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
    );
  }
}
