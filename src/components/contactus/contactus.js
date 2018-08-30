import React, { Component } from 'react';
export default class Contactus extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">If my portfolio interests you and you want to know more about me, please feel free to getin touch with me.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="eight columns">
            {/* form */}
            <form action method="post" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">Name <span className="required">*</span></label>
                  <input type="text" id="contactName" name="contactName" placeholder="Enter your name please." />
                </div>
                <div>
                  <label htmlFor="contactEmail">Email <span className="required" >*</span></label>
                  <input type="text" id="contactEmail" name="contactEmail" placeholder="Your email-ID" />
                </div>
                <div>
                  <label htmlFor="contactPhone">Phone</label>
                  <input type="number" id="contactPhone" name="contactPhone" placeholder="Contact number" />
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input type="text" id="contactSubject" name="contactSubject" />
                </div>
                <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea cols={40} rows={5} id="contactMessage" name="contactMessage" defaultValue={""} />
                </div>
                <div>
                  <button className="submit">Submit</button>
                  <span id="image-loader">
                    <img alt src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>
            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check" />Your message was sent, thank you!<br />
            </div>
          </div>
          <div className="four columns">
            <div id="map"></div>
          </div>
        </div>
      </section>
    </React.Fragment>
    );
  }
}
