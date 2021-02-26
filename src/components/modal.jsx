import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
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
      <button type="button" onClick={handleOpen}>
        Contact Us
      </button>
      <Modal
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
          <div className={classes.paper}>
            <class id="transition-modal-title">
                Transition modal
            </class>
            {/* <div>
                         <div id="modal2" class="modal">
           <div class="jumbotron bg-cover text-white pic"
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
      </div> */}
      <p>HELLOOOO</p>
            {/* <p id="transition-modal-description">transition-modal-description</p> */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}


// import React, { Component } from "react";
// import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";

// class Modal extends Component {
//   componentDidMount() {
//     const options = {
//       onOpenStart: () => {
//         console.log("Open Start");
//       },
//       onOpenEnd: () => {
//         console.log("Open End");
//       },
//       onCloseStart: () => {
//         console.log("Close Start");
//       },
//       onCloseEnd: () => {
//         console.log("Close End");
//       },
//       inDuration: 250,
//       outDuration: 250,
//       opacity: 0.5,
//       dismissible: false,
//       startingTop: "4%",
//       endingTop: "10%"
//     };
//     M.Modal.init(this.Modal, options);

//     // let instance = M.Modal.getInstance(this.Modal);
//     // instance.open();
//     // instance.close();
//     // instance.destroy();
//   }

//   render() {
//     return (
//       <div>
//         <a
//           className="waves-effect waves-light btn modal-trigger"
//           data-target="modal1"
//         >
//           Contact Us
//         </a>

//         <div
//           ref={Modal => {
//             this.Modal = Modal;
//           }}
//           id="modal1"
//           className="modal"
//         >
//           {/* If you want Bottom Sheet Modal then add 
//                         bottom-sheet class to the "modal" div
//                         If you want Fixed Footer Modal then add
//                         modal-fixed-footer to the "modal" div*/}
//           <div className="modal-content">
       
//           </div>
//           <div className="modal-footer">
//             <a className="modal-close waves-effect waves-green btn-flat">
//                OK 
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Modal;




// import React, { Component } from "react";
// class Modal extends Component {
//   state = {};
//   render() {
//     return (
//       <div>
//         <div id="modal2" class="modal">
//           <div
//             class="jumbotron bg-cover text-white pic"
//             style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(https://wallpaperaccess.com/full/1773222.jpg)"
//           >
//             <div class="modal-content">
//               <div class="row">
//                 <h4 class="usernameInput">CONTACT US </h4>
//                 <hr />
//                 <br />
//                 <section class="row">
//                   <div class="col s12 contactinfo">
//                     <span class="flow-text titleShadow">
//                       <p class="contactC text-muted text-center">Instagram:</p>
//                       <a href="https://www.instagram.com/sacramentohospitalitygroup/">
//                         <i class="fab fa-github-square c fa-2x"></i>
//                       </a>
//                     </span>
//                   </div>
//                 </section>
//               </div>
//               <section class="row">
//                 <div class="col s12 contactinfo">
//                   <span class="flow-text titleShadow">
//                     <p class="contactC text-muted text-center">LinkedIn:</p>
//                     <a href="https://www.linkedin.com/company/sacramento-hospitality-group/">
//                       <i class="fab fa-linkedin  c fa-2x"></i>
//                     </a>
//                   </span>
//                 </div>
//               </section>
//               <section class="row">
//                 <div class="col s12  contactinfo">
//                   <span class="flow-text titleShadow">
//                     <p class="contactC text-muted text-center">Email:</p>
//                     <a href="mailto:kellystone916@gmail.com">
//                       <i class="fas fa-envelope-square fab c fa-2x"></i>
//                     </a>
//                   </span>
//                 </div>
//               </section>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Modal;
