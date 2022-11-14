import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import ErrorMsg from './ErrorMsg';

test('test to render error text inside a ErrorMsg component', () => {
  const testTxt = 'Characters Not Found';
  const component = render(<ErrorMsg error={testTxt} />);
  expect(component.container).toHaveTextContent(testTxt);
});
