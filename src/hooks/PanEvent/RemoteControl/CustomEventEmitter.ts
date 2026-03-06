export type EventType = string | symbol;

export type Handler<T = unknown> = (event: T) => boolean;

export type EventHandlerList<T = unknown> = Array<Handler<T>>;

export type EventHandlerMap<Events extends Record<EventType, unknown>> = Map<
  keyof Events,
  EventHandlerList<Events[keyof Events]>
>;

export default class CustomEventEmitter<
  Events extends Record<EventType, unknown>,
> {
  private handlers: EventHandlerMap<Events> = new Map();

  on = <Key extends keyof Events>(
    eventType: Key,
    handler: Handler<Events[keyof Events]>,
  ) => {
    const eventTypeHandlers = this.handlers.get(eventType);
    if (!Array.isArray(eventTypeHandlers))
      this.handlers.set(eventType, [handler]);
    else eventTypeHandlers.push(handler);
  };

  off = <Key extends keyof Events>(
    eventType: Key,
    handler?: Handler<Events[keyof Events]>,
  ) => {
    this.handlers.set(
      eventType,
      // @ts-expect-error
      this.handlers.get(eventType).filter((h) => h !== handler),
    );
  };

  emit = <Key extends keyof Events>(eventType: Key, evt?: Events[Key]) => {
    const eventTypeHandlers = this.handlers.get(eventType);
    if (!eventTypeHandlers || eventTypeHandlers.length === 0) {
      return;
    }

    for (let index = eventTypeHandlers.length - 1; index >= 0; index--) {
      const handler = eventTypeHandlers[index];
      // @ts-expect-error
      if (handler(evt)) {
        return;
      }
    }
  };
}
