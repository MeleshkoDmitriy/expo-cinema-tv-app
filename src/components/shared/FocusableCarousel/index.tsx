import { MutableRefObject } from 'react';
import { Box } from '../Box';
import { Spacer } from '../Spacer';
import { Typography } from '../Typography';
import { FocusableRow } from './FocusableRow';
import {
  SpatialNavigationNode,
  SpatialNavigationVirtualizedListRef,
} from 'react-tv-space-navigation';
import { TMovie } from '@/types';
import { useTheme } from '@emotion/react';

interface FocusableCarouselProps {
  data: TMovie[];
  title?: string;
  parentRef?: MutableRefObject<SpatialNavigationVirtualizedListRef | null>;
}

export const FocusableCarousel = ({
  data,
  title,
  parentRef,
}: FocusableCarouselProps) => {
  const theme = useTheme();

  const row =
    data.length > 0 ? (
      <FocusableRow data={data} parentRef={parentRef} />
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
