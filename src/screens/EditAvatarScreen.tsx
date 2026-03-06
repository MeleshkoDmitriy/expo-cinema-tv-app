import { Box, FocusableImageCarousel, Screen } from '@/components';
import { Avatars } from '@/constants';
import { useTranslation } from 'react-i18next';
import {
  DefaultFocus,
  SpatialNavigationScrollView,
} from 'react-tv-space-navigation';

export const EditAvatarScreen = () => {
  const {t} = useTranslation();

  return (
    <Screen>
      <DefaultFocus>
        <SpatialNavigationScrollView>
          <Box padding='small' style={{ position: 'relative', top: 250 }}>
            <FocusableImageCarousel data={Avatars} title={t('screens.editAvatar.chooseAvatar')} />
          </Box>
        </SpatialNavigationScrollView>
      </DefaultFocus>
    </Screen>
  );
};
