import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
				<strong>
                  {resumeData.linkedinId} <img src="images/smile.png" width="50px"/><br/>
				  I promise to always be a person who works hard !
                </strong>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}