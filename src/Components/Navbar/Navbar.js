import React, { useState } from "react";
import style from "./Navbar.module.css";
import Diamond from "../../Components/Images/diamondRemove.png";
import { MenuOutlined } from "@ant-design/icons";
import { useRecoilState } from "recoil";
import { IsLogin } from "../../Recoil/Atom";
import { animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  let [isUserLoggedIn, setIsUserLoggedIn] = useRecoilState(IsLogin);
  console.log(IsLogin);
  const toggleNavbar = () => {
    setToggle(!toggle);
  };
  function handleLogout() {
    localStorage.removeItem("currentuser");
    setIsUserLoggedIn(false);
  }
  return (
    <header className={style.Navbar}>
      <div className={style.container}>
        <img
          className={style.logoImage}
          src={Diamond}
          alt="Beauty Parlour"
          onClick={() => scroll.scrollToTop()}
        />
        <nav
          className={
            toggle
              ? `${style.menuItem} ${style.toggleNavbar}`
              : `${style.menuItem}`
          }
        >
          <>
            <a
              href="/#home"
              className={style.home}
              onClick={() => scroll.scrollToTop()}
            >
              Home
            </a>
            <a href="/#whyus">Why Us</a>
            <a href="/#services">Service</a>
            <a href="/#pricing">Pricing</a>
            <a href="/#contact">Contact</a>

            {!isUserLoggedIn ? (
              <a href="/SingIn">LogIn</a>
            ) : (
              <>
                {" "}
                <a>Hello, {isUserLoggedIn.name}</a>
                <button className={style.btn} onClick={handleLogout}>Logout</button>{" "}
              </>
            )}
          </>

          <></>

          <button className={style.btnClose} onClick={toggleNavbar}>
            X
          </button>
        </nav>
        <button className={style.btnMenu} onClick={toggleNavbar}>
          <MenuOutlined />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
