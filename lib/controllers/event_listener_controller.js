// lib/controllers/event_listener_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    // TODO: console.log something!
    console.log("Hello World");
  }

  disable() {
    this.element.innerText = "Bingo!";
    this.element.setAttribute("disabled", "");
    const audio = new Audio('sound.mp3');
    audio.play();
  }
}
