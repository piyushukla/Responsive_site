import React from 'react'
import './Navbar.css'

function Navbar(){

return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light" >
   <div className="brd"> 
      <a className="navbar-brand" href="#" style={{float:"right"}}>Business Coach Website</a>
    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#" style={{ color:"blue"}}>Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Feedback</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact-Us</a>
        </li>
      </ul>
  </div>
</nav>
)

}
export default Navbar;