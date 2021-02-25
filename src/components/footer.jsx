import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="footer mt-auto py-3 fixed-bottom">
          <section class="container">
            <div class="container full-width">
              <span class="text-grey text-center">
                <div class="col s4 contactinfo">
                  <span class="flow-text titleShadow">
                    <a href="https://www.linkedin.com/company/sacramento-hospitality-group/">
                    <i class="fab fa-linkedin c fa-2x footericons">&nbsp;</i>
                    </a>
                  <a href="https://www.instagram.com/sacramentohospitalitygroup/">
                    <i class="fab fa-instagram c fa-2x footericons">&nbsp;</i>
                  </a>
                  <a href="mailto:kellystone916@gmail.com">
                    <i class="fas fa-envelope-square fab c fa-2x footericons">&nbsp;</i>
                  </a>
                  </span>
                </div>
                <p class="text-muted copyright"> © Copyright.</p>
              </span>
            </div>
          </section>
        </footer>
      </div>
    );
  }
}

export default Footer;
