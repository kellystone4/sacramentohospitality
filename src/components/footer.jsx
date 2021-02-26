import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
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
      {/* <footer class="footer mt-auto py-3 fixed-bottom"> */}
        {/* <section class="container">
          <div class="container full-width"> */}
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
          {/* </div>
        </section> */}
      {/* </footer> */}
    </div>
    );
}

// import React, { Component } from "react";

// class Footer extends Component {
//   render() {
//     return (
//       <div>
//         <footer class="footer mt-auto py-3 fixed-bottom">
//           <section class="container">
//             <div class="container full-width">
//               <span class="text-grey text-center">
//                 <div class="col s4 contactinfo">
//                   <span class="flow-text titleShadow">
//                     <a href="https://www.linkedin.com/company/sacramento-hospitality-group/">
//                     <i class="fab fa-linkedin c fa-2x footericons">&nbsp;</i>
//                     </a>
//                   <a href="https://www.instagram.com/sacramentohospitalitygroup/">
//                     <i class="fab fa-instagram c fa-2x footericons">&nbsp;</i>
//                   </a>
//                   <a href="mailto:kellystone916@gmail.com">
//                     <i class="fas fa-envelope-square fab c fa-2x footericons">&nbsp;</i>
//                   </a>
//                   </span>
//                 </div>
//                 <p class="text-muted copyright"> © Copyright.</p>
//               </span>
//             </div>
//           </section>
//         </footer>
//       </div>
//     );
//   }
// }

// export default Footer;
