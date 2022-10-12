class Event {
  subscribe = (event, listener) => {
    document.addEventListener(event, listener);
  };

  unsubscribe = (event, listener) => {
    document.removeEventListener(event, listener);
  };

  publish = (event_, data) => {
    document.dispatchEvent(new CustomEvent(event_, { detail: data }));
  };
}

const event = new Event();

const { subscribe, unsubscribe, publish } = event;

export { subscribe, unsubscribe, publish };
