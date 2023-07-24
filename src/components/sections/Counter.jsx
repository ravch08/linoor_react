import React from 'react';

const Counter = () => {

   return (
      <section id="project-counter" aria-labelledby="Completed Projects">
         <div className="container">

            <div className="heading text-center ">
               <h2>Over 2200 <strong>Projects</strong> <br /> Completed</h2>
            </div>

            <div className="counters">

               <div className="counter">
                  <span>4789</span>
                  <p>PROJECTS</p>
               </div>
               <div className="counter">
                  <span>6400</span>
                  <p>CUSTOMERS</p>
               </div>
               <div className="counter">
                  <span>960</span>
                  <p>SUCCESS</p>
               </div>
               <div className="counter">
                  <span>378</span>
                  <p>AWARDS</p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Counter;