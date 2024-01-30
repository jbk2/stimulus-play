import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["output"]

  connect() {
    console.log("Hello Controller is now connected.")
  }

  hi() {
    this.outputTarget.innerHTML = "hi hi hi"
  }

}
