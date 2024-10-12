
// import React, { useEffect, useState } from 'react';
// import './Home.css';
// import img0 from './img0.jpg';
// import img1 from './img1.jpg';
// import img02 from './img02.jpg';
// import img3 from './img3.jpg';
// import img4 from './img4.jpg';
// import { Link } from 'react-router-dom';

// const images = [img0, img1, img02, img3, img4];

// function Home() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <div className='home'>
//       <div className="headers">
//         <div className="upper">
//           <div className="htag">
//           <h1>Welcome to Doordairy your best partner to help you with</h1>
//           </div>
//           <div className="images">
//             <img 
//               src={images[currentImageIndex]} 
//               alt="slideshow" 
//               style={{ width: '500px', height: '400px'}} 
//             />
//           </div>
//         </div>
//       </div>
//       <div className="about">
//         <Link to='/request'>
//           <button className="btn">SELL HERE</button>
//         </Link> 
//         <div className="about-topic">
//           <h1>About DoorDairy</h1>
//         </div>
//       </div>
//       <div className="details">
//         <div className="para1">
//           {/* <img src={bot1} alt=""  className='img-para1'/> */}
//           <p className='p-para1'>DoorDairy is an innovative platform designed to bridge the gap between farmers and consumers by providing a seamless way for dairy farmers to sell their fresh milk directly to DoorDairy. This platform empowers farmers by giving them access to a larger market, enabling them to reach more customers without the hassle of traditional distribution channels. DoorDairy ensures that farmers receive fair compensation for their produce, while customers enjoy fresh, high-quality milk</p>
//         </div> 
//         <div className="para1">
//           {/* <img src={bot22} alt="" className='img-para2'/> */}
//           <p className='p-para2'>The mission of DoorDairy is to support local farmers and promote sustainable farming practices. The platform not only ensures that farmers get a better price for their milk but also encourages them to maintain high standards of quality and sustainability. This direct connection fosters a more transparent and trustworthy relationship between the producers and consumers, ultimately benefiting the entire community.</p>
//         </div> 
//         <div className="para1">
//           {/* <img src={bot444} alt="" className='img-para3' /> */}
//           <p className='p-para3'>DoorDairy offers the convenience of having fresh, locally-produced milk delivered straight to their doorstep. This not only guarantees the freshness of the product but also supports local agriculture and reduces the carbon footprint associated with long-distance transportation. Customers can trust that the milk they receive is not only fresh but also produced under ethical and environmentally-friendly conditions.</p>
//         </div>
//       </div>
//       {/* <Footer/> */}
//     </div>
//   );
// }

// export default Home;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='home'>
      <nav className="navbar">
        <div className="navbar-logo">DoorDairy</div>
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in">Welcome to DoorDairy</h1>
          <p className="hero-subtitle animate-fade-in-delay">Your best partner for fresh, local dairy in Sydney</p>
          <Link to='/request'>
            <button className="cta-button animate-pulse">SELL HERE</button>
          </Link>
        </div>
        <div className="hero-animation">
          <div className="nature-scene">
            <div className="sun"></div>
            <div className="cloud cloud1"></div>
            <div className="cloud cloud2"></div>
            <div className="tree tree1"></div>
            <div className="tree tree2"></div>
            <div className="grass"></div>
            <div className="cow"></div>
            <div className="milk-bottle">
              <div className="milk-fill"></div>
            </div>
          </div>
        </div>
      </div>

      <section id="about" className="about-section">
        <h2 className="section-title animate-fade-in">About DoorDairy</h2>
        <div className="feature-grid">
          <div className="feature-card animate-pop-in">
            <i className="fas fa-handshake feature-icon"></i>
            <h3>Connecting Farmers & Consumers</h3>
            <p>DoorDairy bridges the gap, providing a seamless platform for dairy farmers to sell directly to customers in Sydney.</p>
          </div>
          <div className="feature-card animate-pop-in" style={{animationDelay: '0.2s'}}>
            <i className="fas fa-leaf feature-icon"></i>
            <h3>Promoting Sustainability</h3>
            <p>We support local farmers and encourage sustainable farming practices for a better future in New South Wales.</p>
          </div>
          <div className="feature-card animate-pop-in" style={{animationDelay: '0.4s'}}>
            <i className="fas fa-truck feature-icon"></i>
            <h3>Fresh Delivery</h3>
            <p>Enjoy fresh, high-quality milk delivered straight to your doorstep, supporting local Sydney agriculture.</p>
          </div>
        </div>
      </section>

      <section id="services" className="process-section">
        <h2 className="section-title animate-fade-in">How It Works</h2>
        <div className="process-steps">
          <div className="process-step animate-slide-in">
            <div className="step-number">1</div>
            <h3>Farmers List Products</h3>
            <p>Local Sydney dairy farmers list their fresh products on our platform.</p>
          </div>
          <div className="process-step animate-slide-in" style={{animationDelay: '0.2s'}}>
            <div className="step-number">2</div>
            <h3>Customers Order</h3>
            <p>Sydney residents browse and order fresh dairy products from local farmers.</p>
          </div>
          <div className="process-step animate-slide-in" style={{animationDelay: '0.4s'}}>
            <div className="step-number">3</div>
            <h3>We Deliver</h3>
            <p>DoorDairy ensures timely delivery of fresh products to customers across Sydney.</p>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <h2 className="section-title animate-fade-in">What Our Sydney Customers Say</h2>
        <div className="testimonial-carousel">
          <div className="testimonial-card animate-fade-in">
            <p>"DoorDairy has revolutionized how I get my daily milk in Sydney. It's fresher than ever!"</p>
            <p className="testimonial-author">- Sarah J., Bondi Beach</p>
          </div>
          <div className="testimonial-card animate-fade-in" style={{animationDelay: '0.3s'}}>
            <p>"As a farmer in the Sydney basin, DoorDairy has helped me reach more customers and get fair prices for my produce."</p>
            <p className="testimonial-author">- John D., Local Dairy Farmer</p>
          </div>
          <div className="testimonial-card animate-fade-in" style={{animationDelay: '0.6s'}}>
            <p>"I love supporting local Sydney farmers while enjoying top-quality dairy products. DoorDairy makes it so easy!"</p>
            <p className="testimonial-author">- Emma R., Surry Hills</p>
          </div>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <h2 className="animate-fade-in">Ready to Experience the DoorDairy Difference in Sydney?</h2>
        <Link to='/signup'>
          <button className="cta-button animate-pulse">Get Started</button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
