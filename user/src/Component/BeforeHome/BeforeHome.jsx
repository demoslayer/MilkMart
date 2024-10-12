// import './BeforeHome.css'

// import React, { useEffect, useState } from 'react';
// import img0 from './img0.jpg';
// import img1 from './img1.jpg';
// import img02 from './img02.jpg';
// import img3 from './img3.jpg';
// import img4 from './img4.jpg';
// import { Link } from 'react-router-dom';

// const images = [img0, img1, img02, img3, img4];

// function BeforeHome() {
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
//               style={{ width: '500px', height: '400px' }} 
//             />
//           </div>
//         </div>
//       </div>
//       <div className="about">
//         <div className="about-topic">
//           <h1>About DoorDairy</h1>
//         </div>
//       </div>
//       <div className="details">
//         <div className="para1">
//           {/* <img src={bot1} alt=""  className='img-para1'/> */}
//           <p className='p-para1'>DoorDairy is an innovative platform designed to bridge the gap between farmers and consumers by providing a seamless way for dairy farmers to sell their fresh milk directly to DoorDairy. This platform empowers farmers by giving them access to a larger market, enabling them to reach more customers without the hassle of traditional distribution channels. By streamlining the process, DoorDairy ensures that farmer</p>
//         </div> 
//         <div className="para1">
//           {/* <img src={bot22} alt="" className='img-para2'/> */}
//           <p className='p-para2'>The mission of DoorDairy is to support local farmers and promote sustainable farming practices. By eliminating the middlemen, the platform not only ensures that farmers get a better price for their milk but also encourages them to maintain high standards of quality and sustainability. This direct connection fosters a more transparent and trustworthy relationship between the producers and consumers, ultimately benefiting the entire community.</p>
//         </div> 
//         <div className="para1">
//           {/* <img src={bot444} alt="" className='img-para3' /> */}
//           <p className='p-para3'>DoorDairy offers the convenience of having fresh, locally-produced milk delivered straight to their doorstep. This not only guarantees the freshness of the product but also supports local agriculture and reduces the carbon footprint associated with long-distance transportation. Customers can trust that the milk they receive is not only fresh but also produced under ethical and environmentally-friendly conditions</p>
//         </div>
//       </div>
//       {/* <Footer/> */}
//     </div>
//   );
// }

// export default BeforeHome;


import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import './BeforeHome.css';

function BeforeHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home">
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

      <header id="home" className="header">
        <h1 className="animate-fade-in">Welcome to DoorDairy</h1>
        <p className="animate-fade-in-delay">Your one-stop shop for all things dairy!</p>
      </header>

      <section id="products" className="products">
        <div className="product-card animate-slide-in">
          <h2>Fresh Milk</h2>
          <p>Straight from local farms to your doorstep</p>
        </div>
        <div className="product-card animate-slide-in" style={{animationDelay: '0.2s'}}>
          <h2>Organic Manure</h2>
          <p>Nutrient-rich fertilizer for your garden</p>
        </div>
        <div className="product-card animate-slide-in" style={{animationDelay: '0.4s'}}>
          <h2>Premium Cow Feed</h2>
          <p>High-quality nutrition for healthy cows</p>
        </div>
        <div className="product-card animate-slide-in" style={{animationDelay: '0.6s'}}>
          <h2>Dairy Equipment</h2>
          <p>Modern tools for efficient dairy farming</p>
        </div>
      </section>

      <section id="about" className="about">
        <h2 className="animate-fade-in">About DoorDairy</h2>
        <p className="animate-fade-in-delay">
          DoorDairy is an innovative platform connecting farmers and consumers. We provide fresh dairy products, organic manure, and quality cow feed while supporting local agriculture and sustainable farming practices.
        </p>
      </section>

      <section className="features">
        <h2 className="animate-fade-in">Why Choose DoorDairy?</h2>
        <ul>
          <li className="animate-slide-in">Direct farm-to-table connection</li>
          <li className="animate-slide-in" style={{animationDelay: '0.2s'}}>Support local farmers</li>
          <li className="animate-slide-in" style={{animationDelay: '0.4s'}}>Sustainable and ethical practices</li>
          <li className="animate-slide-in" style={{animationDelay: '0.6s'}}>Wide range of dairy products</li>
          <li className="animate-slide-in" style={{animationDelay: '0.8s'}}>Convenient doorstep delivery</li>
        </ul>
      </section>

      <section id="services" className="services">
        <h2 className="animate-fade-in">What We Provide</h2>
        <div className="service-grid">
          <div className="service-item animate-pop-in">Fresh Dairy Products</div>
          <div className="service-item animate-pop-in" style={{animationDelay: '0.2s'}}>Organic Farming Supplies</div>
          <div className="service-item animate-pop-in" style={{animationDelay: '0.4s'}}>Livestock Feed</div>
          <div className="service-item animate-pop-in" style={{animationDelay: '0.6s'}}>Farm-to-Consumer Platform</div>
        </div>
      </section>

      <section className="testimonials">
        <h2 className="animate-fade-in">Customer Feedback</h2>
        <div className="testimonial-grid">
          <div className="testimonial-item animate-fade-in">
            <p>"DoorDairy has transformed how I source my dairy products. Fresh, ethical, and convenient!"</p>
            <span>- Sarah M., Happy Customer</span>
          </div>
          <div className="testimonial-item animate-fade-in" style={{animationDelay: '0.3s'}}>
            <p>"As a farmer, DoorDairy has opened up new markets for me. It's a game-changer!"</p>
            <span>- John D., Dairy Farmer</span>
          </div>
        </div>
      </section>

      <section id="contact" className="cta">
        <h2 className="animate-fade-in">Ready to Experience the DoorDairy Difference?</h2>
        <Link to='/login'><button className="animate-pulse">Join DoorDairy Today!</button></Link>
      </section>
    </div>
  );
}

export default BeforeHome;
