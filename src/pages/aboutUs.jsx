import React, { Component } from "react";
import NavBar from '../components/navbar';
import Footer from '../components/footer';
// import Modal from '../components/modal';

class AboutUs extends Component {
  state = {};
  render( ) {
    return (
      <div className = "aboutUsBackground"> 
          <NavBar></NavBar>
        {/* <div class="border border-danger card text-center" style="background-color: rgba(245, 245, 245, 0.5);"> */}
        {/* </div> */}
        <br />
        <br />

          <h1 class="title wel animate__animated animate__pulse">
            <div id="title">About Us</div>
          </h1>
          <div class="col s12 m7 full-width getToKnowUsCard">
            <hr />
            <br />
            <h2 class="header aboutUsInfo">
              <img
                src="https://i.ibb.co/hyPyw7L/Logo.png"
                alt="Logo"
                border="0"
                class="logoAU"
              />
              <p class="ccc">
              <b>
                Sacramento Hospitality Group was founded in 2019 in Sacramento,
                California with the intention to help out those in need in our
                community. Today, we create original nonprofit events that help
                fundraise for homelessness, COVID-19 relief and civil rights
                organizations. We have worked with Loaves and Fishes, Direct
                Relief Fund, The World Health Organization, United Way, NAACP
                and more.
              </b>
              <br />
              <br />
              We aim to work with even more contributors and local non-profits
              in 2021 and beyond. We're always welcoming friendly and
              community-conscious members, so stay tuned and join us for our
              upcoming events!
              <br />
            </p>
          </h2>
        </div>
        <Footer></Footer>
      </div>
      // </div>
    );
  }
}

export default AboutUs;
