import React from 'react';
import s from "./../styles/main_dashborad.module.css";
import { WrapperDash } from './../Redux/interfaces';
import { Route , Link} from "react-router-dom";




const MainDashBoard:React.FC<WrapperDash> = ({mainDash}) =>{
debugger



    return(
        <section className = {s.section_dashboard}>
            <div className={s.grid}>
                
                   {
                    mainDash.map(dash => (
                        dash.isMain === true ? 
                       <Link to = {`/${dash.name.split(' ').join('')}`} className={s.main_section} key = {dash.id}> 
                              <div className={s.main_name_section}>{dash.name}</div>
                              </Link>  
                         : 
                         <Link to = {`/${dash.name.split(' ').join('')}`} className={s.section} key = {dash.id}>
                              <div className={s.name_section}>{dash.name}</div>
                          </Link>  
                        
                    ))
                
                }
                   
            
            </div>
        </section>
    );
}
export default MainDashBoard;