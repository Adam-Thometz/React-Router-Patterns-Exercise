import { render, screen } from '@testing-library/react';
import MainColorPage from './MainColorPage';
import {MemoryRouter} from 'react-router-dom'

test('renders component', () => {
  render(<MemoryRouter>
    <MainColorPage />
  </MemoryRouter>);
});

test('matches snapshot', () => {
  const {asFragment} = render(<MemoryRouter>
    <MainColorPage />
  </MemoryRouter>)
  expect(asFragment()).toMatchSnapshot()
})