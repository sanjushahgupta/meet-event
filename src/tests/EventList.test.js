/* eslint-disable testing-library/no-node-access */
/* eslint-disable no-undef */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */

import { render, within, waitFor, screen } from '@testing-library/react';
import { getEvents } from '../api';
import EventList from '../components/EventList';
import App from "../App";
 
    describe('<EventList/> component',()=>{
        test('has an element with role',()=>{
            render(<EventList />);
            expect(screen.getByRole("list")).toBeInTheDocument();
        })

        test('renders correct number of events', async () => {
            render(<EventList />);
            const allEvents = await getEvents(); 
            render(<EventList events={allEvents} />);
            await screen.findAllByRole("listitem");
            expect(screen.getAllByRole("listitem")).toHaveLength(allEvents.length);
        });
    })

    describe('<EventList /> integration', () => {
        test('renders a list of 32 events when the app is mounted and rendered', async () => {
            const AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
              const EventListItems = within(EventListDOM).queryAllByRole('listitem');
              expect(EventListItems.length).toBe(32);
            });
          });
          
});