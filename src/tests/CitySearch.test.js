/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-node-access */
    /* eslint-disable testing-library/prefer-screen-queries */
      import { render, screen, within } from '@testing-library/react';
      import CitySearch from '../components/CitySearch';
      import userEvent from '@testing-library/user-event';
      import { extractLocations, getEvents } from '../api';
      import App from '../App';

      describe('<CitySearch/> component',()=>{
        let CitySearchComponent;
        beforeEach(() => {
          CitySearchComponent = render(<CitySearch allLocations={[]}/>);
        });
        test ('renders text input', ()=>{
          const cityTextBox = screen.queryByRole('textbox');
          expect(cityTextBox).toBeInTheDocument();
          expect(cityTextBox).toHaveClass('city');
      })

      test ('suggestions list is hidden by default', ()=>{
          const suggestionList = screen.queryByRole('list');
          expect(suggestionList).not.toBeInTheDocument();
      })

      test('renders a list of suggestions when city textbox gains focus', async () => {
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
        
          const cityTextBox = CitySearchComponent.queryByRole('textbox');
        
          await user.type(cityTextBox, 'Berlin');
        
         
          CitySearchComponent.rerender(<CitySearch allLocations={allLocations} />);
          const newCityTextBox = CitySearchComponent.queryByRole('textbox');
        
          await user.type(newCityTextBox, 'Berlin');
        
          const suggestions = allLocations
            ? allLocations.filter(
                (location) =>
                  location.toUpperCase().indexOf(newCityTextBox.value.toUpperCase()) > -1
              )
            : [];
        
          const suggestionListItems = CitySearchComponent.queryAllByRole('listitem');
          expect(suggestionListItems).toHaveLength(suggestions.length + 1);
          for (let i = 0; i < suggestions.length; i += 1) {
            expect(suggestionListItems[i].textContent).toBe(suggestions[i]);
          }
        });
        


      test('renders the suggestion text in the textbox upon clicking on the suggestion', async () => {
            const user = userEvent.setup();
            const allEvents = await getEvents(); 
            const allLocations = extractLocations(allEvents);
            CitySearchComponent.rerender(<CitySearch allLocations={allLocations} />);

            const cityTextBox = CitySearchComponent.queryByRole('textbox');
            await user.type(cityTextBox, "Berlin");

            const BerlinGermanySuggestion = CitySearchComponent.queryAllByRole('listitem')[0];
            await user.click(BerlinGermanySuggestion);

            expect(cityTextBox).toHaveValue(BerlinGermanySuggestion.textContent);
          });
      })


      describe('<CitySearch /> integration', () => {
        let CitySearchComponent;
        beforeEach(() => {
          CitySearchComponent = render(<CitySearch allLocations={[]}/>);
        });
        test('renders suggestions list when the app is rendered.', async () => {
          const user = userEvent.setup();
          const AppComponent = render(<App />);
          const AppDOM = AppComponent.container.firstChild;
      
          const CitySearchDOM = AppDOM.querySelector('#city-search');
          const cityTextBox = within(CitySearchDOM).queryByRole('textbox');
          await user.click(cityTextBox);
      
          const allEvents = await getEvents();
          const allLocations = extractLocations(allEvents);
      
          const suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem');
          expect(suggestionListItems.length).toBe(allLocations.length + 1);
       });
      });
