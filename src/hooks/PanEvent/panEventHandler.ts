import { HWEvent } from 'react-native';
import { throttle } from '@/utils';
import {PanEvent, THROTTLE_DELAY_MS} from './PanEvent';

const myPanEvent = new PanEvent();

export const panEventHandler = (event: HWEvent) => {
  throttle(() => {
    if (event.eventType === 'pan') {
      if (!event.body) return;
      if (event.body.state === 'Began') {
        myPanEvent.reset();
      }
      if (event.body.state === 'Changed') {
        myPanEvent.handlePanEvent({ x: event.body.x, y: event.body.y });
      }
    }
  }, THROTTLE_DELAY_MS)();
};