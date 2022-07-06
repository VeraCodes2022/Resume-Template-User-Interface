import React from "react";



const Education=( {education, Discard})=>{

    const startDate=new Date(education.startDate).toLocaleDateString();
    const endDate= new Date(education.endDate).toLocaleDateString()
     return(
         <div className="results">
             <div 
                 onClick={()=>{Discard(education.id)}}
             className='close'></div>
             <div className='showdate'>
                 <p>From {startDate}</p>
                 <p>to {endDate}</p>
             </div>
             <h4> Major: {education.title}</h4>
             <p>Educational Institution: {education.text}</p>
             
           
         </div>
     )
 }

export default Education;