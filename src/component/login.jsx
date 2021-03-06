import React ,{useEffect, useState,useContext, useRef}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import { Link } from "react-router-dom";
import {MyContext} from '../store/context/myContext';

// import { message } from "antd";
import * as actions from "../store/actions/auth";

// import  '../static/style.css';
// import {q1script} from './q1j.js';



export const Login = (props) => {

    const node = useRef();
    // const node2 = useRef(0);
    // const node3 = useRef();

    const [initia, setInitia] = useState({});
    const [error, setError] = useState(false);
    const {state, dispatch } = useContext(MyContext)
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
    // var errorMessage = null
    useEffect(() => {
        // if (state.error) { errorMessage = message.error(state.error)}
    
        // //  if (error) { errorMessage = message.error("Incomplete response")};
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
    //   if(alert){  document.addEventListener('load', fadeOutEffect)}
    //   else{ document.removeEventListener('load', fadeOutEffect);}
  

    // return () =>  {
    //     // document.removeEventListener('load', fadeOutEffect);
    
    // // for (const option of node.current.querySelectorAll(".custom-option")) {
    // //     option.removeEventListener('click', () =>  {
    // //         if (!option.classList.contains('selected')) {
    // //             option.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
    // //             option.classList.add('selected');
    // //             option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent;
    // //         }
    // //     })   }
    //     for (const dropdown of node.current.querySelectorAll(".custom-select-wrapper")) {
    //         dropdown.removeEventListener('click', ()=> {
    //             dropdown.querySelector('.my-custom-select').classList.toggle('open');
    //         })
            
    //     }
    //     document.removeEventListener('click', (e)=>  {
    //         for (const select of node.current.querySelectorAll('.custom-select')) {
    //             if (!select.contains(e.target)) {
    //                 select.classList.remove('open');
    //             }
    //         }
    //     });    
        
    //     for (const option of node.current.querySelectorAll(".custom-choice")) {
    //         option.removeEventListener('click', () =>{
    //             if (!option.classList.contains('active')) {
    //                if( option.parentNode.querySelector('.custom-choice.active')){
    //                 option.parentNode.querySelector('.custom-choice.active').classList.remove('active');}
    //                 option.classList.add('active');
    //                 // option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent; 
    //             }
    //         })
    //     }
    
    // }

    }, [state.error,state.token]);


  



const scrollFunction = ()=> {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("scrollnav").style.top = "0";
    } else {
    document.getElementById("scrollnav").style.top = "-150px";
    }
}

window.onscroll = ()=>  {scrollFunction()};


// for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
//     dropdown.addEventListener('click', ()=> {
//         dropdown.querySelector('.my-custom-select').classList.toggle('open');
//     })
    
// }

// for (const option of document.querySelectorAll(".custom-option")) {
//     option.addEventListener('click', () =>  {
//         if (!option.classList.contains('selected')) {
//             option.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
//             option.classList.add('selected');
//             option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent;
//         }
//     })
    
// }

// window.addEventListener('click', (e)=>  {
//     for (const select of document.querySelectorAll('.custom-select')) {
//         if (!select.contains(e.target)) {
//             select.classList.remove('open');
//         }
//     }
// });
    

    
    const initial=  {}

const handleSubmit = e => {
    e.preventDefault();
 
            initial["option1"] = e.target.option1.value
            initial["option2"] = e.target.option2.value

            actions.authLogin(initial["option1"].toLowerCase(), initial["option2"],dispatch)
            if (state.token){
        
                props.history.push("/initial/");
              }
     
//             for (const [key, value] of Object.entries(initial)) {
//                 // if( value === ""){
//                 //     // setError(true)
//                 //     message.error("Incomplete response");
//                 //     props.history.push('/initial/');
//                 // break;
                
//                 // }
                
//                 if(initial["option6"]==='no'){
//                     props.history.push('/q1/');
//                 }else if(initial["option6"]==='yes'){
   
//                  props.history.push('/age/');
//               }
//             // console.log(initial)
//             setInitia(initial)
//   }


}

  const handleReturn = e => {
    e.preventDefault();
 
    props.history.push('/signup/');
  }


  return(
        <div ref={node}>
      {/* {errorMessage} */}
       {/* <div ref={node2} className="se-pre-con"></div> */}
        <div className="jumbotron forum-header mini_header bgimg" style={{backgroundImage: {mini_header_2}}}>
            <MenuLayout/>
            <br/>
            <br/>
            <br/><br/>
            <br/>
            <br/>
            <br/><br/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-12">	
                            <h1>Login</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
        
        <div className="jumbotron bg-white col-12 text-center">
        <div className="container-fluid">
            <div className="row ">
                
                    <div className="col-md-10" style={{marginTop: '30px'}}>
                    <form onSubmit={handleSubmit}>
                     
                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">Username</p>
                            </div>
                            <div className="col-md-3">
                            <input input className="question-input form-control" placeholder="Username" type="text" id = "option1" name = "option1" required />
                            
                            </div>
                        </div>

                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">Password</p>
                            </div>
                            <div className="col-md-3">
                            <input input className="question-input form-control" placeholder="Password" type="password" id = "option2"name = "option2" required />
                             </div>
                        </div>

         
                       
                        <br/>
                            <br/>
                            <br/>
                        <div className="col-12 step-control">
                        <div></div>
                            <button type="submit" value="Submit" className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">Login
                            </button> 
                           
                            {/* <button onClick = {handleReturn} className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">SignUp
                            </button> */}
                        </div>
                        <br/>
                        <div className="col-12 step-control">
                        <div></div>
                            {/* <button type="submit" value="Submit" className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">Login
                            </button>  */}
                            <button onClick = {handleReturn} className="btn btn-secondary deepblue curvebtn my-2 my-sm-0 colorf">SignUp
                            </button>
                        </div>
                    </form>
                  
                    </div>
            
                
            </div>

        </div>
        </div>
        
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" integrity="sha512-3n19xznO0ubPpSwYCRRBgHh63DrV+bdZfHK52b1esvId4GsfwStQNPJFjeQos2h3JwCmZl0/LgLxSKMAI55hgw==" crossorigin="anonymous"></script>
		
        </div>
)}
  
