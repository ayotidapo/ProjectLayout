import React from 'react';
import classnames from 'classnames';

const SideBar = React.memo(props => (
  <div
    onClick={props.ontoggleSideBar}
    className={classnames(
      'sidenav',
      { sidenavOpen: props.open },
      { sidenavClose: !props.open },
    )}
  >
    {false && (
      <a
        className="closebtn hidex"
        onClick={() => props.ontoggleSideBar('0px')}
      >
        &times;
      </a>
    )}

    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
  </div>
));
export default SideBar;
