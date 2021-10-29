import React from 'react';


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Avengers</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Our Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Contact</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
      

    )
}

// Navbar.propTypes = {title : PropTypes.string}

