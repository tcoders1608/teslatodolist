// Footer.js
import React from 'react';

const Footer = () => {
 return (
  <>
    <footer className="bg-gray-800 text-black  p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </div>
        <div>
          <a href="#" className="mx-2">Privacy How are you Hello Brother 
          Policy</a>
          <a href="#" className="mx-2">Terms of Service</a>
        </div>
        <div>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="mx-2"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
 
    </>
 );
}

export default Footer;