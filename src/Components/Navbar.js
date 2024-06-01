import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const handleLogOut = ()=>{
    localStorage.removeItem('token');
    navigate("/login");
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">iNotebook</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
        </li>
      </ul>
      {!localStorage.getItem('token')?<><Link className="btn btn-primary mx-2" to="/login" role="button">LogIn</Link>
      <Link className="btn btn-primary mx-2" to="/signup" role="button">SignUp</Link></>:<button className="btn btn-primary mx-2" onClick={handleLogOut}>LogOut</button>}
    </div>
  </div>
</nav>
  )
}

export default Navbar
