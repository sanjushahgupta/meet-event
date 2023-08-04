    /* eslint-disable testing-library/prefer-screen-queries */
    /* eslint-disable testing-library/render-result-naming-convention */
    import EventList from "../components/EventList";
    import { render, screen } from '@testing-library/react';
    import { getEvents } from '../api';

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