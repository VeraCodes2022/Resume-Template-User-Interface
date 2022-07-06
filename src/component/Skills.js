import React from "react";

const Skills=( {skill, Discard})=>{

     return(
         <div className="results">
             <div 
                 onClick={()=>{Discard(skill.id)}}
             className='close'></div>
             <div>
                 <ul>
                 <h4>Computer Skills</h4>
                 <li>{skill.computer}</li>
                </ul>
                <ul>
                 <h4>Language Skills</h4>
                 <li>{skill.lang}</li>
                </ul>
             </div>
         </div>
     )
 }

export default Skills;