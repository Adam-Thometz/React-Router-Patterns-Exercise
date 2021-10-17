import { render, screen } from '@testing-library/react';
import ColorPage from './ColorPage';
import {MemoryRouter} from 'react-router-dom'

test('renders component', () => {
  render(<MemoryRouter>
    <ColorPage />
  </MemoryRouter>);
});

test('matches snapshot', () => {
  const {asFragment} = render(<MemoryRouter>
    <ColorPage />
  </MemoryRouter>)
  expect(asFragment()).toMatchSnapshot()
})

test('renders specific component', () => {
  const {getByText} = render((
  <MemoryRouter initialEntries={['/colors/blue']}>
    <ColorPage />
  </MemoryRouter>));
  expect(getByText('This color is blue')).toBeInTheDocument()
});