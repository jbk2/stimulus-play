import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["checkbox"]
  connect() {
    console.log("Toggle Controller is now connected.")
  }

  animate() {
    if (this.checkboxTarget.checked) {
      this.checkboxTarget.classList.remove("animate-bounce");
    } else {
      this.checkboxTarget.classList.add("animate-bounce");
    }
  }
 
}
