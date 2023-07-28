  /* eslint-disable testing-library/prefer-screen-queries */
    import { render, screen } from '@testing-library/react';
    import CitySearch from '../components/CitySearch';
    import userEvent from '@testing-library/user-event';
    import { extractLocations, getEvents } from '../api';

    describe('<CitySearch/> component',()=>{
      test ('renders text input', ()=>{
      render(<CitySearch/>)
        const cityTextBox = screen.queryByRole('textbox');
        expect(cityTextBox).toBeInTheDocument();
        expect(cityTextBox).toHaveClass('city');
    })

    test ('suggestions list is hidden by default', ()=>{
      render(<CitySearch />)
        const suggestionList = screen.queryByRole('list');
        expect(suggestionList).not.toBeInTheDocument();
    })

    test('renders a list of suggestions when city textbox gains focus', async () => {
      render(<CitySearch />)
        const user = userEvent.setup();
        const cityTextBox = screen.queryByRole('textbox');
        await user.click(cityTextBox);
        const suggestionList = screen.queryByRole('list');
        expect(suggestionList).toBeInTheDocument();
        expect(suggestionList).toHaveClass('suggestions');
      });

      test('updates list of suggestions correctly when user types in city textbox', async () => {
        const user = userEvent.setup();
        const allEvents = await getEvents();
        const allLocations = extractLocations(allEvents);
        const view =  render(<CitySearch />)
        view.rerender(<CitySearch allLocations={allLocations} />);

        const cityTextBox = view.queryByRole('textbox');
        await user.type(cityTextBox, "Berlin");

        const suggestions = allLocations? allLocations.filter((location) => {
          return location.toUpperCase().indexOf(cityTextBox.value.toUpperCase()) > -1;
        }): [];
        
        const suggestionListItems = view.queryAllByRole('listitem');
        expect(suggestionListItems).toHaveLength(suggestions.length + 1);
        for (let i = 0; i < suggestions.length; i += 1) {
          expect(suggestionListItems[i].textContent).toBe(suggestions[i]);
        }
      });


      test('renders the suggestion text in the textbox upon clicking on the suggestion', async () => {
        const user = userEvent.setup();
        const allEvents = await getEvents(); 
        const allLocations = extractLocations(allEvents);
        const view =  render(<CitySearch />)
        view.rerender(<CitySearch allLocations={allLocations} />);

        const cityTextBox = view.queryByRole('textbox');
        await user.type(cityTextBox, "Berlin");

        const BerlinGermanySuggestion = view.queryAllByRole('listitem')[0];
        await user.click(BerlinGermanySuggestion);

        expect(cityTextBox).toHaveValue(BerlinGermanySuggestion.textContent);
      });
    })

