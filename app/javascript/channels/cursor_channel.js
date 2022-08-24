import consumer from "./consumer"

consumer.subscriptions.create("CursorChannel", {
  connected() {
    console.log('object');
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
  }
});
