  import Event from "../components/Event";
  import {fireEvent, render, screen} from "@testing-library/react";

  const event = {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {
        "email": "fullstackwebdev@careerfoundry.com",
        "self": true
        },
        "organizer": {
        "email": "fullstackwebdev@careerfoundry.com",
        "self": true
        },
        "start": {
        "dateTime": "2020-05-19T16:00:00+02:00",
        "timeZone": "Europe/Berlin"
        },
        "end": {
        "dateTime": "2020-05-19T17:00:00+02:00",
        "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {
        "dateTime": "2020-05-19T16:00:00+02:00",
        "timeZone": "Europe/Berlin"
        },
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {
        "useDefault": true
        },
        "eventType": "default"
      }

  describe('<Event/> component',()=>{
    test('render event title', () => {
      render(<Event event={event}/>)
      expect(screen.getByText(event.summary)).toBeInTheDocument();
    });

    test('render event location', () => {
      render(<Event event={event}/>)
      expect(screen.getByText(event.location)).toBeInTheDocument();
    });

    test('render event start date', () => {
      render(<Event event={event}/>)
      expect(screen.getByText(event.created)).toBeInTheDocument();
    });

    test('show details button', () => {
      render(<Event event={event}/>)
      expect(screen.getByText('Show Details')).toBeInTheDocument();
    });

    test('by default, events details section should be hidden', () => {
      render(<Event event={event}/>)
      expect(screen.queryByText('Event Details')).not.toBeInTheDocument();
    });

    test('show details, when show button is clicked', () => {
      render(<Event event={event}/>)
          const showDetailsButton = screen.queryByText('Show Details'); 
          fireEvent.click(showDetailsButton); 
          const detailsElement = screen.queryByText('Event Details');
          expect(detailsElement).toBeInTheDocument();

  })

  test('hide the details, when hide button clicked', () => {
    render(<Event event={event}/>)
      const showDetailsButton = screen.queryByText('Show Details'); 
      fireEvent.click(showDetailsButton);
      const hideDetailsButton = screen.queryByText('Hide Details');
      fireEvent.click(hideDetailsButton);
      const detailsElement = screen.queryByText('Event Details');
      expect(detailsElement).not.toBeInTheDocument();
  })

  })