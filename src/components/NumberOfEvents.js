  import { useState } from "react";

  const NumberOfEvents = () => {
    const [eventsCount, setEventsCount] = useState('32');
    const handleInputChange = (event) => {
      const inputValue = event.target.value;
      setEventsCount(inputValue);
    };

    return (
      <div id="number-of-events">
        <input
          type="text"
          className="textbox"
          value={eventsCount}
          onChange={handleInputChange}
        />
      </div>
    );
  };

  export default NumberOfEvents;
