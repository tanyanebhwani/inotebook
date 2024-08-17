import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Footer = () => {
  let location = useLocation();
  return (
    <footer class="footer py-3 my-4" style={{position: `sticky`,zIndex: 2}}>
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><Link className={`nav-link ${location.pathname==="/home"?"active":""} px-2 text-body-secondary`} to="/">Home</Link></li>
      <li class="nav-item"><Link className={`nav-link ${location.pathname==="/about"?"active":""} px-2 text-body-secondary`} to="/about">About</Link></li>
      <li class="nav-item"><Link className={`nav-link ${location.pathname==="/contact"?"active":""} px-2 text-body-secondary`} to="/contact">Contact</Link></li>
      <li class="nav-item"><Link className={`nav-link ${location.pathname==="/help"?"active":""} px-2 text-body-secondary`} to="/help">Help</Link></li>
      <li class="nav-item"><Link className={`nav-link ${location.pathname==="/services"?"active":""} px-2 text-body-secondary`} to="/services">Services</Link></li>
    </ul>
    <p class="text-center text-body-secondary">© 2024 Inotebook</p>
  </footer>
  )
}

export default Footer