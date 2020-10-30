import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '@components/Button';

describe('<Button />', () => {
  it('Button in the Document', () => {
    const { container } = render(<Button label="button-label" />);
    expect(container).toBeInTheDocument();
  });
});
