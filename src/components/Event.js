        import { useState } from "react";

        const Event = ({event}) => {
          const [showDetails,setShowDetails] = useState(false)
          const handleClick =()=>{
              setShowDetails(!showDetails)
            }
          
        return (
            <li className="event-container">
            <div>
              <h5>{event.summary}</h5>
              <h5>{event.location}</h5>
              <h5>{event.created}</h5>
              <button  className="details-button" onClick={handleClick}>{showDetails ? 'Hide Details': 'Show Details'}</button>
              {showDetails && event &&(
                <div className="details-event">{event.description}</div>
              )}
          </div>  
          </li>  
        );
          }
          
          
  export default Event;