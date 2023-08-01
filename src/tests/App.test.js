  /* eslint-disable testing-library/no-node-access */
  import { render } from '@testing-library/react';
  import App from '../App';

  describe('<App /> component', () => {
   
  test('renders list of events', () => {
      const AppDOM = render(<App />).container.firstChild;
      expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
    })

    test('renders city search', () => {
      const AppDOM = render(<App />).container.firstChild;
      expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
    })
    
    test('renders numbers of events in the App', () => {
      const AppDOM = render(<App />).container.firstChild;
      expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument();
    });

  });