

import { Alert } from '@material-ui/lab';
import React, { useContext,useEffect } from "react";	
import {MyContext} from '../store/context/myContext';

 export const Header =()=>{



	const {state, dispatch} = useContext(MyContext)
	const {token, loading} = state
	
    var errorMessage = null;

    useEffect(() => {
      // if (token !== undefined && token !== null) {
      //    // props.history.push('/login/');
      // }
      if (state.error) { errorMessage = <Alert severity="error">{state.error}</Alert>};
    
      if (state.message) { errorMessage = <Alert severity="info">{state.message}</Alert>};
  
      }, [state.token, state.error, state.message]) 

	return(
    <div>
		    <meta charSet="utf-8"/>
		    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
		    <meta name="description" content="" />
		     <link rel="stylesheet" href="/../static/style.css"/>
		  
		    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
		   
		    
		    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800i&display=swap" rel="stylesheet"/>
		    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,900&display=swap" rel="stylesheet"/>
		    <link
		    rel="stylesheet"
		    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
          <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
		  
		  {errorMessage}
		  
</div>	 
 )}