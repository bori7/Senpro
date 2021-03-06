import React ,{useEffect, useState,useContext, useCallback, useRef}from "react";
import {MenuLayout} from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
// import  '../static/style.css';
// import {q1script} from './q1j.js';
import { createGradedASNT } from "../store/actions/results";
import {MyContext} from '../store/context/myContext';
import {ResContext} from '../store/context/resultContext';


export const  GenDev3= (props) => {

    const node = useRef();
    // const node2 = useRef(0);
    // const node3 = useRef();

    const [initia, setInitia] = useState({});
    // const [alert, setAlert] = useState(false);
    const {state, dispatch} = useContext(MyContext)
    const {resstate, resdispatch} = useContext(ResContext)
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
        if (state.token === undefined || state.token === null) {
            props.history.push('/login/');
         }
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
    
    // for (const option of node.current.querySelectorAll(".custom-option")) {
    //     option.removeEventListener('click', () =>  {
    //         if (!option.classList.contains('selected')) {
    //             option.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
    //             option.classList.add('selected');
    //             option.closest('.my-custom-select').querySelector('.custom-select__trigger span').textContent = option.textContent;
    //         }
    //     })   }
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

    }, [state.token]);

  



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
    const exp = []
    const tip = []
    const tit = []
    const handleSubmit = e => {
    e.preventDefault();
 
            initial["option1"] = e.target.option1.value
            initial["option2"] = e.target.option2.value
            initial["option3"] = e.target.option3.value
            initial["option4"] = e.target.option4.value
            initial["option5"] = e.target.option5.value
            initial["option6"] = e.target.option6.value
            
            initial["option7"] = e.target.option7.value
            initial["option8"] = e.target.option8.value
            initial["option9"] = e.target.option9.value
            initial["option10"] = e.target.option10.value
            initial["option11"] = e.target.option11.value
            initial["option12"] = e.target.option12.value
            
            initial["option13"] = e.target.option13.value
            initial["option14"] = e.target.option14.value
            
            initial["option15"] = e.target.option15.value
            initial["option16"] = e.target.option16.value
            initial["option17"] = e.target.option17.value
            initial["option18"] = e.target.option18.value
            initial["option19"] = e.target.option19.value
            
            

        if (initial["option1"] === 'no' && initial["option2"] === 'no' &&
        initial["option4"]=== 'no'
        || initial["option5"]=== 'no'){
                tit.push('Your child may have challenges with deficiency in vocabulary bank and/or lexical retrieval. ')
                 exp.push('These may be symptomatic of broader deficiencies resulting in communication disorders. Consult one of our highly skilled speech pathologists for further guidance. ')
                 tip.push('Read with your child regularly. Using a picture dictionary, help your child associate pictures to corresponding words. Be careful to use the correct names for objects in the house and for parts of the body.')
                  }

        if (initial["option3"] === 'no'){
                tit.push('Your child may have challenges with auditory processing and/or receptive language. ')
                exp.push('These may be symptomatic of broader deficiencies resulting in communication disorders. Consult one of our highly skilled speech pathologists for further guidance.')
                  tip.push('Start your child with one-step instructions and gradually increase them. Reading aloud with your child every day will be beneficial. When communicating with your child, maintain eye contact at all times, ensuring that all directions are given in simple and concise language. Finally, ask your child to repeat the instruction given before carrying it out. ')
                 }

            if (initial["option5"] === 'no' ){
                    tit.push('Your child may have challenges in the area of pragmatic communication and/or expressive language.')
                      exp.push('These may be symptomatic of broader deficiencies associated with social communication disorders. Consult one of our highly skilled speech pathologists for further guidance. ')
                      tip.push('Start with ‘what’ questions by showing your child familiar objects and asking, ‘what is this?’ then move on to action cards and use these to ask the question ‘what is the girl/boy doing?’ Be prepared to provide the correct answers to the child.')
                      }

                    if (initial["option6"] === 'no' && initial["option7"] === 'no'&& initial["option10"] === 'no'){
                            tit.push('Your child may have challenges with balance and/or coordination. ')
                            exp.push('Consult one of our highly skilled occupational therapists to schedule an appointment.')
                             tip.push('Have your child practice walking on a beam with you, initially providing support, and gradually fading the support.')
                            }
                    
                        if (initial["option8"] === 'no'){
                            tit.push('Your child may have challenges with visual discrimination, pincer grip, bilateral coordination, and/or finger dexterity. ')
                            exp.push('Consult one of our highly skilled occupational therapists to schedule an appointment. ')
                             tip.push('Start with joining closely spaced dotted lines on a straight line and in different shapes; then gradually migrate to widely spaced dotted lines. ')
                            }    
                                if (initial["option9"] === 'no'){
                                tit.push('Your child may have challenges with bilateral coordination and/or finger dexterity. ')
                                exp.push(' Consult one of our highly skilled occupational therapists to schedule an appointment. ')
                                tip.push('Look for garments that have larger buttons, zippers and garment closures, and practice using the closures in front of the child before the child is allowed to do the same.')
                              }                  
                                    if (initial["option11"] === 'no' && initial["option12"] === 'no'){
                                    tit.push('Your child may have challenges with hand-eye coordination. ')
                                    exp.push(' Consult one of our highly skilled physiotherapists to schedule an appointment. ')
                                     tip.push('Have your child thread through two large beads and gradually increase the number of beads (use large beads to prevent choking hazards and to reduce the level of difficulty).')
                                    }  
                                        if (initial["option13"] === 'no' && initial["option16"] === 'no'){
                                        tit.push('Your child may have challenges with memory. ')
                                        exp.push(' This may impact cognition thus affecting learning and overall confidence. Consult one of our highly skilled educational psychologists to schedule an appointment. ')
                                        tip.push('Play screen-free memory games like: ‘Simon says’, storyboard creation and sequence, pengoloo, and Tongue twisters.  Practice the ‘We do, I do, You do’ technique, wherein you do it first, then ask your child to help and finally, ask your child to do it on their own. Ask your child to repeat words back to you, gradually move to phrases and then short sentences.')
                                     }      
                                        
                                        if (initial["option14"] === 'no' && initial["option18"] === 'no'){
                                        tit.push('Your child may have difficulty with visual discrimination, visual processing and/or logical reasoning. ')
                                         exp.push('Consult one of our highly skilled occupational therapists to schedule an appointment.')
                                          tip.push('Play an array of games including large puzzles, ‘Go Fishing’, sorting, and sequencing games')
                                        }
                                          if (initial["option15"] === 'no' && initial["option17"] === 'no'){
                                            tit.push('Your child may have difficulty focusing on given tasks for a specified time due to a short attention span.  ')
                                             exp.push('Consult one of our highly skilled occupational therapists to schedule an appointment.')
                                              tip.push('Reduce screen time and choose simple interest-based puzzles. Gradually increase the complexity of the puzzle. High-end Montessori influenced practical life activities will also be beneficial. ')
                                            }
                                              if (initial["option19"] === 'no' ){
                                                tit.push('Your child may have challenges understanding the world they live in and being able to interact with the world socially.')
                                                 exp.push('Consult one of our highly skilled educational psychologists and behavioral analysts to schedule an appointment. ')
                                                  tip.push('Play an array of games including large puzzles, ‘Go Fishing’, sorting, and sequencing games')}
                                                     
                                    const asnt = {
                                        title: tit,
                                        explain: exp,
                                        tips: tip 
                                    }
                                    createGradedASNT(asnt,resdispatch);
                                    // console.log(initial)
                                    // setInitia(initia)
                                    props.history.push('/result/');
  }

  const handleReturn = e => {
    e.preventDefault();
 
    props.history.goBack();
  }

  return(
        <div ref={node}>
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
                            <h1>Let Us Help</h1>
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
                    <h4 className="form-title">SEN Professionals Questionnaire – Age 3</h4>
                </div>
                <h5 className="form-title"style={{fontSize: '19px', color: 'black'}}>
                Please complete all three sections of the following questionnaire.
                 It is important to complete this questionnaire based on your child’s current abilities 
                 (abilities demonstrated consistently and independently). Your responses will guide any interventions and 
                 recommendations. Answer all questions by selecting ‘yes’ or ‘no’. 
                </h5>
                
      
                


                    <div className="col-md-10" style={{marginTop: '30px'}}>
                    <form onSubmit={handleSubmit}>
                     
                    <div className="col-md-10" >
                        <br/>
                        <br/>
                            <h4 className="form-title"style={{fontSize: '25px'}}>
                            SECTION 1 - COMMUNICATION</h4>
                    </div>

                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">1.	When asked, can your child point to five body parts and name them?</p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option1" id="option1" value = 'yes' autoComplete="off" required   /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option1" id="option1" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">2.	Is your child able to speak in 4-to-6-word sentences?  </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option2" id="option2" value = 'yes' autoComplete="off" required  /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option2" id="option2" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">3.	Is your child able to correctly follow two-step instructions given?  </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option3" id="option3" value = 'yes' autoComplete="off" required  /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option3" id="option3" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">4.	Is your child able to name five common objects in their environment?    </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option4" id="option4" value = 'yes' autoComplete="off"  required /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option4" id="option4" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">5.	Is your child able to answer simple ‘wh’ questions?    </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option5" id="option5" value = 'yes' autoComplete="off" required  /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option5" id="option5" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>
                      
                        <div className="col-md-10" >
                            <br/>
                            <br/>
                                <h4 className="form-title"style={{fontSize: '25px'}}>
                                SECTION 2 - MOTOR</h4>
                        </div>
                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">6.	Is your child able to kick a ball while maintaining balance?  </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option6" id="option6" value = 'yes' autoComplete="off" required  /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option6" id="option6" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">7.	Is your child able to walk up and down the stairs alternating feet?  </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option7" id="option7" value = 'yes' autoComplete="off" required  /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option7" id="option7" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">8.	Is your child able to draw a cross, vertical and horizontal lines correctly?  </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option8" id="option8" value = 'yes' autoComplete="off" required  /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option8" id="option8" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">9.	Is your child able to pull down a zip?  </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option9" id="option9" value = 'yes' autoComplete="off" required   /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option9" id="option9" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">10.	Is your child able to walk on a straight line?   </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option10" id="option10" value = 'yes' autoComplete="off" required  /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option10" id="option10" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>
                      
                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">11.	Is your child able to thread at least 6 big beads on a shoelace?  </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option11" id="option11" value = 'yes' autoComplete="off" required  /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option11" id="option11" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">12.	Is your child able to build a tower of 10 blocks by stacking one on top of the other?  </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option12" id="option12" value = 'yes' autoComplete="off" required  /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option12" id="option12" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>
                        
              


                    <div className="col-md-10" >
                        <br/>
                        <br/>
                            <h4 className="form-title"style={{fontSize: '25px'}}>
                            SECTION 3 - COGNITION</h4>
                    </div>
                    <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">13.	Is your child able to repeat a sequence of 3 words?  </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option13" id="option13" value = 'yes' autoComplete="off" required  /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option13" id="option13" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>

                     
                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">14.	Is your child able to construct a set of blocks when given a model?  </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option14" id="option14" value = 'yes' autoComplete="off" required  /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option14" id="option14" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>

                     
                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">15.	Is your child able to identify possible missing items from a picture shown?    </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option15" id="option15" value = 'yes' autoComplete="off" required  /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option15" id="option15" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>

                     
                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">16.	Is your child able to follow two-part directions correctly?  </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option16" id="option16" value = 'yes' autoComplete="off" required  /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option16" id="option16" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>

                     
                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">17.	Is your child able to fix 6-10-piece puzzles?  </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option17" id="option17" value = 'yes' autoComplete="off" required   /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option17" id="option17" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">18.	Is your child able to sort given objects into two categories 
                                based on shape, color, or other attributes?   </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option18" id="option18" value = 'yes' autoComplete="off" required  /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option18" id="option18" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="row questions">
                            <div className="col-md-9 question-box">
                                <p className="question">19.	Does your child play make-believe with dolls, 
                                toys, and people? </p>
                            </div>
                            <div className="col-md-3">
                                <div className="btn-group btn-group-toggle space-radio" data-toggle="buttons">
                                    <label className="custom-choice btn btn-secondary ">
                                    <input type="radio" name="option19" id="option19" value = 'yes' autoComplete="off" required  /> Yes
                                    </label>
                                    
                                    <label className="custom-choice btn btn-secondary">
                                    <input type="radio" name="option19" id="option19" value = 'no' autoComplete="off" required /> No
                                    </label>
                                </div>
                            </div>
                        </div>
                       

                     

                       
                        <br/>
                            <br/>
                            <br/>
                        <div className="col-12 step-control">
                                <button onClick = {handleReturn} className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">Previous
                                </button>
                                <button type="submit" value="Submit" className="btn btn-primary deepblue curvebtn my-2 my-sm-0 colorf">Submit
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