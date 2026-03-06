import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

export const useFocusAnimation = (isFocused: boolean) => {
  const scaleAnimation = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.spring(scaleAnimation, {
      toValue: isFocused ? 1.05 : 1,
      useNativeDriver: true,
      damping: 10,
      stiffness: 100,
    }).start();
  }, [isFocused, scaleAnimation]);

  return { transform: [{ scale: scaleAnimation }] };
};