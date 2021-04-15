import React from 'react';

function Footer(props) {

    return (
    <footer>
        <div className="row">
            <div className="col-sm-6 col-md-4 footer-navigation">
                <h3><a href="#">QuestionByte<span>logo </span></a></h3>
                <p className="links"><a href="#">Home</a><strong> · </strong><a href="#">Blog</a><strong> · </strong><a href="#">Pricing</a><strong> · </strong><a href="#">About</a><strong> · </strong><a href="#">Faq</a><strong> · </strong><a href="#">Contact</a></p>
                <p className="company-name">4eyeds© 2020 </p>
            </div>
            <div className="col-sm-6 col-md-4 footer-contacts">
                <div><span className="fa fa-map-marker footer-contacts-icon"> </span>
                    <p><span className="new-line-span">Room No.105, HB-II</span> Boy's Hostel, IIITManipur</p>
                </div>
                <div><i className="fa fa-phone footer-contacts-icon"></i>
                    <p className="footer-center-info email text-left"> +91-8340422624</p>
                </div>
                <div><i className="fa fa-envelope footer-contacts-icon"></i>
                    <p> <a href="#" target="_blank">questionbyte@gamil.com</a></p>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="col-md-4 footer-about">
                <h4>About the company</h4>
                <p>We are an early-stage start-up that is seeking for cool developers who can collaborate with us and can contribute to this project.</p>
                <div className="social-links social-icons"><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-linkedin"></i></a><a href="#"><i className="fa fa-github"></i></a></div>
            </div>
        </div>
    </footer>
    );

}

export default Footer;