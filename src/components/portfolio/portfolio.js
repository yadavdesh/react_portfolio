
import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio">
        <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          {/* portfolio-wrapper */}
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-01" title>
                    <img alt src="images/portfolio/keto.jpg"/>
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>ketoproductberlin</h5>
                      <p>Exclusiv Shop</p>
                    </div>
                  </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                </a>
              </div>
            </div> {/* item end */}
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a href="#modal-02" title>
                  <img alt src="images/portfolio/calculator.jpg" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Calculator</h5>
                      <p>Web Development</p>
                    </div>
                  </div>
                  <div className="link-icon"><i className="icon-plus" /></div>
                </a>
              </div>
            </div> {/* item end */}
          </div> {/* portfolio-wrapper end */}
        </div> {/* twelve columns end */}
        {/* Modal Popup
      --------------------------------------------------------------- */}
        <div id="modal-01" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/portfolio/modals/keto.jpg" alt />
          <div className="description-box">
            <h4>Keto Product Berlin</h4>
            <span className="categories"><i className="fa fa-tag" />An exclusive keto diet shop</span>
          </div>
          <div className="link-box">
            <a href="https://ketoproductberlin.herokuapp.com">Details</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-01 End */}
        <div id="modal-02" className="popup-modal mfp-hide">
          <img className="scale-with-grid" src="images/portfolio/modals/calculator.jpg" alt />
          <div className="description-box">
            <h4>Calculator</h4>
            <span className="categories"><i className="fa fa-tag" />Js Calculator</span>
          </div>
          <div className="link-box">
            <a href="http://deshtech.net/portfolio/calculator/index.html">Details</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>{/* modal-02 End */}
      </div> {/* row End */}
    </section>
    </React.Fragment>
  );
}
}
