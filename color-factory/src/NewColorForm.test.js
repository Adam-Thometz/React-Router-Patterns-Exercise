import { render, screen } from '@testing-library/react';
import NewColorForm from './NewColorForm';
import {MemoryRouter} from 'react-router-dom'

test('renders component', () => {
  render(<MemoryRouter>
    <NewColorForm />
  </MemoryRouter>);
});

test('matches snapshot', () => {
  const {asFragment} = render(<MemoryRouter>
    <NewColorForm />
  </MemoryRouter>)
  expect(asFragment()).toMatchSnapshot()
})