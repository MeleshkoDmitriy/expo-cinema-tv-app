import { SpatialNavigationView } from "react-tv-space-navigation";
import styled from '@emotion/native';


export const SpatialRow = styled(SpatialNavigationView)(({ theme }) => ({
  gap: theme.spacings.medium,
}));
