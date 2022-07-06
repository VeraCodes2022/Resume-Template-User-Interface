import React,{useState,useEffect,useLayoutEffect} from "react"; 
import Skills from "./Skills";
import { nanoid } from "nanoid";


const OhterSkills=()=>{

 const [skills,setSkills]=useState([]);
 const [lang,setLang]=useState("");
 const [computer,setComputer]=useState("");
 const form=document.querySelector(".other-module");

 useEffect(()=>{
    const skillsData=JSON.parse(localStorage.getItem("skills"));
    if(skillsData){setSkills(skillsData)}},[])

useEffect(()=>{localStorage.setItem("skills",JSON.stringify(skills))},[skills])

    const AddSkills=(e)=>{
        e.preventDefault();
        setSkills([...skills,{lang,computer}]);
        setLang("");
        setComputer("")
    }
 
    const ShowForm=()=>{
        form.classList.remove("hide")
    }
  
    const HideForm=()=>{
        form.classList.add("hide")
    }
    const Discard=(id)=>{
        setSkills(skills.filter(skill=>skill.id !==id))
    }

    return(
        <div className='block'>
             <div className='add-work'>
                <h3>OTHER SKILLS</h3>
                <p 
                onClick={ShowForm}
                className='add-icon'></p>
            </div>
            {
                skills.map(
                    skill=>{return <Skills key={skill.id=nanoid()} skill={skill} Discard={Discard}/>}
                )
            }
            <form 
               className='other-module hide'
               onSubmit={AddSkills}          
               >
                <p 
                onClick={HideForm}
                className='close-btn'></p>
                <div className="skills">
                    <label>Computer Skills</label>
                    <textarea
                        className='description'
                        value={computer}
                        onChange={
                            (e)=>{setComputer(e.target.value)}
                        }
                    />
                </div>
                <div className="skills">
                    <label>Language Skills</label>
                    <textarea
                    className='description'
                    value={lang}
                    onChange={
                        (e)=>{setLang(e.target.value)}
                    }
                    />
                </div>
                <button className='add-btn'>Add</button>
            </form>
        </div>
    )
}
export default OhterSkills;