import React, { useState,useEffect} from 'react';
import { nanoid } from 'nanoid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Education from './Education';


const EducationEx=()=>{
    const [educations,setEducations]=useState([]);
    const [startDate,setStartDate]=useState("");
    const [endDate,setEndDate]=useState("");
    const [title,setTitle]=useState("");
    const [text,setText]=useState("");
    const form=document.querySelector(".edu-module");
 
    const AddEducationEx=(e)=>{
        e.preventDefault()
        startDate && endDate && title && text && setEducations([...educations,{startDate,endDate,title,text}]);
        setStartDate("")
        setEndDate("")
        setTitle("")
        setText("")
    }
    useEffect(()=>{
            const educationsData=JSON.parse(localStorage.getItem("educations"));
            if(educationsData){setEducations(educationsData)}},[])
    useEffect(()=>{localStorage.setItem("educations",JSON.stringify(educations))},[educations])

   const Discard=(id)=>{
    setEducations(educations.filter(education=>education.id !==id))
   }
    const HideForm=()=>{
        form.classList.add("hide")
    }
    const ShowForm=()=>{
        form.classList.remove("hide")
    }

    return(
        <div className='block'>
            <div className='add-work'>
                <h3>EDUCATION EXPERIENCE</h3>
                <p 
                onClick={ShowForm}
                className='add-icon'></p>
            </div>
          
            {
               educations && educations.map(
                    (education)=>{return <Education key={education.id=nanoid()} education={education} Discard={Discard}/>}
                )
            }
           
         <form className='edu-module hide'
                onSubmit={AddEducationEx}>
                <p 
                onClick={HideForm}
                className='close-btn'></p>
                <div className='date'>
                     <p>Start Date</p>  
                     <DatePicker
                        selected={startDate}
                        value={startDate}
                        onChange={date=>setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                        showYearDropdown
                        scrollableMonthYearDropdown
                    />
                     <span>End Date</span> 
                     <DatePicker
                    selected={endDate}
                    value={endDate}
                    onChange={date=>setEndDate(date)}
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    scrollableMonthYearDropdown
                    />
                 
                </div>
                <div className='input-text'>
                    <div className='major'>
                        <label >Major</label>
                        <input value={title}
                        className='edu-institu'
                        onChange={(e)=>{setTitle(e.target.value)}}
                    />
                    </div>
                    <div className='major'>
                     <label>Educational Institute</label>
                     <input 
                        className='edu-institu'
                        value={text}
                        onChange={(e)=>{setText(e.target.value)}}
                    />
                       
                   </div>
                   <button className='add-btn'>Add</button>
                </div>
               
            </form>
        </div>
    )
}
export default EducationEx; 