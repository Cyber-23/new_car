import React from 'react';
import {Link} from 'react-router-dom';
const Home = () => {
    return (
        <div>
<div>
  {/* Slider */}
  <header className="header slider-fade">
    <div className="owl-carousel owl-theme">
      {/* The opacity on the image is made with "data-overlay-dark="number". You can change it using the numbers 0-9. */}
      <div className="item bg-img" data-overlay-dark={5} data-background="assets/img/slider/11.jpg">
        <div className="v-middle caption">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 mb-30">
                <div className="v-middle">
                  <h6>* Premium</h6>
                  <h1>Buy &amp; Sell Car</h1>
                  <h5>Toyota Fortuner <span>Rs.33.43 - 51.44 Lakh*</span></h5> <a href="#" data-scroll-nav={1} className="button-2 mt-15 mb-15">Book Now <span className="ti-arrow-top-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item bg-img" data-overlay-dark={5} data-background="assets/img/slider/12.jpg">
        <div className="v-middle caption">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 mb-30">
                <div className="v-middle">
                  <h6>* Premium</h6>
                  <h1>Buy &amp; Sell Car</h1>
                  <h5>Audi Q3 <span>Rs.43.81 - 53.17 Lakh*</span></h5><a href="#" data-scroll-nav={1} className="button-2 mt-15 mb-15">Book Now <span className="ti-arrow-top-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item bg-img" data-overlay-dark={5} data-background="assets/img/slider/14.jpg">
        <div className="v-middle caption">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 mb-30">
                <div className="v-middle">
                  <h6>* Premium</h6>
                  <h1>Buy &amp; Sell Car</h1>
                  <h5>Hyundai Creta <span>Rs.11 - 20.15 Lakh</span></h5> <a href="#" data-scroll-nav={1} className="button-2 mt-15 mb-15">Book Now <span className="ti-arrow-top-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* Cars 1 */}
  <section className="cars1 section-padding" id="cars">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center mb-30">
          <div className="section-subtitle">Select Your Car</div>
          <div className="section-title">Luxury <span>Car Fleet</span></div>
        </div>
      </div>
      <div className="cars1-carousel owl-theme owl-carousel">
        <div className="item">
          <div className="img"> <img src="assets//img/slider/Audi.jpg" alt /> </div>
          <div className="con opacity-1">
            <div className="row">
              <div className="col-md-7">
                <div className="title"><a href="#">Audi Q3 Premium Plus 2015</a></div>
                <div className="details"><span><i className="omfi-transmission" /> Second Owner</span> <span><i className="omfi-luggage" /> 90000km</span> <span><i className="omfi-age" />Lone Facility Available</span> </div>
              </div>
              <div className="col-md-5">
                <div className="book">
                  <div><Link to="/cars" className="btn"><span>Details</span></Link></div>
                  <div><span className="price">1250,000</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="img"> <img src="assets/img/slider/Brezza.jpg" alt /> </div>
          <div className="con opacity-1">
            <div className="row">
              <div className="col-md-7">
                <div className="title"><a href="#">Brezza vdi 2016</a></div>
                <div className="details"> <span><i className="omfi-transmission" />First Owner</span> <span><i className="omfi-luggage" /> 65000km</span></div>
              </div>
              <div className="col-md-5">
                <div className="book">
                  <div><Link to="/cars" className="btn"><span>Details</span></Link></div>
                  <div><span className="price">590,000</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="img"> <img src="assets/img/slider/CIAZ.jpg" alt /> </div>
          <div className="con opacity-1">
            <div className="row">
              <div className="col-md-7">
                <div className="title"><a href="#">Ciaz Vdi 2016</a></div>
                <div className="details"> <span><i className="omfi-door" />New Alloy Tyres</span> <span><i className="omfi-transmission" /> 65000km</span> <span><i className="omfi-age" />First Owner</span></div>
              </div>
              <div className="col-md-5">
                <div className="book">
                  <div><Link to="/cars" className="btn"><span>Details</span></Link></div>
                  <div><span className="price">525,000</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="img"> <img src="assets/img/slider/CRETA.jpg" alt /> </div>
          <div className="con opacity-1">
            <div className="row">
              <div className="col-md-7">
                <div className="title"><a href="#">Creta 1.5 SX</a></div>
                <div className="details"> <span><i className="omfi-door" />Full Insured</span> <span><i className="omfi-transmission" />Curise Control</span> <span><i className="omfi-age" />First Owner</span></div>
              </div>
              <div className="col-md-5">
                <div className="book">
                  <div><Link to="/cars" className="btn"><span>Details</span></Link></div>
                  <div><span className="price">1550,000</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="img"> <img src="assets/img/slider/ECOSPORT.jpg" alt /> </div>
          <div className="con opacity-1">
            <div className="row">
              <div className="col-md-7">
                <div className="title"><a href="#">Ecosport Titanium Plus 2014 modal</a></div>
                <div className="details"> <span><i className="omfi-door" />6 Airbags</span> <span><i className="omfi-transmission" /> Both Keys</span><span><i className="omfi-age" />64000km</span></div>
              </div>
              <div className="col-md-5">
                <div className="book">
                  <div><Link to="cars" className="btn"><span>Details</span></Link></div>
                  <div><span className="price">390,000</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="img"> <img src="assets/img/slider/Ecosport1.jpg" alt /> </div>
          <div className="con opacity-1">
            <div className="row">
              <div className="col-md-7">
                <div className="title"><a href="#">Ecosport Titanium 2018</a></div>
                <div className="details"> <span><i className="omfi-door" />Diesel Variant</span> <span><i className="omfi-transmission" />60000km</span><span><i className="omfi-age" />First Owner</span></div>
              </div>
              <div className="col-md-5">
                <div className="book">
                  <div><Link to="/cars" className="btn"><span>Details</span></Link></div>
                  <div><span className="price">640,000</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="img"> <img src="assets/img/slider/KING.jpg" alt /> </div>
          <div className="con opacity-1">
            <div className="row">
              <div className="col-md-7">
                <div className="title"><a href="#">Fortuner 4x2 MT</a></div>
                <div className="details"> <span><i className="omfi-door" />Diesel Variant</span> <span><i className="omfi-luggage" />Fully Insured</span> <span><i className="omfi-age" />First Owner</span></div>
              </div>
              <div className="col-md-5">
                <div className="book">
                  <div><Link to="/cars" className="btn"><span>Details</span></Link></div>
                  <div><span className="price">1450,000</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="img"> <img src="assets/img/slider/HONDA-VX.jpg" alt /> </div>
          <div className="con opacity-1">
            <div className="row">
              <div className="col-md-7">
                <div className="title"><a href="#">Honda Mobilio vx</a></div>
                <div className="details"> <span><i className="omfi-door" /> 7 Seats</span> <span><i className="omfi-transmission" />Diesel Variant</span> <span><i className="omfi-age" />First Owner</span></div>
              </div>
              <div className="col-md-5">
                <div className="book">
                  <div><Link to="/cars" className="btn"><span>Details</span></Link></div>
                  <div><span className="price">425,000</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="img"> <img src="assets/img/slider/Wagonr.jpg" alt /> </div>
          <div className="con opacity-1">
            <div className="row">
              <div className="col-md-7">
                <div className="title"><a href="#">Wagonr lxi 2013</a></div>
                <div className="details"><span><i className="omfi-transmission" />All Genuine</span> <span><i className="omfi-luggage" />80000 Km</span> <span><i className="omfi-age" /> Next to SowRoom</span></div>
              </div>
              <div className="col-md-5">
                <div className="book">
                  <div><Link to="/cars" className="btn"><span>Details</span></Link></div>
                  <div><span className="price">180,000</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="img"> <img src="assets/img/slider/HONDA.jpg" alt /> </div>
          <div className="con opacity-1">
            <div className="row">
              <div className="col-md-7">
                <div className="title"><a href="#">Honda City Vmt 2014 Oct.</a></div>
                <div className="details"> <span><i className="omfi-door" /> Diesel Variant</span> <span><i className="omfi-transmission" />58000km</span><span><i className="omfi-age" /> Both Keys Bumper</span></div>
              </div>
              <div className="col-md-5">
                <div className="book">
                  <div><Link to="/cars" className="btn"><span>Details</span></Link></div>
                  <div><span className="price">380,000</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About */}
  <section className="about section-padding" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-30">
          <div className="content">
            <div className="section-subtitle">Ganesh</div>
            <div className="section-title">Old for new? No problem! <span>A Ganesh Car Company</span></div>
            <p className="mb-30">
              Effortlessly sell your car at the best price through our online auction. Simply provide basic details and await top offers. Meanwhile, browse our website from the comfort of your couch to select your next dream car. We handle the entire process seamlessly, ensuring a smooth transition without hassle. Sell and buy with ease today!</p>
            <ul className="list-unstyled list mb-30">
              <li>
                <div className="list-icon"> <span className="ti-check" /> </div>
                <div className="list-text">
                  <p>Sports and Luxury Cars</p>
                </div>
              </li>
              <li>
                <div className="list-icon"> <span className="ti-check" /> </div>
                <div className="list-text">
                  <p>Economy Cars</p>
                </div>
              </li>
            </ul> <Link to="cars" className="button-1">Read More <span className="ti-arrow-top-right" /></Link>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1 col-md-12">
          <div className="item"> <img src="assets/img/about.jpg" className="img-fluid" alt />
            <div className="curv-butn icon-bg">
              <a href="#" className="vid">
                <div className="icon"> <i className="ti-control-play" /> </div>
              </a>
              <div className="br-left-top">
                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                  <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                </svg>
              </div>
              <div className="br-right-bottom">
                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                  <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* divider line */}
  <div className="line-vr-section" />
  {/* Car Category */}
  <section className="car-types1 section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center mb-30">
          <div className="section-subtitle">Categories</div>
          <div className="section-title">Buy &amp; Sell <span>Car Details</span></div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="owl-carousel owl-theme">
            <div className="item"> <img src="assets/img/cars/03.jpg" className="img-fluid" alt />
              <div className="title">
                <h4>Luxury Cars</h4>
              </div>
              <div className="curv-butn icon-bg">
                <Link to="/cars" className="vid">
                  <div className="icon"> <i className="ti-arrow-top-right" /> </div>
                </Link>
                <div className="br-left-top">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
                <div className="br-right-bottom">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="item"> <img src="assets/img/cars/04.jpg" className="img-fluid" alt />
              <div className="title">
                <h4>Sport Cars</h4>
              </div>
              <div className="curv-butn icon-bg">
                <Link to="/cars" className="vid">
                  <div className="icon"> <i className="ti-arrow-top-right" /> </div>
                </Link>
                <div className="br-left-top">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
                <div className="br-right-bottom">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="item"> <img src="assets/img/cars/02.jpg" className="img-fluid" alt />
              <div className="title">
                <h4>SUV</h4>
              </div>
              <div className="curv-butn icon-bg">
                <Link to="/cars" className="vid">
                  <div className="icon"> <i className="ti-arrow-top-right" /> </div>
                </Link>
                <div className="br-left-top">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
                <div className="br-right-bottom">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="item"> <img src="assets/img/cars/01.jpg" className="img-fluid" alt />
              <div className="title">
                <h4>Convertible</h4>
              </div>
              <div className="curv-butn icon-bg">
                <Link to="/cars" className="vid">
                  <div className="icon"> <i className="ti-arrow-top-right" /> </div>
                </Link>
                <div className="br-left-top">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
                <div className="br-right-bottom">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="item"> <img src="assets/img/cars/05.jpg" className="img-fluid" alt />
              <div className="title">
                <h4>Sedan</h4>
              </div>
              <div className="curv-butn icon-bg">
                <Link to="cars" className="vid">
                  <div className="icon"> <i className="ti-arrow-top-right" /> </div>
                </Link>
                <div className="br-left-top">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
                <div className="br-right-bottom">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="item"> <img src="assets/img/cars/06.jpg" className="img-fluid" alt />
              <div className="title">
                <h4>Small Cars</h4>
              </div>
              <div className="curv-butn icon-bg">
                <Link to="/cars" className="vid">
                  <div className="icon"> <i className="ti-arrow-top-right" /> </div>
                </Link>
                <div className="br-left-top">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
                <div className="br-right-bottom">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* divider line */}
  <div className="line-vr-section" />
  {/* Process */}
  <section className="process section-padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 text-center mb-30">
          <div className="section-subtitle">Steps</div>
          <div className="section-title white">Ganesh Car <span>Process</span></div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-30">
          <div className="item">
            <div className="text">
              <h5>Choose A Car</h5>
              <p>View our range of cars, find your perfect car for the coming days.</p>
            </div>
            <div className="numb">
              <div className="numb-curv">
                <div className="number">01.</div>
                <div className="shap-left-top">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
                <div className="shap-right-bottom">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-30">
          <div className="item">
            <div className="text">
              <h5>Come In Contact</h5>
              <p>Our advisor team is ready to help you with the booking process or any questions.</p>
            </div>
            <div className="numb">
              <div className="numb-curv">
                <div className="number">02.</div>
                <div className="shap-left-top">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
                <div className="shap-right-bottom">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-30">
          <div className="item">
            <div className="text">
              <h5>Enjoy Driving</h5>
              <p>Receive the key and enjoy your car. We treat all our cars with respect.</p>
            </div>
            <div className="numb">
              <div className="numb-curv">
                <div className="number">03.</div>
                <div className="shap-left-top">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
                <div className="shap-right-bottom">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-12 text-center mt-15">
          <p><span className="ti-info" /> If you've never Buy &amp; Sell a car before, we'll guide you through the process.</p>
        </div>
      </div>
    </div>
  </section>
  {/* Video */}
  <section className="video-wrapper video section-padding bg-img bg-fixed" data-overlay-dark={4} data-background="assets/img/slider/1.jpg">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="section-subtitle">Explore</div>
          <div className="section-title white">Car <span>Buy &amp;</span> Sell</div>
        </div>
      </div>
      <div className="row">
        <div className="text-center col-md-12">
          <Link to="/cars" className="button-2 mt-15 mb-15">Book Now <span className="ti-arrow-top-right" /></Link>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonials */}
  <section className="testimonials section-padding mt-15">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center mb-30">
          <div className="section-subtitle">Testimonials</div>
          <div className="section-title">What Clients Say</div>
        </div>
        <div className="col-md-12">
          <div className="owl-carousel owl-theme">
            <div className="item">
              <div className="stars"> <span className="rate">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </span>
                <div className="shap-left-top">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
                <div className="shap-right-bottom">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
              </div> <i className="fa-solid fa-quote-left" />
              <div className="text">
                <p>I knew what I wanted and I knew I wanted it from the get-go, because the condition of cars in our bazaars is poor in my experience. For the same or often even better money, you can buy a car abroad in top condition, with a high probability of having it serviced at an authorized service center, of acceptable mileage and age. Ganesh car company brought my chosen car from Kurukshetra. I'm glad that I didn't have to deal with the hassle of importing a car, that they completely arranged everything for me and handed me a car ready for use on Czech roads. Many thanks and keep up the good work!</p>
              </div>
              <div className="info mt-30">
                <div className="img-curv">
                  <div className="img"> <img src="assets/img/team/1.jpg" alt /> </div>
                  <div className="shap-left-top">
                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                      <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                    </svg>
                  </div>
                  <div className="shap-right-bottom">
                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                      <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                    </svg>
                  </div>
                </div>
                <div className="ml-30">
                  <h6>Dan Martin</h6>
                  <p>Customer</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="stars"> <span className="rate">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </span>
                <div className="shap-left-top">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
                <div className="shap-right-bottom">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
              </div> <i className="fa-solid fa-quote-left" />
              <div className="text">
                <p>My husband and I bought our dream car. It's big enough for our whole family, and we can all pack comfortably into it for longer trips, and above all, it's safe and drives reliably. These were our main criteria. We decided on Ganesh car on the recommendation of friends and we do not regret it. The initial nervousness was soon replaced by joy, and the decisive factor was also the fact that Ganesh car gives the car a min. half a year warranty. So far, the car is working perfectly, I believe it will continue to be so, but it's nice to have some kind of "insurance" in case something goes wrong.</p>
              </div>
              <div className="info mt-30">
                <div className="img-curv">
                  <div className="img"> <img src="assets/img/team/4.jpg" alt /> </div>
                  <div className="shap-left-top">
                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                      <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                    </svg>
                  </div>
                  <div className="shap-right-bottom">
                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                      <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                    </svg>
                  </div>
                </div>
                <div className="ml-30">
                  <h6>Olivia Brown</h6>
                  <p>Customer</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="stars"> <span className="rate">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </span>
                <div className="shap-left-top">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
                <div className="shap-right-bottom">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
              </div> <i className="fa-solid fa-quote-left" />
              <div className="text">
                <p>I chose a car according to my taste on Ganesh car. I have been loyal to the Škoda brand for many years and since it is necessary to move with the times, I chose the plug-in hybrid. What I like about the Superb is that it looks like a regular car and yet offers much more in terms of space and equipment. I am extremely satisfied with the services of Ganesh car. For the first time, I experienced buying a car when I didn't have to deal with anything at any office. Great. I recommend.</p>
              </div>
              <div className="info mt-30">
                <div className="img-curv">
                  <div className="img"> <img src="assets/img/team/6.jpg" alt /> </div>
                  <div className="shap-left-top">
                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                      <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                    </svg>
                  </div>
                  <div className="shap-right-bottom">
                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                      <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                    </svg>
                  </div>
                </div>
                <div className="ml-30">
                  <h6>Emily Martin</h6>
                  <p>Customer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* divider line */}
  <div className="line-vr-section" />
  {/* Team */}
  <section className="team section-padding" id="team">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center mb-30">
          <div className="section-subtitle">Sales Consultants</div>
          <div className="section-title">Our Experts<span> Team </span></div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-30">
          <div className="item"> <img src="assets/img/team/1.jpg" className="img-fluid" alt />
            <div className="bottom-fade" />
            <div className="butn icon-bg">
              <a href="#" className="vid">
                <div className="icon"> <i className="ti-info" /> </div>
              </a>
              <div className="br-left-top">
                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                  <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                </svg>
              </div>
              <div className="br-right-bottom">
                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                  <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                </svg>
              </div>
            </div>
            <div className="title">
              <h4>Dan Martin</h4>
              <h6>Sales Consultant</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-30">
          <div className="item"> <img src="assets/img/team/4.jpg" className="img-fluid" alt />
            <div className="bottom-fade" />
            <div className="info">
              <div className="butn icon-bg">
                <a href="#" className="vid">
                  <div className="icon"> <i className="ti-info" /> </div>
                </a>
                <div className="br-left-top">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
                <div className="br-right-bottom">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
              </div>
              <div className="title">
                <h4>Emily Arla</h4>
                <h6>Sales Consultant</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-30">
          <div className="item"> <img src="assets/img/team/5.jpg" className="img-fluid" alt />
            <div className="bottom-fade" />
            <div className="info">
              <div className="butn icon-bg">
                <a href="#" className="vid">
                  <div className="icon"> <i className="ti-info" /> </div>
                </a>
                <div className="br-left-top">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
                <div className="br-right-bottom">
                  <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                    <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                  </svg>
                </div>
              </div>
              <div className="title">
                <h4>Oliva White</h4>
                <h6>Sales Consultant</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-30">
          <div className="item"> <img src="assets/img/team/2.jpg" className="img-fluid" alt />
            <div className="bottom-fade" />
            <div className="butn icon-bg">
              <a href="#" className="vid">
                <div className="icon"> <i className="ti-info" /> </div>
              </a>
              <div className="br-left-top">
                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                  <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                </svg>
              </div>
              <div className="br-right-bottom">
                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                  <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                </svg>
              </div>
            </div>
            <div className="title">
              <h4>Margaret Nancy</h4>
              <h6>Sales Department</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-30">
          <div className="item"> <img src="assets/img/team/6.jpg" className="img-fluid" alt />
            <div className="bottom-fade" />
            <div className="butn icon-bg">
              <a href="#" className="vid">
                <div className="icon"> <i className="ti-info" /> </div>
              </a>
              <div className="br-left-top">
                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                  <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                </svg>
              </div>
              <div className="br-right-bottom">
                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                  <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                </svg>
              </div>
            </div>
            <div className="title">
              <h4>Mia Jane</h4>
              <h6>Finance Department</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-30">
          <div className="item"> <img src="assets/img/team/3.jpg" className="img-fluid" alt />
            <div className="bottom-fade" />
            <div className="butn icon-bg">
              <a href="#" className="vid">
                <div className="icon"> <i className="ti-info" /> </div>
              </a>
              <div className="br-left-top">
                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                  <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                </svg>
              </div>
              <div className="br-right-bottom">
                <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                  <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#1b1b1b" />
                </svg>
              </div>
            </div>
            <div className="title">
              <h4>Micheal Brown</h4>
              <h6>Sales Consultant</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Lets Talk */}
  <section className="lets-talk bg-img bg-fixed section-padding" data-overlay-dark={5} data-background="assets/img/slider/3.jpg">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h6>Buy &amp; Sell Your Car</h6>
          <h5>Interested in Buy &amp; Sell?</h5>
          <p>Don't hesitate and send us a message.</p> <a href="https://api.whatsapp.com/send?phone=9050918482" className="button-1 mt-15 mb-15 mr-10"><i className="fa-brands fa-whatsapp" /> WhatsApp</a> <Link to="cars" className="button-2 mt-15 mb-15">Book Now <span className="ti-arrow-top-right" /></Link>
        </div>
      </div>
    </div>
  </section>
  {/* Contact */}
  <section className="contact section-padding" id="contact">
    <div className="container">
      <div className="row">
        {/* Form */}
        <div className="col-lg-6 col-md-12 mb-30">
          <div className="form-box">
            <h5>Get in touch</h5>
            <form method="post" className="contact__form" action="https://duruthemes.com/demo/html/Ganesh/dark/mail.php">
              {/* form message */}
              <div className="row">
                <div className="col-12">
                  <div className="alert alert-success contact__msg" style={{display: 'none'}} role="alert"> Your message was sent successfully. </div>
                </div>
              </div>
              {/* form elements */}
              <div className="row">
                <div className="col-md-6 form-group">
                  <input name="name" type="text" placeholder="Your Name *" required />
                </div>
                <div className="col-md-6 form-group">
                  <input name="email" type="email" placeholder="Your Email *" required />
                </div>
                <div className="col-md-6 form-group">
                  <input name="phone" type="text" placeholder="Your Number *" required />
                </div>
                <div className="col-md-6 form-group">
                  <input name="subject" type="text" placeholder="Subject *" required />
                </div>
                <div className="col-md-12 form-group">
                  <textarea name="message" id="message" cols={30} rows={4} placeholder="Message *" required defaultValue={""} />
                </div>
                <div className="col-md-12">
                  <input name="submit" type="submit" defaultValue="Send Message" />
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Map */}
        <div className="col-lg-5 offset-lg-1 col-md-12">
          <h5>Location</h5>
          <div className="google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.172568628144!2d76.8735858!3d29.9744702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e473ae3d7b88f%3A0x8ae553a47c115351!2sganesh%20cars!5e0!3m2!1sen!2sin!4v1712902095238!5m2!1sen!2sin" width="100%" height="100%" style={{border: 0}} allowFullScreen loading="lazy" />
            <iframe src width="100%" height="100%" style={{border: 0}} allowFullScreen loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* FAQs */}
  <section className="faqs section-padding" id="faq">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center mb-30">
          <div className="section-subtitle">Frequently Asked Questions</div>
          <div className="section-title">Popular <span>Questions</span></div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <ul className="accordion-box clearfix">
            <li className="accordion block">
              <div className="acc-btn"><span className="count">1.</span> Age and responsibility</div>
              <div className="acc-content">
                <div className="content">
                  <div className="text">Driver must be 25+ years old to drive economy, luxury cars and supercars.</div>
                </div>
              </div>
            </li>
            <li className="accordion block">
              <div className="acc-btn"><span className="count">2.</span> Safe purchase</div>
              <div className="acc-content">
                <div className="content">
                  <div className="text">We guarantee the technical condition of every vehicle sold.</div>
                </div>
              </div>
            </li>
            <li className="accordion block">
              <div className="acc-btn"><span className="count">3.</span> Documents</div>
              <div className="acc-content">
                <div className="content">
                  <div className="text">A Goverment Id copy is required, Valid Driving License, Mobile number, Email address and Location and Time of delivery</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-12"> <img src="assets/img/about2.png" className="img-fluid" alt /> </div>
        <div className="col-lg-4 col-md-12">
          <ul className="accordion-box clearfix">
            <li className="accordion block">
              <div className="acc-btn"><span className="count">4.</span> Car Delivery</div>
              <div className="acc-content">
                <div className="content">
                  <div className="text">At the time of Delivery our team will contact And Deliver the car to your Location. On spot, You will check the car, Sign the contract &amp; receive the key. Enjoy your ride !</div>
                </div>
              </div>
            </li>
            <li className="accordion block">
              <div className="acc-btn"><span className="count">5.</span> Enquire Now</div>
              <div className="acc-content">
                <div className="content">
                  <div className="text">You can contact us for a quotation &amp; our team will assist you with the booking process. You can use the contact methods available on this page.</div>
                </div>
              </div>
            </li>
            <li className="accordion block">
              <div className="acc-btn"><span className="count">6.</span> Payment Methodes</div>
              <div className="acc-content">
                <div className="content">
                  <div className="text">We offer a variety of payment methods. We accept cash, of credit cards such as Visa, MasterCard and American Express.</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* Clients */}
  <section className="clients">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="owl-carousel owl-theme">
            <div className="clients-logo">
              <a href="#0"><img src="assets/img/clients/1.png" alt /></a>
            </div>
            <div className="clients-logo">
              <a href="#0"><img src="assets/img/clients/2.png" alt /></a>
            </div>
            <div className="clients-logo">
              <a href="#0"><img src="assets/img/clients/3.png" alt /></a>
            </div>
            <div className="clients-logo">
              <a href="#0"><img src="assets/img/clients/4.png" alt /></a>
            </div>
            <div className="clients-logo">
              <a href="#0"><img src="assets/img/clients/5.png" alt /></a>
            </div>
            <div className="clients-logo">
              <a href="#0"><img src="assets/img/clients/6.png" alt /></a>
            </div>
            <div className="clients-logo">
              <a href="#0"><img src="assets/img/clients/7.png" alt /></a>
            </div>
            <div className="clients-logo">
              <a href="#0"><img src="assets/img/clients/8.png" alt /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="footer clearfix">
    <div className="container">
      {/* first footer */}
      <div className="first-footer">
        <div className="row">
          <div className="col-md-12">
            <div className="links dark footer-contact-links">
              <div className="footer-contact-links-wrapper">
                <div className="footer-contact-link-wrapper">
                  <div className="image-wrapper footer-contact-link-icon">
                    <div className="icon-footer"> <i className="flaticon-phone-call" /> </div>
                  </div>
                  <div className="footer-contact-link-content">
                    <h6>Call us</h6>
                    <p>+91 90509-18482</p>
                  </div>
                </div>
                <div className="footer-contact-links-divider" />
                <div className="footer-contact-link-wrapper">
                  <div className="image-wrapper footer-contact-link-icon">
                    <div className="icon-footer"> <i className="omfi-envelope" /> </div>
                  </div>
                  <div className="footer-contact-link-content">
                    <h6>Write to us</h6>
                    <p>info@Ganesh.com</p>
                  </div>
                </div>
                <div className="footer-contact-links-divider" />
                <div className="footer-contact-link-wrapper">
                  <div className="image-wrapper footer-contact-link-icon">
                    <div className="icon-footer"> <i className="omfi-location" /> </div>
                  </div>
                  <div className="footer-contact-link-content">
                    <h6>Address</h6>
                    <p>Pipli Rd, opposite chatha complex, Sector 7, Kurukshetra, Haryana 136118</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second footer */}
      <div className="second-footer">
        <div className="row">
          {/* about & social icons */}
          <div className="col-md-4 widget-area">
            <div className="widget clearfix">
              <div className="footer-logo"><img src="assets/img/logo-light.png" alt /></div>
              {/* <div class="footer-logo"><h2>CARE<span>X</span></h2></div> */}
              <div className="widget-text">
                <p>Select your car online, we inspect and deliver it to you hassle-free. Enjoy convenience and peace of mind with our service.</p>
                <div className="social-icons">
                  <ul className="list-inline">
                    <li><a href="#"><i className="fa-brands fa-whatsapp" /></a></li>
                    <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                    <li><a href="#"><i className="fa-brands fa-youtube" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* quick links */}
          <div className="col-md-3 offset-md-1 widget-area">
            <div className="widget clearfix usful-links">
              <h3 className="widget-title">Quick Links</h3>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#cars">Cars</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
          {/* subscribe */}
          <div className="col-md-4 widget-area">
            <div className="widget clearfix">
              <h3 className="widget-title">Subscribe</h3>
              <p>Selling a car? We’re buying</p>
              <div className="widget-newsletter">
                <form action="#">
                  <input type="email" placeholder="Email Address" required />
                  <button type="submit"><i className="ti-arrow-top-right" /></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom footer */}
      <div className="bottom-footer-text">
        <div className="row copyright">
          <div className="col-md-12">
            <p className="mb-0">©2024 <a href="https://cybersolvings.com/">Cybersolvings</a>. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>


        </div>
    );
};

export default Home;