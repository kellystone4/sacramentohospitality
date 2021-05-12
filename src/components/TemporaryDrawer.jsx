import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom'
import Modal from '../components/modal'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  list: {
    // fontfamily: "Roboto",
    fontfamily: "Roboto",
    size: "100px",
    width: 230,
    // height: 800,
    alignItems: "center",
    justifyContent: "center",
    // text: 'center',
    color: 'black',
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List  style={{
              backgroundColor: "transparent",
              // padding: "18px 20px 20px 10px",
              // margin: "0px 10px 0px -15px",
              fontSize: "14px",
              // fontfamily: "Cormorant Garamond",
              fontcolor: "black",
          }}>
          <ListItem button key="hi">
          <Link to ='/'>H O M E </Link>
          </ListItem>
          <ListItem button key="hi">
          <Link to ='/aboutUs'> A B O U T &nbsp; U S</Link> 
          </ListItem>
          <ListItem button key="hi">
          <Link to ='/pastEvents'>  P A S T &nbsp; E V E N T S </Link>
          </ListItem>
          {/* <ListItem button key="Contact Us"> */}
          <Modal />
          {/* <Link to ="<Modal />">  C O N T A C T &nbsp; U S  </Link> */}
          {/* <Link><Modal></Modal></Link> */}
          {/* </ListItem> */}
        {/* ))} */}
      </List>
    </div>
  );

  return (
    <div>
      {/* <React.Fragment key={anchor}> */}
      {/* <Button onClick={toggleDrawer(true)}><MenuIcon /></Button> */}
      {/* </React.Fragment> */}

      {['='].map((anchor) => (
        <React.Fragment key={anchor}>
          <Link onClick={toggleDrawer(anchor, true)}>{anchor}</Link>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}