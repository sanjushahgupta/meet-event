import EventList from './components/EventList';
import CitySearch from './components/CitySearch'
import NumberOfEvents from './components/NumberOfEvents'
import { useState, useEffect} from 'react';
import { getEvents, extractLocations} from './api';

import './App.css';

function App() {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
   try{ const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)

    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }catch (error) {
  console.error('Error fetching events:', error);
}

} 

  return (
    <div className="App">
      
    <div className="Container">
    <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
    <NumberOfEvents  setCurrentNOE={setCurrentNOE} />
    </div>

    <EventList events={events.slice(0, currentNOE)}/>
  </div>
  );    
}

export default App;
