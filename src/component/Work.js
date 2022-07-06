import React from "react";



const Work=( {work, Discard})=>{

    const startDate=new Date(work.startDate).toLocaleDateString();
    const endDate= new Date(work.endDate).toLocaleDateString()
     return(
         <div className="results">
             <div 
                 onClick={()=>{Discard(work.id)}}
 
 
             className='close'></div>
             <div className='showdate'>
                 <p>From {startDate}</p>
                 <p>to {endDate}</p>
             </div>
             <h4> Position: {work.title}</h4>
             <p>Duty Summary: {work.text}</p>
         </div>
     )
 }

export default Work;