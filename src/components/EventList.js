    import Event from "./Event"
    const EventList = ({ events = [] }) => {
      return (
        <ul id="event-list">
          {events.map(event => <Event key={event.id} event={event} />)}
        </ul>
      );
     }
  export default EventList;
  //new test that checks if EventList contains an element that has the role "list".