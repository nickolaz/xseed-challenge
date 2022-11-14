import { Box, Divider } from '@mui/material';

import { Card, SkeletonLoader } from '../../atoms';

const CharacterSkeleton = () => {
  return (
    <>
      <Card>
        <Box display={'flex'} flexDirection={'column'}>
          <SkeletonLoader width={150} />
          <SkeletonLoader />
          <SkeletonLoader height={40} />
        </Box>
        <SkeletonLoader width={80} />
      </Card>
      <Divider color="#462B5E" />
    </>
  );
};
export default CharacterSkeleton;
