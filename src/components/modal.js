import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import '../index.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    // background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    // maxWidth: "1000%",
    backgroundImage: "url(https://wallpapercave.com/wp/wp4507531.jpg)",
    // background: no-repeat,
    // backgroundsize: cover,
    fontfamily: "Roboto",
    // backgroundImage: "https://wallpaperaccess.com/full/1773222.jpg",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    // backgroundImage: "https://wallpaperaccess.com/full/1773222.jpg"
  },
  button: {
    fontfamily: "Cormorant Garamond",
    fontsize: "16px",
    color: "white",
    letterspacing: "3px",
  },
  backgroundImage: {
    backgroundImage: "url(https://wallpapercave.com/wp/wp4507531.jpg)",
  }
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

  return (
    <div>
      <div class="navbarTitle">
        <Button onClick={handleOpen}>CONTACT US</Button>
      </div>

      <Modal
        // className="modalBackground"
        // backgroundImage="https://wallpaperaccess.com/full/1773222.jpg"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}> 
        <div class="modalBackground">
        {/* <div className={classes.paper}> */}
          {/* <div className={classes.modal}> */}
          {/* <div style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(https://wallpaperaccess.com/full/1773222.jpg)">
          <div>
         <div id="modal2" class="modal">
           <div class="jumbotron bg-cover text-white pic"
            style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(https://wallpaperaccess.com/full/1773222.jpg)" */}
          {/* >  */}

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
        {/* </div> */}
        {/* </div> */}
        </Fade>
      </Modal>
    </div>
  );
}
