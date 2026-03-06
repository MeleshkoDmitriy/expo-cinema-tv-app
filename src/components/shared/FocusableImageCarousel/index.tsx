import { MutableRefObject } from 'react';
import { Box } from '../Box';
import { Spacer } from '../Spacer';
import { Typography } from '../Typography';
import { FocusableImageRow } from './FocusableImageRow';
import {
  SpatialNavigationNode,
  SpatialNavigationVirtualizedListRef,
} from 'react-tv-space-navigation';
import { TAvatar } from '@/types';
import { useTheme } from '@emotion/react';

interface FocusableImageCarouselProps {
  data: TAvatar[];
  title?: string;
  parentRef?: MutableRefObject<SpatialNavigationVirtualizedListRef | null>;
}

export const FocusableImageCarousel = ({
  data,
  title,
  parentRef,
}: FocusableImageCarouselProps) => {
  const theme = useTheme();

  const row =
    data.length > 0 ? (
      <FocusableImageRow data={data} parentRef={parentRef} />
    ) : (
      <></>
    );

  return (
    <SpatialNavigationNode>
      {({ isActive, isRootActive }) => (
        <Box direction='vertical'>
          {title && data.length > 0 && (
            <>
              <Typography
                variant='title'
                fontWeight='strong'
                color={
                  isRootActive && isActive
                    ? theme.colors.primary.mainHover
                    : theme.colors.background.white
                }
              >
                {title}
              </Typography>
              <Spacer direction='vertical' gap='small' />
            </>
          )}
          {row}
        </Box>
      )}
    </SpatialNavigationNode>
  );
};
