import { useEffect } from 'react';
import { SupportedKeys } from './PanEvent/RemoteControl/SupportedKeys';
import RemoteControlManager from './PanEvent/RemoteControl/RemoteControlManager';

/**
 * @example useKey(SupportedKeys.Back, () => { console.log('pressed back!') })
 */

export const useKey = (key: SupportedKeys, callback: (pressedKey: SupportedKeys) => boolean) => {
  useEffect(() => {
    const remoteControlListener = (actualKey: SupportedKeys) => {
      if (actualKey !== key) return false;
      return callback(key);
    };
    RemoteControlManager.addKeydownListener(remoteControlListener);
    return () => RemoteControlManager.removeKeydownListener(remoteControlListener);
  }, [key, callback]);
};