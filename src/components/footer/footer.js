import React, { Component } from 'react';
export default class Footer extends Component {
  render(){
    return (
      <React.Fragment>
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
            <li><a href="https://www.facebook.com/desh.yadav"><i className="fa fa-facebook" /></a></li>
            <li><a href="https://twitter.com/DeshYadav"><i className="fa fa-twitter" /></a></li>
            <li><a href="https://www.linkedin.com/in/desh-y-45237211/"><i className="fa fa-linkedin" /></a></li>
            <li><a href="https://www.xing.com/profile/Desh_Bhardwaj"><i className="fa fa-xing" /></a></li>
            <li><a href="https://github.com/yadavdesh"><i className="fa fa-github" /></a></li>
            </ul>
            <ul className="copyright">
              <li>© Copyright 2018 Desh Bhardwaj</li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
    </React.Fragment>
    );
  }
}
