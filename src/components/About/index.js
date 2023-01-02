import React from 'react';
import profileImage from '../../assets/portfolio-image/headshot2.png';

function About() {
  return (
    <section id='about-me' className='my-5 intro'>
      <div class='flex-row'>
        <h1 id='about' className='section-title primary-border'>
          About Me
        </h1>
      </div>
      <div className='flex-row'>
        <div class='intro-info'>
          <div class='intro-img'>
            <img src={profileImage} style={{ width: "100%" }} alt='profile' />
          </div>
          <p>
            Hey there, my name is Madeline Ramos amd I am a Web Production Associate who lives in Wake Forest, NC. I come from the world of design with a B.F.A in Furniture Design from SCAD, but was recently introduced to endless possibilities of web development which landed my current job.
            With this new found passion I enrolled in a full stack development coding boot-camp though UNC Chapel Hill which is coming to a close in January 2023. With all of this new found knowledge and experience, I want to apply all of skills I have and do something amazing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;