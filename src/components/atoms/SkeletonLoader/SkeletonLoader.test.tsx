import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import SkeletonLoader from './SkeletonLoader';

test('test to render SkeletonLoader component', () => {
  const component = render(<SkeletonLoader />);
  const countSkeletons =
    component.container.getElementsByClassName('skeletonStyle');
  expect(countSkeletons.length).toBe(1);
});
