import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => setMobileMenu(!mobileMenu);

  return (
    <nav className={`app__navbar container ${sticky ? "dark-nav" : ""}`}>
      <Link to="hero" smooth={true} offset={0} duration={500}>
        <img src={logo} alt="logo" className="app__navbar__logo" />
      </Link>
      <ul
        className={`app__navbar__links ${mobileMenu ? "" : "hide-mobile-menu"}`}
      >
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li className="btn">
          <Link to="contact" smooth={true} offset={-260} duration={500}>
            Contact us
          </Link>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="Menu icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
