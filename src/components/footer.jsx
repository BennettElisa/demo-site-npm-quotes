import React from "react"


function Footer(){

    return (
        <div>
{/* <!-- Footer --> */}

    <footer class="white-section" id="footer">
    <div className="personal-img">
        {/* <img src="/images/profile-pic.jpeg" alt="profile"/> */}
    </div>
    <div className="row">
        <div className="footer-column col-lg">
           <a href="https://github.com/BennettElisa"> <i className="footer-icon fab fa-github"></i></a>
           <a href="https://www.linkedin.com/in/elisabennett/">  <i className="footer-icon fab fa-linkedin"></i></a>
           <a href="https://www.npmjs.com/package/black-women-inspire">  <i className="footer-icon fab fa-npm"></i></a>

            <p>© Copyright 2021 #InspireDemo</p>
            <p>All images have a Standard License from Adobe Stock</p>
    </div>
    </div>
    </footer>

        </div>
    )
}

export default Footer;