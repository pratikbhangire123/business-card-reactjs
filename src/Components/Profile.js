import React from 'react';
import Profilephoto from '../Images/profile-photo.jpg'
import "./style.css"


export default function Profile() {
  return (
    <div className='Profile'>
        <img src={Profilephoto} alt= "profile_photo" height="300px" width="300px"/>
        <h3>Matt Smith</h3>
        <h5>Front-End Developer</h5>
        <h6>mattsmith.website</h6>
        <button class="fa fa-inbox">&nbsp;&nbsp;Email</button>
    </div>
  )
}
