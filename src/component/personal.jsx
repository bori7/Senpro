import React ,{useEffect, useState,useContext, useCallback, useRef}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import {Link } from "react-router-dom";
import { getGradedASNTS } from "../store/actions/results";
import {MyContext} from '../store/context/myContext';
// import main_logo from '../static/assets/main-logo.png';
import banner_logo from "../static/assets/banner_logo.png";
// import  '../static/style.css';
// import {q1script} from './q1j.js';



export const Personal = (props) => {

    const {state, dispatch} = useContext(MyContext);
    const {explain,tips,title} = state;
    const node = useRef();
    // const node2 = useRef(0);
    // const node3 = useRef();

    const [initia, setInitia] = useState({});
    // const [alert, setAlert] = useState(false);

    // const fadeOutEffect= useCallback(( )=> {
    //     var fadeTarget = node2.current.querySelector('.se-pre-con');
    //     var fadeEffect = setInterval(function () {
    //         setAlert(false)
    //         if (!fadeTarget.style.opacity) {
    //             fadeTarget.style.opacity = 1;
    //         }
    //         if (fadeTarget.style.opacity > 0) {
    //             fadeTarget.style.opacity -= 0.1;
    //         } else {
    //             clearInterval(fadeEffect);
    //             setAlert(false)
    //             // document.removeEventListener('load', fadeOutEffect);
    //         }
    //     }, 180);
    // },[]);
  
    useEffect(() => {

        getGradedASNTS(dispatch)
        node.current.addEventListener('click', (e)=>  {
            for (const select of node.current.querySelectorAll('.custom-select')) {
                if (!select.contains(e.target)) {
                    select.classList.remove('open');
                }
            }
        });

        for (const option of node.current.querySelectorAll(".custom-option")) {
            option.addEventListener('click', () =>  {
                if (!option.classList.contains('selected')) {
                    option.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
                    option.classList.add('selected');
                    option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent;
                }
            })   }
      
            for (const dropdown of node.current.querySelectorAll(".custom-select-wrapper")) {
                dropdown.addEventListener('click', ()=> {
                    dropdown.querySelector('.my-custom-select').classList.toggle('open');
                })
                
            }

            for (const option of node.current.querySelectorAll(".custom-choice")) {
                option.addEventListener('click', () =>{
                    if (!option.classList.contains('active')) {
                        if( option.parentNode.querySelector('.custom-choice.active')){
                         option.parentNode.querySelector('.custom-choice.active').classList.remove('active');}
                         option.classList.add('active');
                        // option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent; 
                    }
                })
            }
    

   
    }, []);


  



const scrollFunction = ()=> {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("scrollnav").style.top = "0";
    } else {
    document.getElementById("scrollnav").style.top = "-150px";
    }
}

window.onscroll = ()=>  {scrollFunction()};



    const initial=  {}
    const handleSubmit = e => {
    e.preventDefault();
 
  }

  const handleReturn = e => {
    // e.preventDefault();
 
    props.history.push("/");
  }

  return(
        <div ref={node}>
       {/* <div ref={node2} className="se-pre-con"></div> */}
      
        <div className="jumbotron result-header mini_header bgimg" style={{backgroundImage: {mini_header_2}}}>
            <MenuLayout/>
            <br/>
            <br/>
            <br/><br/>
            <br/>
            <br/>
            <br/><br/>
            <br/>
            <br/>
            <br/><br/>
            {/* <a className="navbar-brand animate__animated animate__fadeInLeft" href="/"><img className="banner_logo" src={banner_logo} alt = {"banner_logo_1"}/></a>
       */}
        <div className="container-fluid">
        
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-12">	
                            <h1>RESULTS</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>

        <div className="jumbotron bg-white">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    <h4 className="form-title"></h4>
                </div>
                
                    <div className="col-md-10" style={{marginTop: '30px'}}>
                    {title.map(x=> 
                    
                        <div>
                
                <div className="row questions">
                   
                    <div className="col-md-3">
                    
                        <p className="primary-header header">{x}</p> 
                 
                    </div>
                </div>

                <div className="row questions">
                   
                    <div className="col-md-3">
                    
                        <span className=" question  ">{explain[title.indexOf(x)]}</span> 
                 
                    </div>
                </div>
                    
                <div className="row questions">
                   
                   <div className="col-md-3">
                   <Link to={`/gendev3/`}>
                       <button className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">Book an appointment</button> 
                       </Link>
                   </div>
               </div>

                <div className="row questions">
                   
                   <div className="col-md-3">
                   
                       <p className="question ">{tips[title.indexOf(x)]}</p> 
                
                   </div>
               </div>
               <br/>
            <br/>
            <br/>

            <br/>
            </div>
            
                    
                    ) }
               
                        <br/>
                            <br/>
                            <br/>
                        <div className="col-12 step-control">
                                <button onClick = { handleReturn}className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">Back to Home
                                </button>
                              
                        </div>
                   
                    </div>
            
                
            </div>

        </div>
        </div>
        
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" integrity="sha512-3n19xznO0ubPpSwYCRRBgHh63DrV+bdZfHK52b1esvId4GsfwStQNPJFjeQos2h3JwCmZl0/LgLxSKMAI55hgw==" crossorigin="anonymous"></script>
		
        </div>
)}