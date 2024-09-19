import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    // console.log("Test");
  }

  static targets = ["checkbox"]

  checkAll(event) {
    const checkAllChecked = event.target.checked;
    this.checkboxTargets.forEach((checkbox) => {
      checkbox.checked = checkAllChecked;
    });
  }
}
