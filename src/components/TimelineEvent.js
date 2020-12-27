import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';


const TimelineEvent = (props) => {
  
  return (
    <div className = 'TimelineEvent'>
      <h6>{props.person}</h6>
      <p><Timestamp time = {props.timestamp}/></p>
      <p>{props.status}</p>
    </div>
    )
}

export default TimelineEvent;