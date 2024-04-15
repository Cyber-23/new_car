import React from 'react';
import {Link} from 'react-router-dom';
const Details = () => {
    return (
        <div>
<div>
  {/* Header Inner Slider */}
  <header className="header slider">
    <div className="owl-carousel owl-theme">
      {/* The opacity on the image is made with "data-overlay-dark="number". You can change it using the numbers 0-9. */}
      <div className="text-center item bg-img" data-overlay-dark={4} data-background="assets/img/slider/1.jpg" />
      <div className="text-center item bg-img" data-overlay-dark={4} data-background="assets/img/cars/c2.jpg" />
      <div className="text-center item bg-img" data-overlay-dark={4} data-background="assets/img/cars/c3.jpg" />
      <div className="text-center item bg-img" data-overlay-dark={4} data-background="assets/img/cars/c4.jpg" />
    </div>
  </header>
  {/* Details */}
  <section className="car-details section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <div className="row">
            <div className="col-md-12 mb-60">
              <h3>General Information</h3>
              <p className="mb-30">Car buying and selling involve researching, negotiating, and transferring ownership of vehicles for a price. Sellers advertise cars for sale, buyers inspect and test drive them, then negotiate terms before completing the transaction and transferring ownership.</p>
              <ul className="list-unstyled list mb-30">
                <li>
                  <div className="list-icon"> <span className="ti-check" /> </div>
                  <div className="list-text">
                    <p>24/7 Roadside Assistance</p>
                  </div>
                </li>
                <li>
                  <div className="list-icon"> <span className="ti-check" /> </div>
                  <div className="list-text">
                    <p>Free Cancellation &amp; Return</p>
                  </div>
                </li>
                <li>
                  <div className="list-icon"> <span className="ti-check" /> </div>
                  <div className="list-text">
                    <p>Buy &amp; Sell Now Pay When You Arrive</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/*  Gallery Image */}
          <div className="row">
            <div className="col-md-12">
              <h3>Image Gallery</h3>
            </div>
          </div>
          <div className="row gallery-items mb-60">
            <div className="col-md-4 gallery-masonry-wrapper single-item cardio">
              <Link to="assets/img/cars/c7.jpg" title className="gallery-masonry-item-img-link img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img"> <img src="assets/img/cars/c7.jpg" className="img-fluid mx-auto d-block" alt /> </div>
                  <div className="gallery-masonry-item-img" />
                </div>
              </Link>
            </div>
            <div className="col-md-4 gallery-masonry-wrapper single-item crossfit">
              <Link to="assets/img/cars/c8.jpg" title className="gallery-masonry-item-img-link img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img"> <img src="assets/img/cars/c8.jpg" className="img-fluid mx-auto d-block" alt /> </div>
                  <div className="gallery-masonry-item-img" />
                </div>
              </Link>
            </div>
            <div className="col-md-4 gallery-masonry-wrapper single-item crossfit">
              <Link to="assets/img/cars/c9.jpg" title className="gallery-masonry-item-img-link img-zoom">
                <div className="gallery-box">
                  <div className="gallery-img"> <img src="assets/img/cars/c9.jpg" className="img-fluid mx-auto d-block" alt /> </div>
                  <div className="gallery-masonry-item-img" />
                </div>
              </Link>
            </div>
          </div>
          {/* FAQs */}
          <div className="row">
            <div className="col-md-12">
              <h3>Rental Conditions</h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <ul className="accordion-box clearfix">
                <li className="accordion block">
                  <div className="acc-btn"><span className="count">1.</span> Contract and Annexes</div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">In addition to the car rental contract to be signed at the time of delivery, a credit card is required from our individual customers. We request our commercial customers to submit their company documents (tax plate, signature slip, ID photocopy).</div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn"><span className="count">2.</span> Driving License and Age</div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">The tenant must be 25 years of age and have a 5-year local or valid international driver's license for group A, B, C, D vehicles at the time of the rental agreement.</div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn"><span className="count">3.</span> Prices</div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">Prices include maintenance and insurance guarantee against third parties (within legal policy limits). 18% VAT (value added tax) is not included. Fuel belongs to the renter. Chauffeur driven service and translator guide are available upon request.</div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn"><span className="count">4.</span> Payments</div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">The total rental fee is collected at the time of rental. The shortest rental period is 72 hours, and in case of delay, 1/3 of the fee is charged for each additional hour. Delays exceeding 3 hours in total are calculated as a full day. A deposit is required from a valid credit card.</div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn"><span className="count">5.</span> Delivery</div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">Delivery is free of charge where our Rent a car company is located. Delivery in these cities is possible with prior notice; hotel, workplace, station, port etc. It can be done in places. For vehicle deliveries and returns in cities where our office is not located, a delivery fee of 0.2 Euro/km is applied, starting from the rented location.</div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn"><span className="count">6.</span> Traffic Fines</div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">Traffic fines toll and illegal toll fees belong to the customer. If the vehicles are detained by traffic, this period is included in the rental period. In necessary cases, we may change these conditions and information and the vehicle type specified in the reservation without prior notice. Our vehicles cannot be taken abroad.</div>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn"><span className="count">7.</span> Contract and Annexes</div>
                  <div className="acc-content">
                    <div className="content">
                      <div className="text">In addition to the car rental contract to be signed at the time of delivery, a credit card is required from our individual customers. We request our commercial customers to submit their company documents (tax plate, signature slip, ID photocopy).</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="col-lg-4 col-md-12">
          <div className="sidebar-car">
            <div className="title">
              <h4>60000 <span>/ Price</span></h4>
            </div>
            <div className="item">
              <div className="features"><span><i className="omfi-door" /> Doors</span>
                <p>4</p>
              </div>
              <div className="features"><span><i className="omfi-passengers" /> Passengers</span>
                <p>5</p>
              </div>
              <div className="features"><span><i className="omfi-transmission" /> Transmission</span>
                <p>Auto</p>
              </div>
              <div className="features"><span><i className="omfi-luggage" /> Luggage</span>
                <p>2 Bags</p>
              </div>
              <div className="features"><span><i className="omfi-condition" /> Air Condition</span>
                <p>Yes</p>
              </div>
              <div className="features"><span><i className="omfi-age" /> Age</span>
                <p>25</p>
              </div>
              <div className="btn-double mt-30" data-grouptype="&"> <Link to="car-details.html">Book Now</Link> <Link to="https://api.whatsapp.com/send?phone=9050918482" target="_blank"><span className="fa-brands fa-whatsapp" /> WhatsApp</Link> </div>
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
          <p>Don't hesitate and send us a message.</p> <Link to="https://api.whatsapp.com/send?phone=9050918482" className="button-1 mt-15 mb-15 mr-10"><i className="fa-brands fa-whatsapp" /> WhatsApp</Link> <Link to="car-details.html" className="button-2 mt-15 mb-15">Book Now <span className="ti-arrow-top-right" /></Link>
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
              <p>Want to be notified about our services. Just sign up and we'll send you a notification by email.</p>
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
            <p className="mb-0">©2024 <Link to="https://cybersolvings.com/">CyberSolvings</Link>. All rights reserved.</p>
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

export default Details;