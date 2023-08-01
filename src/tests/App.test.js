  /* eslint-disable testing-library/no-node-access */
  import { render } from '@testing-library/react';
  import App from '../App';

  describe('<App /> component', () => {

    test('renders list of events', () => {
      const AppDOM = render(<App />).container.firstChild;
      expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
    });

    test('renders city search', () => {
      const AppDOM = render(<App />).container.firstChild;
      expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
    });

    test('render numbers of events', () => {
      const AppDOM = render(<App />).container.firstChild;
      expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument();
    });

  });