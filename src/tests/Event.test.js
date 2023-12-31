/* eslint-disable testing-library/prefer-find-by */
  import Event from "../components/Event";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

  const event = {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google",
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
      expect(screen.queryByText(event.description)).not.toBeInTheDocument();
    });

    test('when show button is clicked, display events details', async () => {
  render(<Event event={event} />);
  userEvent.click(screen.getByText('Show Details'));
  await waitFor(() => expect(screen.getByText(event.description)).toBeInTheDocument());
});

    test('hide the details, when hide button clicked', () => {
    render(<Event event={event}/>)
      const showDetailsButton = screen.queryByText('Show Details'); 
      userEvent.click(showDetailsButton);
      const hideDetailsButton = screen.queryByText('Hide Details');
      userEvent.click(hideDetailsButton);
    const detailsElement = screen.queryByText(event.description);
      expect(detailsElement).not.toBeInTheDocument();
  })

  })