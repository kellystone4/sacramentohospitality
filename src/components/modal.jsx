import React, { Component } from "react";
class Modal extends Component {
  state = {};
  render() {
    return (
      <div>
        <div id="modal2" class="modal">
          <div
            class="jumbotron bg-cover text-white pic"
            style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(https://wallpaperaccess.com/full/1773222.jpg)"
          >
            <div class="modal-content">
              <div class="row">
                <h4 class="usernameInput">CONTACT US </h4>
                <hr />
                <br />
                <section class="row">
                  <div class="col s12 contactinfo">
                    <span class="flow-text titleShadow">
                      <p class="contactC text-muted text-center">Instagram:</p>
                      <a href="https://www.instagram.com/sacramentohospitalitygroup/">
                        <i class="fab fa-github-square c fa-2x"></i>
                      </a>
                    </span>
                  </div>
                </section>
              </div>
              <section class="row">
                <div class="col s12 contactinfo">
                  <span class="flow-text titleShadow">
                    <p class="contactC text-muted text-center">LinkedIn:</p>
                    <a href="https://www.linkedin.com/company/sacramento-hospitality-group/">
                      <i class="fab fa-linkedin  c fa-2x"></i>
                    </a>
                  </span>
                </div>
              </section>
              <section class="row">
                <div class="col s12  contactinfo">
                  <span class="flow-text titleShadow">
                    <p class="contactC text-muted text-center">Email:</p>
                    <a href="mailto:kellystone916@gmail.com">
                      <i class="fas fa-envelope-square fab c fa-2x"></i>
                    </a>
                  </span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
