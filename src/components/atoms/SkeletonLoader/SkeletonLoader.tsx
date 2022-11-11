import { Skeleton } from '@mui/material';

import './SkeletonLoader.css';

interface SkeletonLoaderProps {
  height?: number;
  width?: number;
}

const SkeletonLoader = ({ width = 100, height = 10 }: SkeletonLoaderProps) => {
  return (
    <Skeleton
      animation="pulse"
      height={height}
      width={width}
      className="skeletonStyle"
    />
  );
};
export default SkeletonLoader;
