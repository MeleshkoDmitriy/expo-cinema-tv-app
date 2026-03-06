import styled from '@emotion/native';
import { Button, TIconName } from '@/components/shared';
import { useTranslation } from 'react-i18next';

interface VideoPlayerButtonProps {
  isPlaying: boolean;
  onSelect: () => void;
}

export const VideoPlayerButton = ({
  isPlaying,
  onSelect,
}: VideoPlayerButtonProps) => {
  const { t } = useTranslation();

  const buttonText = isPlaying ? t('screens.player.pause') : t('screens.player.play');
  const buttonIcon: TIconName = isPlaying ? 'Pause' : 'Play';

  return (
    <PlayerButton iconName={buttonIcon} onSelect={onSelect}>
      {buttonText}
    </PlayerButton>
  );
};

const PlayerButton = styled(Button)(({}) => ({}));
