import EventList from './components/EventList';
import CitySearch from './components/CitySearch'
import NumberOfEvents from './components/NumberOfEvents'
import { useState, useEffect} from 'react';
import { getEvents, extractLocations } from './api';
import { InfoAlert } from './components/alert'
import { ErrorAlert } from './components/alert'
import { WarningAlert } from './components/alert';
import CityEventsChart from './components/CityEventsChart'
import EventGenresChart from './components/EventGenresChart'
 
import './App.css';

function App() {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [alertInfo, setAlertInfo] = useState("") 
  const [errorAlert, setErrorAlert] = useState("")
  const [warningAlert, setWarningAlert] = useState("")

  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert('');
    } else {
      setWarningAlert('Oops! No internet connection')
      setErrorAlert('')
      setAlertInfo('')
    }
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
      <div className='app-intro'>Meet Event</div>
        <div className="alerts-container">
          {alertInfo.length ? <InfoAlert text={alertInfo} /> : null}
          {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
          {warningAlert.length ? <WarningAlert text={warningAlert}/> : null }
   
    <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setAlertInfo={setAlertInfo}  />
    <NumberOfEvents  setCurrentNOE={setCurrentNOE} setErrorAlert = {setErrorAlert} />
      </div>
      <div className='charts-container'>
        <EventGenresChart events={events } />
        <CityEventsChart allLocations={allLocations} events={events} />
        </div>
        </div>
      <EventList events={events.slice(0, currentNOE)} />
  </div>
  );    
}

export default App;
