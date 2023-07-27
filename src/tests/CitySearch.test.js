/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import CitySearch from '../components/CitySearch';

describe('<CitySearch /> component',()=>{
test ('renders text input', ()=>{
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const CitySearchComponent = render(<CitySearch/>);
    const cityTextBox = CitySearchComponent.queryByRole('textbox');
    expect(cityTextBox).toBeInTheDocument();
    expect(cityTextBox).toHaveClass('city');
})
})

