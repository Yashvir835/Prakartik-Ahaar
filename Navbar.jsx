import logo from "./logo.jpg";
import search_icon from "./search_icon.png";
import basket_icon from "./basket_icon.png";
import styles from "./Navbar.module.css";
import { useState } from "react";
function Navbar() {
  const [menu, setMenu] = useState();
  return (
    <div className={styles.navbar}>
      {/* Here is the Logo of our Aahar kendra */}
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>

      {/* This is the navbar-menu of the site */}
      <ul className={styles.navbar_menu}>
        {/* Here I apply the conditional statement when w e click on the any item it change the color */}
        <li
          onClick={() => setMenu("home")}
          className={`${styles.navbar_item} ${
            menu === "home" ? styles.active : ""
          }`}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={`${styles.navbar_item} ${
            menu === "menu" ? styles.active : ""
          }`}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={`${styles.navbar_item} ${
            menu === "contact-us" ? styles.active : ""
          }`}
        >
          Contact us
        </li>
      </ul>

      {/* Here I created the div for the search , basket, sign in as navbar_right */}

      <div className={styles.navbar_right}>
        {/* This is the search icon */}

        <img src={search_icon} alt="search" />

        {/* this is the basket  */}

        <img src={basket_icon} alt="basket" />

        {/* This is the sign in option  */}
        <button className={styles.navbar_button}>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;


// I think we can break Navbar in two or three components 