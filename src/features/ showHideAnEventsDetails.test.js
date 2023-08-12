        /* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within, screen} from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
        
import App from '../App';

    const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');
        
    defineFeature(feature, test => {
        test('Event details are hidden by default.', ({given, when, then})=>{
            let AppComponent;
            let EventListDOM;
            let AppDOM;
            let EventListItems

            given('the user has opened the app.',()=>{
                AppComponent = render(<App/>)
            });

            when('the list of upcoming events is displayed.',async()=>{
                 AppDOM = AppComponent.container.firstChild;
                EventListDOM = AppDOM.querySelector('#event-list');
                    await waitFor(() => {
                        EventListItems = within(EventListDOM).queryAllByRole('listitem');
                        expect(EventListItems.length).toBe(32);
                    });
                })

            then('each event details should be hidden, and only the basic information about each events should be shown.',()=>{
                    EventListItems.forEach((eventElement) => {
                    const basicDetails = within(eventElement).getByText('Show Details');
                    expect(basicDetails).toBeInTheDocument();
                    expect(screen.queryByText('Event Details')).not.toBeInTheDocument(); 
                });
            })
        })

        test('User can expand an event to see details.', ({given, when, then})=>{
            let AppComponent
            let AppDOM
            let EventListDOM
            let EventListItems
            given('the user has opened the app and the list of upcoming events is displayed.',async()=>{
                AppComponent = render(<App/>)
                AppDOM = AppComponent.container.firstChild;
                EventListDOM = AppDOM.querySelector('#event-list');
                await waitFor(() => {
                        EventListItems = within(EventListDOM).queryAllByRole('listitem');
                        expect(EventListItems.length).toBe(32);
                    });
                });

            when('the user clicks on a "show details" button for a specific event.',() => {
                const showButton = within(EventListItems[0]).getByText('Show Details');
                    fireEvent.click(showButton);
                })
        
            then('the details of the desired event should be shown by expanding the event.', () => {
                const eventListItem = EventListItems[0];
                const showEventDetails = eventListItem.querySelector('.details-event');
                    expect(showEventDetails).toBeInTheDocument();
                })
            })

        test('User can collapse an event to hide details.', ({given, when, then})=>{
            let AppComponent
            let showEventDetails
            let AppDOM
            let EventListDOM
            let EventListItems

            given('the user has opened the app and the details of the first event are shown.',async ()=>{ AppComponent = render(<App/>)
                    AppComponent = render(<App/>)
                    AppDOM = AppComponent.container.firstChild;
                    EventListDOM = AppDOM.querySelector('#event-list');
                    await waitFor(() => {
                        EventListItems = within(EventListDOM).queryAllByRole('listitem');
                        expect(EventListItems.length).toBe(32);
                    });
                    const showButton = within(EventListItems[0]).getByText('Show Details');
                fireEvent.click(showButton);
                
             });
            
            when ('the user clicks on the "hide details" button for the first event.',()=>{
                const HideBtn = within(EventListItems[0]).getByText('Hide Details');
                    fireEvent.click(HideBtn)
            })

            then('the event details should collapse, hiding the additional details about the event.', () => {
                 const showEventDetails = EventListItems[0].querySelector('.details-event');
                    expect(showEventDetails).not.toBeInTheDocument();
            })
         })
        })