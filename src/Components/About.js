import React from 'react';
import aboutImage from './about-image.jpg';
const About = () => {
  return (
   <div className="content">
    <div className='about-section'>
      <div className="about-section-content">
        <h1 className='about-head'>ABOUT US</h1>
        <p className='about-passage'>Welcome to iNotebook, your personal cloud-based note-taking app! With iNotebook, you can seamlessly create,
          organize, and access your notes from anywhere, on any device.<br/><br/>Whether you're jotting down ideas, making to-do lists, or storing important information, iNotebook ensures that your notes are securely saved in the cloud, so you never have to worry about losing them.</p>
        <button className="btn-read-more">Read More</button>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="" />
      </div>
    </div>
   </div>
  )
}

export default About
