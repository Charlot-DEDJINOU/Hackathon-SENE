import React from 'react';
import img from '../../assets/ewaste.png'
import "./Notification.css"
import { useState } from 'react';

const Notification = (props) => {

  const [lu , setLu] = useState(props.lu)
  return (
    <div className={`container-notification ${!lu ? 'notification-noread' : ''}`} onClick={() => setLu(true)}>
      <img src={img} alt="Notification" className="notification-image" />
      <div className="notification-content">{props.notification}</div>
    </div>
  );
};


export default Notification;
