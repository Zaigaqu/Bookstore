import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css';

const Header = (props) => {
  const cartButtonHandler = () => {
    alert('CART BUTTON CLICKED! How do I style this fucking thing!');
  }
  
  return (
    <header className={classes.header}>
      <h2>Let's get started!</h2>
      <HeaderCartButton onClick={cartButtonHandler} />
    </header>
  );
};

export default Header;
