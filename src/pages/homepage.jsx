import React, { Component } from "react";
import Modal from "../components/modal";
import NavBar from '../components/navbar';
import Footer from '../components/footer';

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div className = "homepageBackground"> 
          <NavBar></NavBar>
        {/* <div class="border border-danger card text-center" style="background-color: rgba(245, 245, 245, 0.5);"> */}
        <div class="card-header">
          {/* </div> */}
          {/* </div> */}
          <h1 class="title wel animate__animated animate__pulse">
            <img src="Logo.png" alt="SacramentoHospitalityLogo" class="logo" />
            <div id="title">
              Sacramento <br /> Hospitality Group{" "}
            </div>
          </h1>
          <Modal></Modal>
          <p class="missionStatement">
            <i>
              "Together, we can help inspire hope,
              <br />
              contribute to those in need,
              <br />
              and create a better community."
            </i>
          </p>
          <br />
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Homepage;
