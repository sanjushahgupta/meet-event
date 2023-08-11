[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript%20%26%20React-1f425f.svg)](https://www.javascript.com)
## Meet App
Meet App is a progressive web application built with React and a serverless backend using AWS which allows users to view upcoming events in cities.

## Table of contents
- [Using Serverless Function](#using-serverless-function)
- [Features](#features)
- [User Stories](#user-stories)
- [Test Scenarios](#test-scenarios)
- [Contributions](#contributions)

### Using Serverless Function

In this app, we will be using the API provided by google calendar to retrieve data about upcoming events. For that the app needs to be authorized. Here the serverless function is used for delivering authorization tokens to users which will be  hosted on AWS Lambda. The token generated by the authorization server will give the user the needed access to view event data from the Google Calendar API.

<img width="700" alt="Screenshot 2023-07-23 at 22 02 47" src="https://github.com/sanjushahgupta/meet-event/assets/71315276/52ce9d30-0729-4ccc-baea-e5d5b6c7f4fd">


### Features

- Filter Events by City.
- Show/Hide Event Details.
- Specify the Number of Events.
- Use the App When Offline.
- Add an App Shortcut to the Home Screen.
- Display Charts Visualizing Event Details.

### User stories

- As a user, I should be able to filter events by city so that I can see the upcoming events happening in a specific city
- As a user, I should be able to show/hide event details so that I can choose which event details I want to see or hide
- As a user, I should be able to specify the number of events I want to view so that I can customize the number of events to be shown on my list
- As a user, I should be able to use the app when offline so that I can see the events I viewed the last time I was online
- As a user, I should be able to add the app shortcut to my home screen so that I can quickly open the app
- As a user, I should be able to see a chart showing the upcoming events in each city so that I can easily identify which events are happening in different cities

### Test Scenarios 

- Filter events by City
#### Scenarios 1: When the user hasn’t searched for a specific city, show upcoming events from all cities
- Given the user hasn’t searched for any city
- When the user opens the app
- Then the user should see a list of upcoming events
#### Scenarios 2: Allow autocomplete search
- Given the user is on the events page with a list of events
- When the user starts typing in the city filter field
- Then the user should see relevant suggestions based on the user's input, helping them find the desired city quickly
#### Scenarios 3: Verify case-insensitive city filtering
- Given the user is on the events page with a list of events
- When the user enters a city name in uppercase, lowercase, or a mix of both
- Then make sure that the city filtering is case-insensitive and displays the appropriate results
#### Scenarios 4: Show events of requested city
- Given the user is on the events page with a list of events
- When the user selects a specific city from the filter options
- Then the user should only see events taking place in that city
### Test Scenarios - Show/Hide an Event's Details
#### Scenario 1 : Display details of events if showDetails button is clicked
- Given the user is on the list of events page
- When a user clicks on the showDetails button of the respective event
- Then details of event should be displayed and showDetails button changed to hidedetails button
#### Scenario 2: Hide event details if HideDetails button is clicked
- Given the user is on the event page with details displayed
- When the user clicks on the HideDetails button
- Then user should not see events details
### Test Scenarios - Specify the Number of Events
#### Scenario 1: By default, list 20 events
- Given the user is on the main page
- When the user hasn’t specified a event number to be displayed
- Then user should only see 20 events
#### Scenario 2: Customize list of events 
- Given the user is on the main page
- When the user changes the events numbers
- Then user should only see respective number of events
### Test Scenarios - Use the app when offline
 #### Scenarios 1: When there’s no internet connection, display cached data 
 - Given the app has previously loaded data when online
 - When the device goes offline and user tries to access the same data again
 - Then user should see specific data from the cached data instead of making unnecessary network requests
#### Scenarios 2: When there’s no internet connection show appropriate error message
 - Given device has no internet
 - When user tries to open app,
 - Then display appropriate error message and make sure app is not crashed
 ### Test Scenarios - Add an App Shortcut to the Home Screen.
 ##### Scenarios 1
- Given the app is installed on the device
- When the user accesses the app's options menu
- Then there should be an option to "Add Shortcut to Home Screen"
#### Scenarios 2: Verify that the app shortcut works as expected
- Given the app shortcut is added to the home screen
- When the user taps on the app shortcut icon
- Then the app should launch
### Test Scenario - Display Charts Visualizing Event Details
Check chart responsiveness and resizing
- Given the user is viewing the event details with a chart
- When the user resizes the window or views the page on different devices
- Then user should see charts and information correctly

### Contributions

Contributions to the Meet app are always welcome. 
 If you have any suggestions, improvements, or bug fixes, please feel free to submit a pull request.

