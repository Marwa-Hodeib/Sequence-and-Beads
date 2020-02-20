import React from 'react';
import "./about-box.css";
import image1 from '../../assets/photos/showroom1.jpg';
import image3 from '../../assets/photos/sketch2.jpg';
import image4 from '../../assets/photos/ghada.png';



function AboutBox (){
  return (
    <>

  <div className='about_container'>
  
  <div className='first_par'>
  <div className='about_title'>
    <h1>My Story</h1></div>
    <p> when two Southern California friends—Griffin Thall and Paul Goodman—took a college graduation trip down to Costa Rica. Between the stunning sunsets, killer surfing, cool beach towns and awesome people, it didn’t take long for Griffin and Paul to fall in love with the laid-back lifestyle.
    they came across two artisans named Jorge and Joaquin, whose colorful string bracelets captured the simple beauty of Costa Rica. Sadly, Jorge and Joaquin were struggling to survive on their artisan wages, living with their family in a single room with three beds. Desperate to find some way to help, Griffin and Paul asked the artisans to make 400 bracelets to take home with them. And that’s when the fun really began..</p>
  </div>
  <div > <img src={image1} alt = 'blah' className='about_image1'/>  </div>

  <div > <img src={image3} alt = 'blah' className='about_image3'/>  </div>

  

  <div className='second_par'>
  <div className='about_title2'>
    <h2>How it Started</h2></div>
    <p className='text_2'>put the bracelets on display in a local boutique, selling out completely within just a few days. And it hit them: These pieces were more than just simple friendship bracelets. They were a movement that celebrated the simple things in life—or “Pura Vida,” as Costa Ricans would call it. Translating to “pure life” in Spanish, “pura vida” is more than just a saying. It’s a lifestyle of sorts. One that’s all about enjoying life’s little pleasures, slowing things down and living life to the fullest.around the world, Griffin and Paul teamed up with Jorge, Joaquin and other Costa Rican artisans to create handcrafted bracelets in endless color combinations—each one as unique as the person wearing it. What started out as selling just a few bracelets a week has grown into a worldwide movement with millions of bracelets sold each year.</p> </div>




  
    <div > <img src={image4} alt = 'blah' className='about_image4'/>  </div>
  
  
  
</div>
    
      
      
    
  
    </>
   
    
  );

}
export default AboutBox;