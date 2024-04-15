import React from 'react';
import {Link} from 'react-router-dom';

const Cars = () => {
    return (
        <div>
<div>
  {/* Header Banner */}
  <section className="banner-header section-padding bg-img" data-overlay-dark={5} data-background="assets/img/slider/3.jpg">
    <div className="v-middle">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h6>Select Your Car</h6>
            <h1>Luxury <span>Car Fleet</span></h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* divider line */}
  <div className="line-vr-section" />
  {/* Cars */}
  <section className="cars1 section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-60">
          <div className="item">
            <div className="img"> <img src="assets/img/slider/Audi.jpg" alt /> </div>
            <div className="con active">
              <div className="row">
                <div className="col-md-7">
                  <div className="title"><Link to="#">Audi Q3 Premium Plus 2015</Link></div>
                  <div className="details"><span><i className="omfi-transmission" /> Second Owner</span> <span><i className="omfi-luggage" /> 90000km</span></div>
                </div>
                <div className="col-md-5">
                  <div className="book">
                    <div><Link to="/details" className="btn"><span>Details</span></Link></div>
                    <div><span className="price">1250,000</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mb-60">
          <div className="item">
            <div className="img"> <img src="assets/img/slider/Brezza.jpg" alt /> </div>
            <div className="con active">
              <div className="row">
                <div className="col-md-7">
                  <div className="title"><Link to="#">Brezza vdi 2016</Link></div>
                  <div className="details"> <span><i className="omfi-transmission" />First Owner</span> <span><i className="omfi-luggage" /> 65000km</span></div>
                </div>
                <div className="col-md-5">
                  <div className="book">
                    <div><Link to="/details" className="btn"><span>Details</span></Link></div>
                    <div><span className="price">590,000</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mb-60">
          <div className="item">
            <div className="img"> <img src="assets/img/slider/CIAZ.jpg" alt /> </div>
            <div className="con active">
              <div className="row">
                <div className="col-md-7">
                  <div className="title"><Link to="#">Ciaz Vdi 2016</Link></div>
                  <div className="details"> <span><i className="omfi-door" />New Alloy Tyres</span> <span><i className="omfi-transmission" /> 65000km</span> <span><i className="omfi-age" />First Owner</span></div>
                </div>
                <div className="col-md-5">
                  <div className="book">
                    <div><Link to="/details" className="btn"><span>Details</span></Link></div>
                    <div><span className="price">525,000</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mb-60">
          <div className="item">
            <div className="img"> <img src="assets/img/slider/CRETA.jpg" alt /> </div>
            <div className="con active">
              <div className="row">
                <div className="col-md-7">
                  <div className="title"><Link to="#">Creta 1.5 SX</Link></div>
                  <div className="details"> <span><i className="omfi-door" />Full Insured</span> <span><i className="omfi-transmission" />Curise Control</span> <span><i className="omfi-age" />First Owner</span></div>
                </div>
                <div className="col-md-5">
                  <div className="book">
                    <div><Link to="/details" className="btn"><span>Details</span></Link></div>
                    <div><span className="price">1550,000</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mb-60">
          <div className="item">
            <div className="img"> <img src="assets/img/slider/ECOSPORT.jpg" alt /> </div>
            <div className="con active">
              <div className="row">
                <div className="col-md-7">
                  <div className="title"><Link to="#">Ecosport Titanium Plus 2014 modal</Link></div>
                  <div className="details"> <span><i className="omfi-door" />6 Airbags</span> <span><i className="omfi-transmission" /> Both Keys</span><span><i className="omfi-age" />64000km</span></div>
                </div>
                <div className="col-md-5">
                  <div className="book">
                    <div><Link to="/details" className="btn"><span>Details</span></Link></div>
                    <div><span className="price">390,000</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mb-60">
          <div className="item">
            <div className="img"> <img src="assets/img/slider/Ecosport1.jpg" alt /> </div>
            <div className="con active">
              <div className="row">
                <div className="col-md-7">
                  <div className="title"><Link to="#">Ecosport Titanium 2018</Link></div>
                  <div className="details"> <span><i className="omfi-door" />Diesel Variant</span> <span><i className="omfi-transmission" />60000km</span><span><i className="omfi-age" />First Owner</span></div>
                </div>
                <div className="col-md-5">
                  <div className="book">
                    <div><Link to="/details" className="btn"><span>Details</span></Link></div>
                    <div><span className="price">640,000</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mb-60">
          <div className="item">
            <div className="img"> <img src="assets/img/slider/KING.jpg" alt /> </div>
            <div className="con active">
              <div className="row">
                <div className="col-md-7">
                  <div className="title"><Link to="#">Fortuner 4x2 MT</Link></div>
                  <div className="details"> <span><i className="omfi-door" />Diesel Variant</span> <span><i className="omfi-luggage" />Fully Insured</span> <span><i className="omfi-age" />First Owner</span></div>
                </div>
                <div className="col-md-5">
                  <div className="book">
                    <div><Link to="/details" className="btn"><span>Details</span></Link></div>
                    <div><span className="price">1450,000</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mb-60">
          <div className="item">
            <div className="img"> <img src="assets/img/slider/HONDA-VX.jpg" alt /> </div>
            <div className="con active">
              <div className="row">
                <div className="col-md-7">
                  <div className="title"><Link to="#">Honda Mobilio vx</Link></div>
                  <div className="details"> <span><i className="omfi-door" /> 7 Seats</span> <span><i className="omfi-transmission" />Diesel Variant</span> <span><i className="omfi-age" />First Owner</span></div>
                </div>
                <div className="col-md-5">
                  <div className="book">
                    <div><Link to="/details" className="btn"><span>Details</span></Link></div>
                    <div><span className="price">425,000</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mb-60">
          <div className="item">
            <div className="img"> <img src="assets/img/slider/Wagonr.jpg" alt /> </div>
            <div className="con active">
              <div className="row">
                <div className="col-md-7">
                  <div className="title"><Link to="#">Wagonr lxi 2013</Link></div>
                  <div className="details"><span><i className="omfi-transmission" />All Genuine</span> <span><i className="omfi-luggage" />80000 Km</span> <span><i className="omfi-age" /> Next to SowRoom</span></div>
                </div>
                <div className="col-md-5">
                  <div className="book">
                    <div><Link to="/details" className="btn"><span>Details</span></Link></div>
                    <div><span className="price">180,000</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mb-60">
          <div className="item">
            <div className="img"> <img src="assets/img/slider/HONDA.jpg" alt /> </div>
            <div className="con active">
              <div className="row">
                <div className="col-md-7">
                  <div className="title"><Link to="#">Honda City Vmt 2014 Oct.</Link></div>
                  <div className="details"> <span><i className="omfi-door" /> Diesel Variant</span> <span><i className="omfi-transmission" />58000km</span><span><i className="omfi-age" /> Both Keys Bumper</span></div>
                </div>
                <div className="col-md-5">
                  <div className="book">
                    <div><Link to="/details" className="btn"><span>Details</span></Link></div>
                    <div><span className="price">380,000</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pagination */}
      {/* <div class="row">
          <div class="col-md-12 text-center">
              <ul class="pagination-wrap">
                  <li><Link to="blog2.html#"><i class="ti-angle-left"></i></Link></li>
                  <li><Link to="blog2.html#">1</Link></li>
                  <li><Link to="blog2.html#" class="active">2</Link></li>
                  <li><Link to="blog2.html#">3</Link></li>
                  <li><Link to="blog2.html#"><i class="ti-angle-right"></i></Link></li>
              </ul>
          </div>
      </div> */}
    </div>
  </section>
  {/* Clients */}
  <section className="clients">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="owl-carousel owl-theme">
            <div className="clients-logo">
              <Link to="#0"><img src="assets/img/clients/1.png" alt /></Link>
            </div>
            <div className="clients-logo">
              <Link to="#0"><img src="assets/img/clients/2.png" alt /></Link>
            </div>
            <div className="clients-logo">
              <Link to="#0"><img src="assets/img/clients/3.png" alt /></Link>
            </div>
            <div className="clients-logo">
              <Link to="#0"><img src="assets/img/clients/4.png" alt /></Link>
            </div>
            <div className="clients-logo">
              <Link to="#0"><img src="assets/img/clients/5.png" alt /></Link>
            </div>
            <div className="clients-logo">
              <Link to="#0"><img src="assets/img/clients/6.png" alt /></Link>
            </div>
            <div className="clients-logo">
              <Link to="#0"><img src="assets/img/clients/7.png" alt /></Link>
            </div>
            <div className="clients-logo">
              <Link to="#0"><img src="assets/img/clients/8.png" alt /></Link>
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
                    <li><Link to="#"><i className="fa-brands fa-whatsapp" /></Link></li>
                    <li><Link to="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                    <li><Link to="#"><i className="fa-brands fa-youtube" /></Link></li>
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
                <li><Link to="/">About</Link></li>
                <li><Link to="/cars">Cars</Link></li>
                <li><Link to="/">Team</Link></li>
                <li><Link to="/">Contact</Link></li>
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
            <p className="mb-0">©2024 <Link to="https://cybersolvings.com/">Cybersolvings</Link>. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* jQuery */}
</div>

        </div>
    );
};

export default Cars;