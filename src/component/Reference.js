import React,{useState,useEffect}from 'react';
import { nanoid } from 'nanoid';


const Reference=()=>{
    const [referInfos,setReferInfos]=useState([]);
    const [referName,setReferName]=useState("");
    const [referTele,setReferTele]=useState("");
    const [referEmail,setReferEmail]=useState("");
    const form=document.querySelector('.refer-module');

    useEffect(
        ()=>{
            const referData=JSON.parse(localStorage.getItem('referInfos'));
            if(referData){
                setReferInfos(referData)
            }
        },[]
    )
    useEffect(
        ()=>{localStorage.setItem("referInfos", JSON.stringify(referInfos))},[referInfos]
    )

    const AddReference=(e)=>{
        e.preventDefault();
        setReferInfos([...referInfos,{referName,referTele,referEmail}]);
        setReferName("");
        setReferTele("");
        setReferEmail("");
    }
    const HideForm=()=>{
        form.classList.add("hide")
    }
    const ShowForm=()=>{
        form.classList.remove("hide")
    }

    const Discard=(id)=>{
        setReferInfos(referInfos.filter(referInfo=>referInfo.id !==id))
    }



    return(
        <div className="block common">
            <div className='add-work'>
                <h3>RECOMMENDER</h3>
                <p 
                onClick={ShowForm}
                className='add-icon'></p>
            </div>
            {
                referInfos.map(
                    referInfo=>{return<ReferenceInfo
                        key={referInfo.id=nanoid()} 
                        referInfo={referInfo}
                        Discard={Discard}
                        />}
                )
            }
            <form 
               className='refer-module hide'
               onSubmit={AddReference}>
                <p 
                onClick={HideForm}
                className='close-btn'>
                </p>
            <div className='refer'>
                <div className='unit'>
                    <label>Recommender Name</label>
                    <input 
                        value={referName}
                        onChange={
                            (e)=>{setReferName(e.target.value)}
                        }
                    />
                </div>
                <div className='unit'>
                    <label>Recommender Tele</label>
                    <input 
                        value={referTele}
                        onChange={
                            (e)=>{setReferTele(e.target.value)}
                        }
                    />
                </div>
                <div className='unit'>
                    <label>Recommender Email</label>
                    <input 
                    value={referEmail}
                    onChange={
                        (e)=>{setReferEmail(e.target.value)}
                    }
                    />
                </div>
                <button className='add-btn'>Add</button>
            </div>
          </form>
        </div>
    )
}


const ReferenceInfo=({referInfo,Discard})=>{
    return(
    <div className='results'>
         <div 
            onClick={()=>{Discard(referInfo.id)} }
             className='close'>
         </div>
        <div>
            <p>Name:{referInfo.referName}</p>
            <p>Tele:{referInfo.referTele}</p>
            <p>Email: {referInfo.referEmail}</p>
        </div>
    </div>
    )
}

export default Reference