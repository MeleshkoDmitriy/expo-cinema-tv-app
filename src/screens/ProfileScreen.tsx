import { Box, FocusableCarousel, Screen, Spacer } from '@/components';
import {
  DefaultFocus,
  SpatialNavigationScrollView,
} from 'react-tv-space-navigation';
import { useLikedlist, useWatchlist } from '@/features';
import { Fragment } from 'react';
import { ProfileImage } from '@/components/screens/profile';
import { UnknownAvatar } from '@/constants';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation';
import { useAvatar, useHistorylist } from '@/store';
import { useTranslation } from 'react-i18next';

export const ProfileScreen = () => {
  const { t } = useTranslation();

  const watchlist = useWatchlist();
  const likedlist = useLikedlist();
  const historylist = useHistorylist();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const savedAvatar = useAvatar();
  const avatar = savedAvatar ?? UnknownAvatar;

  const onProfileImageSelect = () => {
    navigation.push('EditAvatar');
  };

  const data = [
    {
      content: historylist,
      title: t('content.history'),
    },
    {
      content: watchlist,
      title: t('content.watchLater'),
    },
    {
      content: likedlist,
      title: t('content.likedContent'),
    },
  ];

  return (
    <Screen>
      <DefaultFocus>
        <SpatialNavigationScrollView offsetFromStart={140}>
          <Box justifyContent='space-evenly'>
            <ProfileImage avatar={avatar} onSelect={onProfileImageSelect} />
          </Box>
          <Spacer gap='big' />
          <Box padding='small'>
            {data.map((item) => (
              <Fragment key={item.title}>
                <FocusableCarousel data={item.content} title={item.title} />
                {item.content.length > 0 && <Spacer gap='big' />}
              </Fragment>
            ))}
          </Box>
        </SpatialNavigationScrollView>
      </DefaultFocus>
    </Screen>
  );
};
