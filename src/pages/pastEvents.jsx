import React, { Component } from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import BottomAppBar from '../components/modal';
import sacImg from '../Images/sacHosp.jpg';


class PastEvents extends Component {
    state = {};
    render() { 
        return ( 
            <div class="pastEventsBackground">
                <NavBar></NavBar>
            {/* <div class="border border-danger card text-center" style="background-color: rgba(245, 245, 245, 0.5);">
            <div class="card-header">
            </div>
          </div> */}
          <br />
          <h1 class="title wel animate__animated animate__pulse">
            <div id="title">Past Events</div>
          </h1>
          <p class="missionStatement">
            <b>
                <i>
                We couldn't have done it without you. Below are some of our wonderful contributors over the past
                events.</i>
            </b>
          </p>
          <br />
            <div class="col s12 m7 full-width getToKnowUsCard">
              <p class="getToKnowUs"><b>CLEAN YOUR CLOSET CHALLENGE (2019-2021)</b></p>
              <hr />
              <h2 class="header aboutUsInfo">
                      <div id="contributors"><b>C O N T R I B U T O R S </b></div>
            </h2>
      <div class="grid">
        {/* <div class="grid-sizer"></div> */}
        <div class="grid-item">
          <img src="https://i.ibb.co/f1H5SDs/IMG-6790.jpg" alt="IMG-6790" border="0" />
        </div>
        <div class="grid-item">
          <img src="https://i.ibb.co/9VWHPNg/IMG-6791.jpg" alt="IMG-6791" border="0" />
        </div>
        <div class="grid-item">
          <img src="https://i.ibb.co/wLdbt0z/IMG-6792.jpg" alt="IMG-6792" border="0" />
        </div>
        <div class="grid-item">
          <img src="https://i.ibb.co/3MxByVQ/IMG-6797.jpg" alt="IMG-6797" border="0" />
        </div>
        <div class="grid-item">
          <img src="https://i.ibb.co/qrMXy77/IMG-6802.jpg" alt="IMG-6802" border="0" />
        </div>
        <div class="grid-item">
          <img src="https://i.ibb.co/n73HXPk/IMG-6794.jpg" alt="IMG-6794" border="0" />
        </div>
        <div class="grid-item">
          <img src="https://i.ibb.co/tZSJwBs/IMG-6796.jpg" alt="IMG-6796" border="0" />
        </div>
        <div class="grid-item">
          <img src="https://i.ibb.co/F3M0NV1/IMG-6795.jpg" alt="IMG-6795" border="0" />
        </div>
        <div class="grid-item">
          <img src="https://i.ibb.co/0K3MXKk/IMG-6803.jpg" alt="IMG-6803" border="0" />
        </div>
      </div>
                  <br />
      
                  <br />
                  <br />
                  <p class="ccc">We've recieved hundreds of bags with thousands of donations from each clean your closet challenge! We collected clothing,
                  toiletries, dog/cat food, canned food, shoes, blankets and more! These were distributed to local homeless
                  shelters in the greater Sacramento area.
                  </p>
                  <br />
                  <br />
              <p class="getToKnowUs"><b>&nbsp;CUPS AGAINST COVID (2020)&nbsp;</b></p>
              <hr />
                          <br />
                          <br />
                          <br />
                          <p class="ccc">We had 40 partipants and over 100 donators raise awareness and donations for this event including NLB and NFL players.
                            Together, we raised thousands with Cups Against Covid for both local and national non-profit organizations such as the
                            Direct Relief Fund, World Health Organization, and United Way Sac Capital Region.
                          </p>
                          <br />
                          <br />
              
                          <p class="getToKnowUs"><b>&nbsp;NAACP RAFFLE (2020)&nbsp;</b></p>
                          <hr />
                                      <br />
                                      <br />
                                      <br />
                                      <p class="ccc">In June 2020, we created an online raffle to help raise funds for the NAACP. Our prizes consisted of a signed MLB hat, four tickets to an MLB game, 
                                      a signed guitar from country artist Jimmy Allen, a gift card to a local lot black female owned coffee shop and more.
                                      </p>
      <div class="grid2">
        <div class="grid2-item">
          <img border="0" />
        </div>
        <div class="grid2-item">
          <img src="https://i.ibb.co/xsS1cB3/IMG-3826.jpg" alt="IMG-6791" border="0" />
        </div>
        <div class="grid2-item">
          <img border="0" />
        </div>
      </div>

                                      {/* <div class="grid"> */}
                                        {/* <div class="pastEventsPic"> */}
                                          {/* <div class="pastEvents-item">
                                          <img src="https://i.ibb.co/xsS1cB3/IMG-3826.jpg" alt="IMG-3826" border="0" />                                        </div> */}
                                      {/* </div> */}
                                      {/* </div> */}
                                      </div>
                                      {/* <BottomAppBar></BottomAppBar> */}
                                      <Footer></Footer>
                                      </div>
         );
    }
}
 
export default PastEvents;