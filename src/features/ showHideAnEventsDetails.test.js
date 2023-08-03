    /* eslint-disable testing-library/prefer-screen-queries */
    /* eslint-disable testing-library/no-node-access */
    import { loadFeature, defineFeature } from 'jest-cucumber';
    import { render, waitFor, within} from '@testing-library/react';
    import { fireEvent } from '@testing-library/react';
    import { getEvents } from '../api';
    
    import App from '../App';

    const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');
    let AppComponent;
    let EventListDOM;
    let AppDOM;
    let EventListItems
    let showEventDetails

    defineFeature(feature, test => {
        test('Event details are hidden by default.', ({given, when, then})=>{
            given('the user has opened the app.',()=>{
                AppComponent = render(<App/>)
            });

            when('the list of upcoming events is displayed.',async()=>{
                // eslint-disable-next-line testing-library/no-node-access
                AppDOM = AppComponent.container.firstChild;
                // eslint-disable-next-line testing-library/no-node-access
                EventListDOM = AppDOM.querySelector('#event-list');
                await waitFor(() => {
                    EventListItems = within(EventListDOM).queryAllByRole('listitem');
                    expect(EventListItems.length).toBe(32);
                });
            })

            then('each event details should be hidden, and only the basic information about each events should be shown.',()=>{
                EventListItems.forEach((eventElement) => {
                const details = within(eventElement).getByText('Show Details');
                expect(details).toBeInTheDocument();
            });
            })
        })

        test('User can expand an event to see details.', ({given, when, then})=>{
            given('the user has opened the app and the list of upcoming events is displayed.',async()=>{
                AppComponent = render(<App/>)
                // eslint-disable-next-line testing-library/no-node-access
                AppDOM = AppComponent.container.firstChild;
                // eslint-disable-next-line testing-library/no-node-access
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
            showEventDetails = within(EventListItems[0]).getByText('Event Details');
                expect(showEventDetails).toBeInTheDocument();
                
            })
    
        })

        test('User can collapse an event to hide details.', ({given, when, then})=>{
            given('the user has opened the app and the details of the first event are shown.',()=>{
                showEventDetails = within(EventListItems[0]).getByText('Event Details');
            });
            let HideBtn;
            when ('the user clicks on the "hide details" button for the first event.',()=>{
                HideBtn = within(EventListItems[0]).getByText('Hide Details');
                fireEvent.click(HideBtn)
            })
            then('the event details should collapse, hiding the additional details about the event.',()=>{
                showEventDetails = within(EventListItems[0]).getByText('Event Details');
                expect(showEventDetails).not.toBeInTheDocument();
                expect(HideBtn).not.toBeInTheDocument()
            })
        })

    })