import React, { Component } from 'react';

class Homepage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            {/* <div class="border border-danger card text-center" style="background-color: rgba(245, 245, 245, 0.5);"> */}
            <div class="card-header">
            {/* </div> */}
        {/* </div> */}
        <h1 class="title wel animate__animated animate__pulse">
            <img src="Logo.png" alt="SacramentoHospitalityLogo" class="logo" />
            <div id="title">Sacramento <br /> Hospitality Group </div>
        </h1>
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
        </div>

         );
    }
}
 
export default Homepage;