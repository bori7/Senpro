import React, { useContext,useEffect } from "react";	
import {MyContext} from '../store/context/myContext';
import main_logo from '../static/assets/main-logo.png';
import banner_logo from "../static/assets/banner_logo.png";
// import {message } from "antd";
import * as actions from "../store/actions/auth";
// import  '../../src/static/style.css';
import {Link } from "react-router-dom";
import { Alert } from '@material-ui/lab';

  export const MenuLayout = (props) => {

    
    const {state, dispatch} = useContext(MyContext)
    const {token, loading} = state

    
    // var errorMessage = null;/

    // useEffect(() => {
    //   // if (token !== undefined && token !== null) {
    //   //    // props.history.push('/login/');
    //   // }
    //   if (state.error) { errorMessage = <Alert severity="error">{state.error}</Alert>};
    
    //   if (state.message) { errorMessage = <Alert severity="info">{state.message}</Alert>};
  
    //   }, [state.token, state.error, state.message]) 

      const handleSignout= e => {
        e.preventDefault();
        actions.logout(dispatch)
        // props.history.push('/login/');
      }
    

return (
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
        {state.token?
        (<form className="form-inline my-2 my-lg-0 navright animate__animated animate__fadeInLeft">
        <Link to={`/logout/`}>
              <button onClick = {handleSignout} className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf" >SignOut</button>
              </Link> 
        </form>) :  (<form className="form-inline my-2 my-lg-0 navright animate__animated animate__fadeInLeft">
        <Link to={`/login/`}>
              <button className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf" >Login</button>
              </Link>
        </form>)
        }
        
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
        {token ?
        (<form className="form-inline my-2 my-lg-0 navright animate__animated animate__fadeInLeft">
        <Link to={`/logout/`}>
              <button onClick = {handleSignout}  className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf" >SignOut</button>
              </Link>
        </form>) :  (<form className="form-inline my-2 my-lg-0 navright animate__animated animate__fadeInLeft">
        <Link to={`/login/`}>
              <button className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf" >Login</button>
              </Link>
        </form>)
        }
        
      </div>
    </nav>
<div>

</div>
   
    
        </div>
    </div>


</div>

 ) }
    
   