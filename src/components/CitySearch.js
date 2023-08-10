  import { useState, useEffect } from "react";

    const CitySearch = ({ allLocations, setCurrentCity, setAlertInfo }) => {
      const [showSuggestions, setShowSuggestions] = useState(false);
      const [query, setQuery] = useState("");
      const [suggestions, setSuggestions] = useState([]);

      useEffect(() => {
        setSuggestions(allLocations);
      }, [allLocations]);

      const handleInputChanged = (event) => {
        const value = event.target.value;
        const filteredLocations = allLocations ? allLocations.filter((location) => {
          return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        }) : [];

        setQuery(value);
        setSuggestions(filteredLocations);
        let infoText;
        if (filteredLocations.length === 0) {
          infoText ="Sorry, We can not find the city you are looking for. Please try another city"
        } else {
          infoText = ""
        }
        setAlertInfo(infoText);
        
      };

      const handleItemClicked = (event) => {
        const value = event.target.textContent;

        setQuery(value);
        setShowSuggestions(false);
        setCurrentCity(value);
        setAlertInfo("")
      };

      return (
       
        <div id="city-search">
          <label htmlFor="city">City: 
          <input
            type="text"
            id="city"
            placeholder="Search for a city"
            value={query}
            onFocus={() => setShowSuggestions(true)}
            onChange={handleInputChanged}
          />
        </label>

          {showSuggestions ?
            <ul className="suggestions">
              {suggestions.map((suggestion) => {
                return <li onClick={handleItemClicked} key={suggestion}>{suggestion}</li>
              })}
              <li key='See all cities' onClick={handleItemClicked}>
                <b>See all cities</b>
              </li>
            </ul>
            : null
          }
        </div>
      )
    }

    export default CitySearch;