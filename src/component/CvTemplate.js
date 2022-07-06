import React from 'react';
import Profile from './Profile'
import WorkEx from './WorkEx';
import EducationExperience from './EducationEx';
import OhterSkills from './OtherSkills';
import Reference from './Reference';
import '../App.css';

const CvTemplate=()=>{
    return(
        <div className='right'>
          <Profile/>
          <hr/>
          <WorkEx/>
          <hr/>
          <EducationExperience/>
          <hr/>
          <OhterSkills/>
          <hr/>
          <Reference/>
      </div>
    )
}

export default CvTemplate;
