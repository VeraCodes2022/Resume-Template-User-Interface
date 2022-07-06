import React, { useState,useEffect} from 'react';
import { nanoid } from 'nanoid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Work from './Work';


const WorkExperience=(props)=>{
    const [works,setWorks]=useState([])
    const [startDate,setStartDate]=useState("")
    const [endDate,setEndDate]=useState("")
    const [title,setTitle]=useState("")
    const [text,setText]=useState("")
    const form=document.querySelector(".work-module")
 

    const AddWorkEx=(e)=>{
        e.preventDefault()
        startDate&&endDate&&title&&text&&setWorks([...works,{startDate,endDate,title,text}]);
        setStartDate("")
        setEndDate("")
        setTitle("")
        setText("")
    }
    useEffect(()=>{
            const workData=JSON.parse(localStorage.getItem("works"));
            if(workData){setWorks(workData)}},[])
    useEffect(()=>{localStorage.setItem("works",JSON.stringify(works))},[works])

   const Discard=(id)=>{
       setWorks(works.filter(work=>work.id !==id))
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
                <h3>WORKING EXPERIENCE</h3>
                <p 
                onClick={ShowForm}
                className='add-icon'></p>
            </div>
          
            {
               works && works.map(
                    (work)=>{return <Work key={work.id=nanoid()} work={work} Discard={Discard}/>}
                )
            }
        
         <form className='work-module hide'
                onSubmit={AddWorkEx}>
                <p  onClick={HideForm}
                className='close-btn'></p>
                <div className='date'>
                    <p >Start Date</p>  
                     <DatePicker
                        selected={startDate}
                        value={startDate}
                        onChange={date=>setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                        showYearDropdown
                        scrollableMonthYearDropdown
                    />
                </div>
                <div className='date'>
                     <p >End Date</p> 
                     <DatePicker
                    selected={endDate}
                    value={endDate}
                    onChange={date=>setEndDate(date)}
                    dateFormat="dd/MM/yyyy"
                    showYearDropdown
                    scrollableMonthYearDropdown
                    />
                </div>     
                <p>Position</p>
                <input value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                />
                <p>Job Description</p>
                <textarea 
                value={text}
                onChange={(e)=>{setText(e.target.value)}}
                className='description'>
                </textarea>
                <button className='add-btn'>Add</button>
            </form>
        </div>
    )
}
export default WorkExperience; 