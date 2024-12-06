import React from 'react'
import{Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-navbar py-4" role="banner">
  <div className="container">
    <div className="d-flex align-items-center">
      <div className="site-logo">
        <a href="index.html">
          <img src="images/logo.png" alt="Logo" />
        </a>
      </div>
      <div className="ml-auto">
        <nav className="site-navigation position-relative text-right" role="navigation">
          <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
            <li className="active"><Link to="/" className="nav-link">Home</Link></li>
            <li className="active"><Link to="/Addmatch" className="nav-link">Add Match</Link></li>
            <li><Link to="/Matches" className="nav-link">Matches</Link></li>
            <li><Link to="/Players" className="nav-link">Players</Link></li>
            <li><Link to="/blog" className="nav-link">Blog</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
            <li><Link to="/singup"  className="nav-link">singUp</Link></li>
            <li><Link to="/addmatches"  className="nav-link">addmatches</Link></li>
            <li><Link to="/tablematches"  className="nav-link">tablematches</Link></li>
             <li><Link to="/AddTeam"  className="nav-link">AddTeam</Link></li>
            <li><Link to="/DisplayTeam"  className="nav-link">DisplayTeam</Link></li>
           <li><Link to="/AddPlayer"  className="nav-link">AddPlayer</Link></li>
                              </ul>
        </nav>
        <a href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"><span className="icon-menu h3 text-white" /></a>
      </div>
    </div>
  </div>
</header>


  )
}
