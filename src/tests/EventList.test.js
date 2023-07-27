/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import EventList from "../components/EventList";

  describe('<EventList/> component',()=>{
    test('event have list', () => {
        const EventListComponent = render(<EventList events={[{id:1}, {id:2}, {id:3}]} />);
        expect(EventListComponent.getAllByRole("listitem").length).toBe(3);
  })
})