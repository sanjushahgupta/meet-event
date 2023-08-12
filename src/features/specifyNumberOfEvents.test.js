/* eslint-disable testing-library/no-node-access */
import { loadFeature, defineFeature} from "jest-cucumber";
import {render, waitFor, within} from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');
let AppComponent

defineFeature(feature, test => {
    test('When user hasn\'t specified a number, 32 is the default number', ({given, when,then}) => {
        given('the main page is open', () => {
            AppComponent = render(< App />);
        });

        let NumberOfEventsDOM
        let NOEInput
        when('the user  hasn’t specified the number of events to be displayed', () => {
            const AppDOM = AppComponent.container.firstChild;
            NumberOfEventsDOM = AppDOM.querySelector('#number-of-events')
            NOEInput = within(NumberOfEventsDOM).queryByRole('textbox');
        });

        then('the default number should be 32', () => {
            expect(parseInt(NOEInput.value, 10)).toBe(32);
        });
    });
       
    test('User can change the number of events', ({ given, when, then }) => {
        given('the main page is open', () => {
                AppComponent = render(<App />);
        });
        
        let AppDOM
        when('the user specifies the number of events to be displayed', async() => {
                AppDOM = AppComponent.container.firstChild;
               let  NumberOfEventsDOM = AppDOM.querySelector('#number-of-events')
               let NOEInput = within(NumberOfEventsDOM).queryByRole('textbox');
                await userEvent.type(NOEInput, "{backspace}{backspace}5");
                expect(NOEInput.value).toBe("5");
        });

        let EventListItems
        then('the user should be able to see events equal to the given number', async() => {
                const EventListDom = AppDOM.querySelector('#event-list')
                await waitFor(() => {
                    EventListItems = within(EventListDom).queryAllByRole('listitem');
                    expect(EventListItems.length).toBe(5);
                })
        });
    });
    
    })