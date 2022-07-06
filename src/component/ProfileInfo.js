import React from "react"


const ProfileInfo=({info,Discard})=>{
   
    return(
        <div className="results">
            <div 
                onClick={()=>{Discard(info.id)}}
                className='close'>
            </div>
            <div  className="header"> 
                <div className="name">
                    <h2>{info.name}</h2>
                    <p>{info.title}</p>
                </div>
                <div className="address">
                    <p>Address: {info.address}</p>
                    <p>Tele: {info.tele}</p>
                    <p>Email: {info.email}</p>
                </div>
        
            </div>
        </div>
 
    )
}

export default ProfileInfo;