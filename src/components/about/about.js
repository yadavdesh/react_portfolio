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
          <p>Versatile Web Developer with 2+ years of Experience in front-end and full-stack development as well as some years of experience in manual and automation testing.
          Specialized in ReactJS and ruby on rails.
          </p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Email</h2>
                <p>
                  <span>bhardwajdesh@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="http://deshtech.net/resume/cv.pdf" className="button" target ="_blank"><i className="fa fa-download"/>Download Resume</a>
                </p>
              </div>
            </div> {/* end of 2nd row div */}
           </div>{/* end of nine div*/}
        </div>{/*end of 1st row div*/}
      </section>
    </React.Fragment>
    );
  }
}
