
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { useHistory } from "react-router-dom";
import Homepage from './Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Login() {
  let history = useHistory();
    const responseGoogle = (response) => {
        console.log(response);
        if(!response.error){
          console.log("signed in")
          localStorage.setItem("token", response);
          history.push("/home");
        }
      }
    return (
        <div>
          
            <GoogleLogin className="google"
    clientId="554478903659-8pkmugc41f53uqsi3f1odjlh7jj13fne.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  <h2>Sign in using google to enter</h2>
  
   
   
 

            
        </div>
    )
}
