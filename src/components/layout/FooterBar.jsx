import React from 'react';
import { SocialIcons } from "./helper";

const FooterBar = () => {

   return (
      <div className="footer-bar" aria-labelledby="Footer bar">
         <div className="container">
            <div className="footer-bar-wrapper">

               <p>© copyright 2021 by Layerdrops.com </p>
               <SocialIcons />

            </div>
         </div>
      </div>
   );
};

export default FooterBar;