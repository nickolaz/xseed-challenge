import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import CharacterSkeleton from './CharacterSkeleton';

test('test to render SkeletonLoader component', () => {
  const component = render(<CharacterSkeleton />);
  const countSkeletons =
    component.container.getElementsByClassName('skeletonStyle');
  expect(countSkeletons.length).toBe(4);
});
