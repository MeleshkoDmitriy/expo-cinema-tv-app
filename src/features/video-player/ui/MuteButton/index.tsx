import { SpatialNavigationFocusableView } from 'react-tv-space-navigation';
import { View } from 'react-native';
import { useTheme } from '@emotion/react';
import { BlurBox, Icon, TIconName } from '@/components/shared';

interface MuteButtonProps {
  onSelect: () => void;
  isMuted: boolean;
}

export const MuteButton = ({ onSelect, isMuted }: MuteButtonProps) => {
  const theme = useTheme();
  const iconName: TIconName = isMuted ? 'VolumeMuted' : 'VolumeLoud';

  return (
    <View>
      <SpatialNavigationFocusableView onSelect={onSelect}>
        {({ isFocused, isRootActive }) => (
          <BlurBox isFocused={isFocused && isRootActive}>
            <Icon
              icon={iconName}
              color={
                isFocused && isRootActive
                  ? theme.colors.primary.main
                  : theme.colors.background.white
              }
            />
          </BlurBox>
        )}
      </SpatialNavigationFocusableView>
    </View>
  );
};
