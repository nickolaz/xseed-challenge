import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Card from './Card';

test('test to render text inside a Card component', () => {
  const testTxt = 'show this text inside a card';
  const component = render(<Card>{testTxt}</Card>);
  expect(component.container).toHaveTextContent(testTxt);
});
