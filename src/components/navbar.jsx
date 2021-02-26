import React, { Component } from "react";
// import Modal from './modal'
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function AnimatedModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // class NavBar extends Component {
  //     state = {  }
  //     render() {
  return (
    <div>
      <nav>
        <div class="nav-wrapper linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%)">
          <a class="brand-logo"></a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">dehaze</i>
          </a>
          <ul class="left hide-on-med-and-down">
            <div class="navbarTitle">
              <b>
                {" "}
                <li>SACRAMENTO HOSPITALITY GROUP</li>
              </b>
            </div>
          </ul>
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="https://kellystone4.github.io/sacHospitalityGroup/index">
                H O M E
              </a>
            </li>
            <li>
              <a href="https://kellystone4.github.io/sacHospitalityGroup/aboutUs">
                A B O U T &nbsp; U S
              </a>
            </li>
            <li>
              <a href="https://kellystone4.github.io/sacHospitalityGroup/pastEvents">
                P A S T &nbsp; E V E N T S
              </a>
            </li>
            <li>
              <a class="modal-trigger" href="#modal2"> 
                {/* C O N T A C T &nbsp; U S */}
            
            <Button onClick={handleOpen}>CONTACT US</Button>

            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
            >
              <Fade in={open}>
                <div className={classes.paper}></div>
              </Fade>
            </Modal>
            </a>{" "} 
            </li>
          </ul>
        </div>
      </nav>
      <ul class="sidenav" id="mobile-demo">
        <li>
          <a href="https://kellystone4.github.io/sacHospitalityGroup/index">
            H O M E
          </a>
        </li>
        <li>
          <a href="https://kellystone4.github.io/sacHospitalityGroup/aboutUs">
            A B O U T &nbsp; U S
          </a>
        </li>
        <li>
          <a href="https://kellystone4.github.io/sacHospitalityGroup/pastEvents">
            P A S T &nbsp; E V E N T S
          </a>
        </li>
        <li>
          <a href="#modal2" class="modal-trigger">
            C O N T A C T &nbsp; U S
          </a>
        </li>
      </ul>
    </div>
  );
}

// export default NavBar;
