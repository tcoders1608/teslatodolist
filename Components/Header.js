
import React from 'react';


const Header = () => {
 return (
     <>
    <header className=" bg-white text-black p-4">
      <div className="container justify-between items-center">
        <div className="font-bold text-xl">
          This is a Chat Box Application<br/>
        </div>
        <nav className="">
            <ul className="">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </nav>
      </div>
    </header>
    </>
 );
}

export default Header;

