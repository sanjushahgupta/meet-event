import { useState } from "react";

const Event = ({event}) => {
  const [showDetails,setShowDetails] = useState(false)
  const handleClick =()=>{
  setShowDetails(!showDetails)
  }
    return (
     <div>
      <h5>{event.summary}</h5>
      <h5>{event.location}</h5>
      <h5>{event.created}</h5>
      <button onClick={handleClick}>{showDetails ? 'Hide Details': 'Show Details'}</button>
      {showDetails &&(
        <h2>Event Details</h2>
      )}
  </div>    
);
  }
  
  export default Event;