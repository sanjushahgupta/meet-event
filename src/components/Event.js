const Event = ({event}) => {
    return (
     <div>
      <h5>{event.summary}</h5>
      <h5>{event.location}</h5>
      <h5>{event.created}</h5>
</div>    
);
  }
  
  export default Event;