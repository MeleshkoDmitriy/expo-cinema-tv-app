import { repeat } from "@/utils";
import RemoteControlManager from "./RemoteControl/RemoteControlManager";
import { SupportedKeys } from "./RemoteControl/SupportedKeys";

export const GRID_SIZE = 1920;
export const NUMBER_OF_COLUMNS = 5;
export const EMIT_KEY_DOWN_INTERVAL = 30;
export const THROTTLE_DELAY_MS = 30;

export class PanEvent {
  private orientation: string | undefined = undefined;
  private lastIndex = 0;

  reset = () => {
    this.orientation = undefined;
    this.lastIndex = 0;
  };
  handlePanEvent = ({ x, y }: { x: number; y: number }) => {
    const newIndex = getGridCoordinates(x, y, this);
    if (!newIndex) return;
    moveFocus(newIndex, this);
  };

  getOrientation = () => {
    return this.orientation;
  };
  setOrientation = (orientation: string) => {
    this.orientation = orientation;
  };
  getLastIndex = () => {
    return this.lastIndex;
  };
  setLastIndex = (lastIndex: number) => {
    this.lastIndex = lastIndex;
  };
}

export const getGridCoordinates = (
  x: number,
  y: number,
  panEvent: PanEvent,
): number | undefined => {
  const gridElementSize = GRID_SIZE / NUMBER_OF_COLUMNS;

  const xIndex = Math.floor((x + gridElementSize / 2) / gridElementSize);
  const yIndex = Math.floor((y + gridElementSize / 2) / gridElementSize);

  if (!panEvent.getOrientation()) {
    // Lock orientation after significant movement to avoid sliding in two directions
    if (xIndex !== panEvent.getLastIndex()) {
      panEvent.setOrientation('x');
      return xIndex;
    }
    if (yIndex !== panEvent.getLastIndex()) {
      panEvent.setOrientation('y');
      return yIndex;
    }
    return;
  }

  if (panEvent.getOrientation() === 'x' && xIndex !== panEvent.getLastIndex()) {
    return xIndex;
  }

  if (panEvent.getOrientation() === 'y' && yIndex !== panEvent.getLastIndex()) {
    return yIndex;
  }
};

export const moveFocus = (index: number, panEvent: PanEvent) => {
  const indexDif = index - panEvent.getLastIndex();
  panEvent.setLastIndex(index);

  if (panEvent.getOrientation() === 'x') {
    repeat(
      () =>
        RemoteControlManager.emitKeyDown(indexDif > 0 ? SupportedKeys.Right : SupportedKeys.Left),
      EMIT_KEY_DOWN_INTERVAL,
      Math.abs(indexDif),
    );
  }
  if (panEvent.getOrientation() === 'y') {
    repeat(
      () => RemoteControlManager.emitKeyDown(indexDif > 0 ? SupportedKeys.Down : SupportedKeys.Up),
      EMIT_KEY_DOWN_INTERVAL,
      Math.abs(indexDif),
    );
  }
};