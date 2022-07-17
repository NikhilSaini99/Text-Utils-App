import React from 'react'  //rfc import React Based Function Components
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

//import Form from 'react-bootstrap/Form';

export default function Navbar(props) {
  return (
    <>
    <div>
      <nav className={`navbar navbar-${props.mode} navbar-expand-lg  bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand "  href="">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="">Home</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">{props.About}</Link>
        </li> */}
      </ul>
      <div className= {`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input"  aria-checked="false" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault ">Mode :Enable Dark/Light</label>
</div>
    </div>
  </div>
</nav>
    </div>
    </>
  )
}
//setting type of value that my props can receive - like string int or any other.
Navbar.propTypes = { 
  Navbar: PropTypes.string.isRequired, //is required means your props should not have any undefined value
  About: PropTypes.string
}
//using the default values here in case i am not passing any value to Props of my component
Navbar.defaultProps ={   
  Navbar: "Text-Utils-",
  About : "About Site"
}
