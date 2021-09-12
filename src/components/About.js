import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
	  
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/whoIs.png" alt="" />

            </div>

            <div className="nine columns main-col">
			<h2>Certificate</h2>
               <p>
			   {resumeData.cert && resumeData.cert.map(
				(item) =>{
					return(
					<div>
					{item.acquisition}<br/>
						{item.readyAcquisition1}<br/>
						{item.readyAcquisition2}
					</div>
					)
				}
			   )}
               </p>
               <h2>I Can Do It!</h2>
               <p>
			   {resumeData.aboutme && resumeData.aboutme.map(
				(item) =>{
						return(
							<div>
							<strong> - Development</strong><br/>
								{item.firstAbout.split('\n').map((line) => {
									return (
										<span>{line}<br/></span>
									)
								})}
								<br/>
							<strong> - For Users</strong><br/>
							{item.twoAbout.split('\n').map((line) => {
									return (
										<span>{line}<br/></span>
									)
								})}
								<br/>
						    <strong> - Skills</strong><br/>
							{item.threeAbout.split('\n').map((line) => {
									return (
										<span>{line}<br/></span>
									)
								})}
								<br/>
						    <strong> - Communication</strong><br/>
							{item.fourAbout.split('\n').map((line) => {
									return (
										<span>{line}<br/></span>
									)
								})}
							</div>
						)
				}
			   )}
               
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
							<span>Name : {resumeData.name}</span>
				     <br></br>
       						<span>Phone : {resumeData.phone}</span>
                     <br></br>
       						   <span>
                     Addr : {resumeData.address}
                    </span>
                    <br></br>
                    <span>Email : {resumeData.email}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}