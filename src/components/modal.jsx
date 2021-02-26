export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon />
          </Fab>
          <div className={classes.grow} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}


// import React, { Component } from "react";
// class Modal extends Component {
//   state = {};
//   render() {
//     return (
//       <div class = "modalBackground">
//         <div id="modal2" class="modal">
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
//       // </div>
//     );
//   }
// }

// export default Modal;
