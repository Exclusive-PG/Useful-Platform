import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import s from './../../styles/Movies/movies-styles.module.scss'
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

const API_MOVIES = 'fc39a892f25b419d4c6ac17f382862a0';

// get image films
//https://image.tmdb.org/t/p/w185/zMcEalkxEiRjvmijliLBk0sYern.jpg

interface IImageSlider{
    image : string
}


const Movies = () => {


const [pageTopMovie,setTopMovie] = useState(1);

const[sliderPage,setSliderPage] = useState<number>(1);

const [moviesTop,setMoviesTop] = useState<IImageSlider[]>([]);

let images:Array<IImageSlider> = []

const getTopMovie = ()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_MOVIES}&language=ru-RU&page=${pageTopMovie}`)
    .then((response:any)=>{
        console.log(response);
        const {data} = response;
        
    

        setMoviesTop(data.results);



        console.log("DATA : " +  response.data.results)
        console.log(moviesTop);
    })
    .catch((error:Error)=> console.log(error.message));
}





useEffect(()=>{

getTopMovie()


},[])





    return(
        <section >
            <div className={s.toolbar + ' ' + s.wrapperMovie}>ToolBAR</div>
            {moviesTop.map((img:any,index:any)=>(
                index === sliderPage ?  <img src = {"https://image.tmdb.org/t/p/w1280" + img.backdrop_path} className = {s.imageTopSlider}></img> : ""
               
            ))}
            <div className = {s.wrapperMovie}>

      
      <Button
        variant="contained"
        color="secondary"
        onClick = {()=>setSliderPage(sliderPage - 1)}
        startIcon={<DeleteIcon />}
      >
        Prev
      </Button>
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Button
        variant="contained"
        color="primary"
        onClick = {()=>setSliderPage(sliderPage + 1)}
        startIcon={<DeleteIcon />}
      >
        Next
      </Button>


            </div>
        </section>
    );
}

export default Movies;

