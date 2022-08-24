import { Controller } from "@hotwired/stimulus";
import consumer from "../channels/consumer";

console.log(consumer)

// Connects to data-controller="cursor"
export default class extends Controller {
  connect() {
    this.channel = consumer.subscriptions.create("CursorChannel", {
      connected: this._cableConnected.bind(this),
      disconnected: this._cableDisconnected.bind(this),
      received: this._cableReceived.bind(this),
    });

    document.addEventListener("mousemove", this._onMouseMove.bind(this));
    if (document.hasFocus()) {
      this.cursor.style.display = "none";
    }
  }

  initialize() {
    this.cursor = document.createElement("div");
    this.cursor.classList.add("cursor");
    document.body.prepend(this.cursor);
    this.cursor.style.borderColor = "transparent transparent red transparent";
    this.cursor.style.borderStyle = "solid";
    this.cursor.style.borderWidth = "0px 6px 16px 6px";
    this.cursor.style.transform = "rotate(-45deg)";
    this.cursor.style.height = "0px";
    this.cursor.style.height = "0px";
    this.cursor.style.position = "absolute";
  }

  _onMouseMove(event) {
    console.log(event);
    const y = event.pageY - 20;
    const x = event.pageX - 20;
    this.channel.perform("update", { x, y });
  }
  _cableConnected() {
    console.log('cable connected');
    // Called when the subscription is ready for use on the server
  }

  _cableDisconnected() {
    // Called when the subscription has been terminated by the server
  }

  _cableReceived(data) {
    this.cursor.style.top = data.y + "px";
    this.cursor.style.left = data.x + "px";
    // console.log(data);
  }
}
