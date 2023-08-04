  /* eslint-disable testing-library/no-node-access */
  import { render } from '@testing-library/react';
  import App from '../App';

  describe('<App /> component', () => {

    test('renders list of events', () => {
      const AppDOM = render(<App />).container.firstChild;
      expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
    });

    test('renders city search', () => {
      const AppDOM = render(<App />).container.firstChild;
      expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
    });

    test('render numbers of events', () => {
      const AppDOM = render(<App />).container.firstChild;  
      const CitySearchDOM = AppDOM.querySelector('#city-search');
    
      const CitySearchInput = within(CitySearchDOM).queryByRole('textbox');
  
      await user.type(CitySearchInput, "Berlin");
      const berlinSuggestionItem = within(CitySearchDOM).queryByText('Berlin, Germany');
      await user.click(berlinSuggestionItem);
  
      const EventListDOM = AppDOM.querySelector('#event-list');
      const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');   
  
      const allEvents = await getEvents();
      const berlinEvents = allEvents.filter(
        event => event.location === 'Berlin, Germany'
      );
  
      expect(allRenderedEventItems.length).toBe(berlinEvents.length);
      allRenderedEventItems.forEach(event => {
        expect(event.textContent).toContain("Berlin, Germany");
      });

    });

  });