import React, { Component } from "react";
// import Modal from './modal'
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from '../components/modal'
import { Link } from 'react-router-dom'
import PersistentDrawerLeft from "./TemporaryDrawer";
import FadeMenu from "./TemporaryDrawer";
import CustomizedMenus from "./TemporaryDrawer";
import ResponsiveDrawer from "./TemporaryDrawer";
import TemporaryDrawer from "./TemporaryDrawer";
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    // backgroundColor: 'black',
  },
  paper: {
    // backgroundColor: theme.palette.background.paper,
    // border: "200px solid #000",
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
  // const styles = theme => ({
  //   disabledButton: {
  //     backgroundColor: theme.palette.primary || 'red'
  //   }
  // });

  return (
    <div>
      <nav>
        <div class="nav-wrapper linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%)">
          <a class="brand-logo"></a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <div class = "hamburger bar">
            <Link><TemporaryDrawer><i class="material-icons">dehaze</i></TemporaryDrawer></Link>
            </div>
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
            {/* <Button><NavLink to="/" exact style={{ marginBottom: 40, color: 'black', textDecoration: 'none' }}> Home </NavLink></Button> */}
              {/* <a href="https://kellystone4.github.io/sacHospitalityGroup/index"> */}
              <Link to ='/'>H O M E </Link>
              {/* </a> */}
            </li>
            <li>
              {/* <Button onClick={() => handleButtonClick("/aboutUs")}> */}
                {/* <NavLink to="/aboutUs"> */}
              {/* <a href="https://kellystone4.github.io/sacHospitalityGroup/aboutUs"> */}
              <Link to ='/aboutUs'> A B O U T &nbsp; U S</Link> 
              {/* </a> */}
              {/* </NavLink> */}
              {/* </Button> */}
            </li>
            <li>
              {/* <a href="https://kellystone4.github.io/sacHospitalityGroup/pastEvents"> */}
              <Link to ='/pastEvents'>  P A S T &nbsp; E V E N T S </Link>
              {/* </a> */}
            </li>
            {/* <Link
    > */}
    <li>
    <Modal>CONTACT US</Modal>
    </li>
{/* </Link> */}
            {/* <Link><Modal>CONTACT US</Modal></Link> */}
            {/* <Button to = '/Modal'><Modal>CONTACT US</Modal></Button> */}
            {/* <Button onClick={handleOpen}><Modal>CONTACT US</Modal></Button> */}
              {/* <a class="modal-trigger" href="#modal2">  */}
                {/* C O N T A C T &nbsp; U S */}
            
            {/* <Button onClick={handleOpen}>CONTACT US</Button> */}
    

            {/* <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
            >
              <Fade in={open}>
                <div className={classes.paper}></div>
              </Fade>
            </Modal> */}
            {/* </a>{" "}  */}
          </ul>
        </div>
      </nav>
      {/* <FadeMenu /> */}
      <ul class="sidenav" id="mobile-demo">
        <li>
        <Link to ='/'>H O M E </Link>
            H O M E
        </li>
        <li>
        <Link to ='/aboutUs'> A B O U T &nbsp; U S</Link> 
            A B O U T &nbsp; U S
        </li>
        <li>
        <Link to ='/pastEvents'>  P A S T &nbsp; E V E N T S </Link>
            P A S T &nbsp; E V E N T S
        </li>
        <li>
        <li><TemporaryDrawer />C O N T A C T &nbsp; U S</li>
        </li>
      </ul>
    </div>
  );
}

// export default NavBar;
