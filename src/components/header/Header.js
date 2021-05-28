import React from 'react';
import "./Header.css";

function Header(){
    return(
        <div>
{/* <!-- Navigation --> */}
<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container">
    <a className="navbar-brand" href="https://www.netflix.com/browse">So-Clean</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="https://www.netflix.com/browse">Home
                <span className="sr-only">(current)</span>
              </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.netflix.com/browse">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.netflix.com/browse">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.netflix.com/browse">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


        </div>
    );
}

export default Header;