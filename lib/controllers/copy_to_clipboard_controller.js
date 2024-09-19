import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input"];

  static values = {
    feedbackText: String
  }

  copy(event) {
    this.inputTarget.select();
    event.currentTarget.disabled = true;
    event.currentTarget.innerText = this.feedbackTextValue;
  }
}
