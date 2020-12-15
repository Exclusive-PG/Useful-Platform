import {Settings} from '@material-ui/icons';
import { Reducer } from 'react';
import { WrapperDash } from './interfaces';










let initialState : WrapperDash = {
    mainDash: [
        {id:1 ,name : "Settings" , url : "" , isMain : true , action : ""},
        {id:2 ,name : "ToDo List" , url : "", isMain : false , action : ""},
        {id:3 ,name : "Course Valut",  url : "",  isMain : false , action : ""},
        {id:4 ,name : "Top Movies" , url : "",  isMain : false , action : ""},
        {id:5 ,name : "Weather" , url : "",  isMain : false , action : ""},
    ],
}

const reducerDashBoard = (state : WrapperDash = initialState , action:string )  =>{

    
       return state;
    

}

export default reducerDashBoard;