import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <div>
                        <div>
  {/* Preloader */}
  <div className="preloader-bg">
    <div id="preloader">
      <div id="preloader-status">
        <div className="preloader-position loader"> <span /> </div>
      </div>
    </div>
  </div>
  {/* Progress scroll totop */}
  <div className="progress-wrap cursor-pointer">
    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg">
    <div className="container">
      {/* Logo */}
      <div className="logo-wrapper">
        <Link className="logo" to="/"> <img src="assets/img/logo-light.png" className="logo-img" alt /> </Link>
        {/* <a class="logo" href="index.html"><h2>Renta<span>x</span></h2></a> */}
      </div>
      {/* Button */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"><i className="fa-solid fa-bars" /></span> </button>
      {/* Menu */}
      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"> <Link className="nav-link active" to="/">Home </Link>
          </li>
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li><a href="#cars" className="nav-link">Cars</a></li>
          <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          <li className="nav-item"><a className="nav-link" href="#faq">Faq</a></li>
        </ul>
        <div className="navbar-right">
          <div className="wrap">
            <div className="icon"> <i className="flaticon-phone-call" /> </div>
            <div className="text">
              <p>Need help?</p>
              <h5><Link to="tel:9050918482">9050918482</Link></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  {/* Slider */}
</div>
        </div>
    );
};

export default Header;