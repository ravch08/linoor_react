import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { LogoDark, Sidebar } from '../layout/helper';

const Header = () => {

   const [isSticky, setIsSticky] = useState("");

   const stickyFn = () => {
      const stickyClass = window.scrollY >= 250 ? "sticky" : "";
      setIsSticky(stickyClass);
   };

   useEffect(() => {
      window.addEventListener('scroll', stickyFn);
      return () => window.removeEventListener('scroll', stickyFn);
   });

   const sticky = `${isSticky}`;

   return (
      <header className={sticky}>
         <div className="container-fluid">
            <div className="header-wrapper">

               <div className="navigation">
                  <Link to="/" className="nav-brand">
                     <img loading="lazy" src={LogoDark} alt="Linoor Logo" />
                  </Link>

                  <nav aria-labelledby="Primary Navigation">
                     <ul className="nav-list">
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About Us</Link></li>
                        <li className="nav-item">
                           <Link to="/servicepage" className="nav-link">Services</Link>
                           <ul className="dropdown-menu">
                              <li className="dropdown-item"><Link to="#!" className="dropdown-link">Website Development</Link>
                              </li>
                              <li className="dropdown-item"><Link to="#!" className="dropdown-link">App Development</Link></li>
                              <li className="dropdown-item"><Link to="#!" className="dropdown-link">UI/UX Design</Link></li>
                              <li className="dropdown-item"><Link to="#!" className="dropdown-link">SEO & Content
                                 Writing</Link>
                              </li>
                              <li className="dropdown-item"><Link to="#!" className="dropdown-link">Graphic Design</Link></li>
                              <li className="dropdown-item"><Link to="#!" className="dropdown-link">Digital Marketing</Link>
                              </li>
                           </ul>
                        </li>
                        <li className="nav-item">
                           <Link to="/portfolio" className="nav-link">Portfolio</Link>
                           <ul className="dropdown-menu">
                              <li className="dropdown-item"><Link to="#!" className="dropdown-link">Portfolio 1</Link></li>
                              <li className="dropdown-item"><Link to="#!" className="dropdown-link">Portfolio 2</Link></li>
                              <li className="dropdown-item"><Link to="#!" className="dropdown-link">Portfolio 3</Link></li>
                              <li className="dropdown-item"><Link to="#!" className="dropdown-link">Portfolio 4</Link></li>
                           </ul>
                        </li>
                        <li className="nav-item">
                           <Link to="/blogpage" className="nav-link">Blog</Link>
                           <ul className="dropdown-menu">
                              <li className="dropdown-item"><Link to="#!" className="dropdown-link">Shop</Link></li>
                              <li className="dropdown-item"><Link to="#!" className="dropdown-link">Product Detail</Link></li>
                              <li className="dropdown-item"><Link to="#!" className="dropdown-link">Cart</Link></li>
                              <li className="dropdown-item"><Link to="#!" className="dropdown-link">Checkout</Link></li>
                           </ul>
                        </li>
                        <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                     </ul>
                  </nav>
               </div>

               <div className="menu">

                  <Link to="#!" className="search">
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
                        <path
                           d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                     </svg>
                  </Link>

                  <Sidebar />
               </div>


            </div>

         </div>
      </header>
   );
};

export default Header;