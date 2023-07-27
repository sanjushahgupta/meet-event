import { render } from '@testing-library/react';
import App from '../App';

describe('<App /> component', () => {
  let AppDOM ;
  beforeEach(()=>{
      // eslint-disable-next-line testing-library/no-node-access, testing-library/no-render-in-setup
    AppDOM = render(<App />).container.firstChild;
  })
    test('renders list of events', () => {
        // eslint-disable-next-line testing-library/no-node-access
        expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
      });

      test('renders city search', () => {
      // eslint-disable-next-line testing-library/no-node-access
        expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
      });
      
});