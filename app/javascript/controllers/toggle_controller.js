import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["checkbox", "checkedOutput", "select"]
  connect() {
    console.log("Toggle Controller is now connected.")
    console.log(this.hasCheckboxTarget);
    console.log(this.hasCheckedOutputTarget);
    console.log(this.hasSelectTarget);
  }

  animate() {
    if (this.checkboxTarget.checked) {
      this.checkedOutputTarget.innerHTML = `<span class="animate-spin inline-block">🍕</span>👍🏻` // this.checkboxTarget.classList.remove("animate-bounce");      
      // this.checkedOutputTarget.classList.add("animate-bounce");
    } else {
      this.checkedOutputTarget.innerHTML = "" //   this.checkboxTarget.classList.add("animate-bounce");
    }
  }

  show_dropdown() {
    this.selectTarget.classList.toggle("hidden")
  }
 
}
