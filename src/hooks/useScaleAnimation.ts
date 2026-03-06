import { useCallback, useMemo, useRef } from 'react';
import { Animated } from 'react-native';

const SCALE_MIN = 1;
const SCALE_MAX = 1.1;
const PULSE_DURATION = 800;

export const useScaleAnimation = () => {
  const scale = useRef(new Animated.Value(1)).current;

  const triggerPulse = useCallback(() => {
    scale.setValue(1);
    Animated.sequence([
      Animated.timing(scale, {
        toValue: SCALE_MAX,
        duration: PULSE_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: SCALE_MIN,
        duration: PULSE_DURATION,
        useNativeDriver: true,
      }),
    ]).start();
  }, [scale]);

  const animatedStyle = useMemo(
    () => ({ transform: [{ scale }] }),
    [scale],
  );

  return { animatedStyle, triggerPulse };
};