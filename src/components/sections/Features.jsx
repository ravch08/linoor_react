import React from 'react';

import { featureItems } from '../layout/Data';
import { FeatureItem } from '../layout/helper';

const Features = () => {

   const featureItemsList = featureItems.map(featureItem => <FeatureItem
      key={featureItem.id}
      svg={featureItem.svg}
      feature={featureItem.feature}
      description={featureItem.description}
   />);

   return (
      <section id="features" aria-labelledby="Features">
         <div className="container">

            <div className="heading text-center">
               <h2>Checkout Our <strong>Company</strong> <br /> Features Below</h2>
            </div>

            <div className="feature-list"> {featureItemsList} </div>
         </div>
      </section>
   );
};

export default Features;