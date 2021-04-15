import React from 'react';

function AboutUsScreen(props) {

    return (
        <section>
            <div className="container-fluid about-testimonial">

            <h1 style={{marginBottom: '30px'}}>Mentor</h1>
                <div className="row">
                    
                    <div className="col testim" id="testim">
                        <div className="wrap">
                            
                            <div id="testim-content" className="cont">
                                <div className="active">
                                    <div className="img"><img src="./assets/img/mentor.jpg" /></div>
                                    <h2>Dr. KAUSHAL BHARDWAJ</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <h1 style={{marginTop:'30px', marginBottom: '30px'}}>Contributors</h1>
                <div className="row">
                <div className="col-4">
                        <div className="card">
                            <img className="about-img" src="./assets/img/17010127.jpg" alt="Maxwell Admin"/>
                            <div className="card-body">
                                <h3 className="card-title">DEEPAK KUMAR SINGH</h3>
                                <h6 className="card-title">FOUNDER</h6>
                                <p className="card-text">I'm programmer....</p>
                            </div>
                        </div>
                    </div> 
                    <div className="col-4">
                        <div className="card">
                            <img className="about-img" src="./assets/img/17010131.jpg" alt="Maxwell Admin"/>
                            <div className="card-body">
                                <h3 className="card-title">MUKUL S ANAND</h3>
                                <h6 className="card-title">CO-FOUNDER</h6>
                                <p className="card-text">I'm programmer....</p>
                            </div>
                        </div>
                    </div>  

                     
                    <div className="col-4">
                        <div className="card">
                            <img className="about-img" src="./assets/img/17010115.jpg" alt="Maxwell Admin"/>
                            <div className="card-body">
                                <h3 className="card-title">RADHE RAMAN TIWARI</h3>
                                <h6 className="card-title">CEO</h6>
                                <p className="card-text">I'm programmer....</p>
                            </div>
                        </div>
                    </div>             
        
		
			
		        </div>
                
            </div>
        </section>
    );

}

export default AboutUsScreen