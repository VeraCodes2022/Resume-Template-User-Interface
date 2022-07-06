import React,{useState,useEffect} from "react";
import { nanoid } from "nanoid";
import ProfileInfo from "./ProfileInfo";

const Profile=()=>{
    const [infos,setInfos]=useState([]);
    const [name,setName]=useState("");
    const [title,setTitle]=useState("");
    const [address,setAddress]=useState("");
    const [tele,setTele]=useState("");
    const [email,setEmail]=useState("");
    const form=document.querySelector(".profile-module");
    useEffect(
        ()=>{
            const infosData=JSON.parse(localStorage.getItem("infos"));
            if(infosData){ setInfos(infosData)}
        },[]
    )
    useEffect(
        ()=>{
            localStorage.setItem("infos", JSON.stringify(infos))
        },[infos]
    )

    const AddInfos=(e)=>{
        e.preventDefault()
        setInfos([...infos,{name,title,address,tele,email}]);
        setName("");
        setTitle("");
        setAddress("");
        setTele("");
        setEmail("");
    }
    const Discard=(id)=>{
        setInfos(infos.filter(info=>info.id !==id))
    }

    const ShowForm=()=>{
        form.classList.remove('hide')
    }
    const HideForm=()=>{
        form.classList.add("hide")
    }

    return(
        <div className='block'>
            <div className='add-work'>
                <h3>PROFILE</h3>
                <p 
                onClick={ShowForm}
                className='add-icon'></p>
               
            </div>
         
            {
                infos.map(
                    info=>{return <ProfileInfo key={info.id=nanoid()} info={info} Discard={Discard}/>}
                )
            }
            <form 
                onSubmit={AddInfos}
                className="profile-module hide">
                <p 
                onClick={HideForm}
                className='close-btn'></p>
                <div className="major">
                    <label>Name</label>
                    <input 
                        value={name}
                        onChange={
                            e=>{setName(e.target.value)}
                    }
                    />
                </div>
                <div className="major">
                    <label>Title</label>
                    <input 
                        value={title}
                        onChange={
                            e=>{setTitle(e.target.value)}
                    }
                    />
                </div>
                <div className="major">
                    <label>Address</label>
                    <input 
                        value={address}
                        onChange={
                            e=>{setAddress(e.target.value)}
                    }
                    />
                </div>
                <div className="major">
                    <label>Tele</label>
                    <input 
                        value={tele}
                        onChange={
                            e=>{setTele(e.target.value)}
                    }
                    />
                </div>
                <div className="major">
                    <label>Email</label>
                    <input 
                        value={email}
                        onChange={
                            e=>{setEmail(e.target.value)}
                    }
                    />
                </div>
                <button className='add-btn'>Add</button>

            </form>
      
      </div>
    )
}

export default Profile;
