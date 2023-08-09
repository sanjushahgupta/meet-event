    import { useState } from "react";

    const NumberOfEvents = ({setCurrentNOE , setErrorAlert}) => {
      const [number, setNumber] = useState(32);

      const handleInputChanged = (event) => {
        const value = event.target.value;
        setNumber(value);
      
        if (value && isNaN(value) || value && value <= 0) {
          setErrorAlert("Invalid input. Please enter a valid number greater than 0.")
        } else {
          setErrorAlert("")
          setCurrentNOE(value);
        }
      }
      
      return (
        <div id="number-of-events">
          <label htmlFor="number-of-events-input">Number of Events: </label>
          <input
            type="text"
            id="number-of-events-input"
            className="number-of-events-input"
            value={number}
            onChange={handleInputChanged}
          />
        </div>
      );
    }

    export default NumberOfEvents;