import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// The "props" passed from "App.js" has to be accepted by "Navbar()" function 
export default function Navbar(props) {
  return (
    <>
      {/* In JSX  we replace "class" with "className" */}
      {/* we use backtick (  `  ) for using templet literals here */}
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>    {/* Dark Mode */}
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">     {/*light mode     */}
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>                    {/* We can use props passed by "App.js" just    {props.props_name} */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/*    In JSX  we replace     href="#"    with    href="/"       */}
                {/* replace "<a></a>"  with " <Link></Link>" */}
                {/* replace "href"  with  "to" */}
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.AboutText}</Link>                {/* We can use props passed by "App.js" just    {props.props_name} */}
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
              {/* In Bootstrap:-
              <button className="btn btn-outline-success" type="submit">Search</button>
              primary -----------> blue colour
              outline-success -----------> green colour 
              danger -----------> red colour */}
            </form>
            {/* using ternary operator with the props passed */}
            {/* when "mode = light" then display "Enable Dark Mode" in dark(black) color  , when "mode = dark" then display "Enable Dark Mode" in light(white) color   */}
            {/* this will display the color of the text(content) */}
            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            {/* when "mode = light" then display "Enable Dark Mode" in dark(black) color  , when "mode = dark" then display "Enable Dark Mode" in light(white) color   */}
              <label className="form-check-label" htmlfor="flexSwitchCheckDefault">{`Enable ${props.mode === 'light'?'dark':'light'} Mode`}</label>
            </div>
          </div>
        </div>
      </nav>
    </>
    );
}
// "Props" = " Properties"
// "propTypes" describes the type of "props" and if we use props of different types it give us an error 
// "is.Required" mark a "props" as compulsary 
Navbar.propTypes = {title: PropTypes.string.isRequired,
                    AboutText:PropTypes.string
}

// This is how we set a default "props"
// if we are not passing "props" to the this folder then we use this defaultProps 
Navbar.defaultProps = {
  title: "set title here",
  AboutText: "About"
}