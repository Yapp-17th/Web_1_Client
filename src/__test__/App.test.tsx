import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
  it('App in the Document', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
