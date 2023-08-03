Feature: SHOW/HIDE event details

    Scenario: Event details are hidden by default.
        Given the user has opened the app.
        When the list of upcoming events is displayed.
        Then each event details should be hidden, and only the basic information about each events should be shown.

    Scenario: User can expand an event to see details.
        Given the user has opened the app and the list of upcoming events is displayed.
        When the user clicks on a "show details" button for a specific event.
        Then the details of the desired event should be shown by expanding the event.

    Scenario: User can collapse an event to hide details.
        Given the user has opened the app and the details of the first event are shown.
        When the user clicks on the "hide details" button for the first event.
        Then the event details should collapse, hiding the additional details about the event.