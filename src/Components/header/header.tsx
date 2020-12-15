import React, { useState, useEffect } from 'react';
import  './../../styles/main_header.scss';
import {Person , Mic} from '@material-ui/icons';
import {GoogleLogin, GoogleLoginResponse} from 'react-google-login';
import { ClientID } from './../../api/api';
import { PropsHeader } from './headerC';
import { IGoogleLoginData } from '../../Redux/interfaces';






const Header:React.FC<PropsHeader> = ({googleLogin,GoogleAC}) =>{

debugger
    //hook get date //DATE
    const [date , setDate] = useState<string>("00:00");

    const getDate = ():string =>{
    
        let date:Date = new Date();
        let hours :string | number = date.getHours();
        let minutes :string | number = date.getMinutes();
      
      
         hours = (hours < 10) ?  `0${hours}` : hours;
         minutes =  (minutes < 10) ?  `0${minutes}` : minutes;
      
        return `${hours}:${minutes}`;
      }


      useEffect(()=>{
        const interval =  setInterval(()=>{
             setDate(getDate);
         },1000);
         return () => clearInterval(interval);
     },[]);


/// Load Google Account from LocalStorage
     useEffect(()=>{
         
if(localStorage.getItem("SESSION_DATA")){

    let data:IGoogleLoginData = JSON.parse(localStorage.getItem("SESSION_DATA")!);
    
    GoogleAC(data);
    
    }   
     },[])

////End Date ------------------------------------


///Google Login

const responseGoogle =(response : GoogleLoginResponse) : void  =>{

    console.log(response.getBasicProfile().getEmail());
    const {name , imageUrl} = response.profileObj;
    
    

/////  dispatch data Google Login ///

    GoogleAC({
       userName: name,urlImage : imageUrl,SignedTime : Date.now().toString(),isLocalStorage : true
    });

   

    console.log(response);
    console.log(`Sign in account : ${getDate()}`);
}




    return(
        <header className = "main__screen_header">

        <div className="left_block">
       
        <GoogleLogin clientId = {ClientID} onSuccess= {responseGoogle} onFailure = {responseGoogle} />
        
        <div className="data-user">
        <div className="nickname_user">{googleLogin.userName}</div>
        <div >{googleLogin.urlImage ? <img className="image_user" src = {googleLogin.urlImage} ></img> : <Person style = {{fontSize : 40,color:"primary"}}/> }</div>
        </div>


     </div>  
            

        <div className="right_block">
        <div className="date_now_user">{date}</div>
        <div className="microphone_search"><Mic style = {{fontSize : 30,color:"primary"}} /></div>
        </div>
        </header>
    );
}

export default Header;