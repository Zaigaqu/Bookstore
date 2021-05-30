import React from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <CartIcon className={classes.icon} />
      <div className={classes.title}>Your Cart</div>
      <div className={classes.badge}>1</div>
    </button>
  );
};

export default HeaderCartButton;
