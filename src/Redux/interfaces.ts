import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core';
import { GOOGLE_LOGIN_DATA } from './types';




export interface dashBoard {
    id : number,
    name : string,
    url : OverridableComponent<SvgIconTypeMap<{}, "svg">> | string,
    isMain : boolean,
    action : string
}

export interface IGoogleLoginData{
    userName : string ,
    urlImage : string  , 
    SignedTime : string , 
    isLocalStorage : boolean
}


export interface IGoogleLogin{
    googleLogin : IGoogleLoginData
}


export interface WrapperDash
{
    mainDash : Array<dashBoard>;
}

export interface IGoogleLoginAC {
    type : typeof GOOGLE_LOGIN_DATA,
    googleLogin : IGoogleLoginData
}
