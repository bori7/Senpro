import React from "react";	
import main_logo from '../static/assets/main-logo.png';
import banner_logo from "../static/assets/banner_logo.png";
// import  '../../src/static/style.css';
import {Link } from "react-router-dom";

  export const MenuLayout = () => (

    <div className="container-fluid">

    <div className="row">
        <div className="col-12">


    <nav className="navbar navbar-expand-lg navbar-light fixed-top scroller-nav" id="scrollnav">
      <a className="navbar-brand " href="#"><img style={{width: "150px"}}  className="banner_logo" src={main_logo} alt = {"main_logo"}/></a>
      

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
         
          <li className="nav-item ">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">Team</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">Talk</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">Team</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/forum">Forum</a>
          </li>
          
          
        </ul>
        {/* <form className="form-inline my-2 my-lg-0 navright " style={{marginRight: "20px"}}>
        <Link to={`/initial/`}>
              <a className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf" >Let us help</a>
        </Link>
        </form> */}
        
      </div>
    </nav>



    <nav className=" banner-nav navbar navbar-expand-lg navbar-light ">
      <a className="navbar-brand animate__animated animate__fadeInLeft" href="/"><img className="banner_logo" src={banner_logo} alt = {"banner_logo_1"}/></a>
      

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          
          <li className="nav-item animate__animated animate__fadeInLeft">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item animate__animated animate__fadeInLeft">
            <a className="nav-link" href="#">Team</a>
          </li>
          <li className="nav-item animate__animated animate__fadeInLeft">
            <a className="nav-link" href="#">Talk</a>
          </li>
          <li className="nav-item animate__animated animate__fadeInLeft">
            <a className="nav-link" href="#">Team</a>
          </li>
          <li className="nav-item animate__animated animate__fadeInLeft">
            <a className="nav-link" href="/forum">Forum</a>
          </li>
          
          
        </ul>
        {/* <form className="form-inline my-2 my-lg-0 navright animate__animated animate__fadeInLeft">
        <Link to={`/initial/`}>
              <a className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf" >Let us help</a>
              </Link>
        </form> */}
        
      </div>
    </nav>
        </div>
    </div>


</div>

  )
    
   