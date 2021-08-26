import React, { useState, useEffect } from "react"
import s from "./../../styles/Radio/radio.module.css"
import { AppState } from "../../Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { RadioStation } from "../../Redux/interfaces";
import { Adjust } from "@material-ui/icons";
import { Prompt } from "react-router-dom";
import { playNowAC } from './../../Redux/reducerRadio';
import UseAnimations from 'react-useanimations';
import playPause from 'react-useanimations/lib/playPauseCircle'
import volume from 'react-useanimations/lib/volume'


const audio : HTMLAudioElement = new Audio();


//let srcRadio:string = ""; 
    


const tooglePlay = (src:string,data:RadioStation) : void =>{

    if(audio.src !== src)  {
       // audio.pause()
       // srcRadio = src;
        audio.src = src;
        audio.play();
    
    }
    else{


        audio.paused ? audio.play() : audio.pause();

        console.log(audio.paused)
 
 }
 
 
}
const RadioApp:React.FC = () => {


    const [statusPlaying,setStatusPlaying] = useState<boolean>(false);

    const [statusVolume,setVolume] = useState<boolean>(false);

    const {data,playNow} = useSelector ((state:AppState) => state.reducerRadio)

    const dispatch = useDispatch();

    const changePlayNow = (data:RadioStation) : void =>{
        dispatch(playNowAC(data))
    }



const ToogleVolume = () : void => {
    setVolume(!statusVolume);
    
    if(!statusVolume){
        audio.volume = 0
    }else audio.volume = 1
}




    const stopOrPauseAudio  = () : Promise<void>|void => {
        if(playNow.stream === "") return;
        
        
        if(audio.paused){
            audio.play();
            setStatusPlaying(!statusPlaying)
        }
        else{
            audio.pause();
            setStatusPlaying(!statusPlaying)
        }
    }
    return(
        <main className ={s.wrapper_radio}>
            <h1>Radio</h1>
      <section className = {s.flex_separate}>
            <div className={s.main_grid}>{data.map((item:RadioStation,key:number)=>
            <div key={key} className = {s.grid_elem_station} style = {{background : item.style.background}} onClick = {()=>{ tooglePlay(item.stream,item); changePlayNow(item)}}>
                <div className = {s.grid_elem_inner}><i className="fab fa-napster fa-3x"></i></div>
                {/* <div className ={s.btn_play} onClick = {()=>{ tooglePlay(item.stream)}}>PLAY</div> */}
            </div>
            
            )        
}
    </div>
    <div>
<div>{playNow.name !== "" ? (
!audio.paused  ? `${playNow.name} is playing now ...` : `${playNow.name} is paused  ...`) : "Radio not selected"}


</div>{playNow.stream !== "" &&
<>
    <div><span ><UseAnimations reverse = {statusPlaying} size = {80} className ={s.btn_play} animation = {playPause} onClick = {stopOrPauseAudio}/></span></div>
    <div className=""><span><UseAnimations reverse = {statusVolume} size = {80}  animation = {volume} onClick = {ToogleVolume}/></span></div>
</>
}
    </div>
    </section>

        {/* <Prompt message = {audio.pause}/> */}
        </main>

    );
}

export default RadioApp;