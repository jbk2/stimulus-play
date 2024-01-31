import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["checkbox", "checkedOutput", "select", "card", "phoneBezel", "phoneScreen", "phoneCheckbox"]
  connect() {
    console.log("Toggle Controller is now connected.")
    console.log(`'checkbox' target found: ${this.hasCheckboxTarget}`);
    console.log(`'checkedOutput' target found: ${this.hasCheckedOutputTarget}`);
    console.log(`'select' target found: ${this.hasSelectTarget}`);
    console.log(`'card' target found: ${this.hasCardTarget}`);
    console.log(`'PhoneBezel' target found: ${this.hasPhoneBezelTarget}`);
    console.log(`'PhoneScreen' target found: ${this.hasPhoneScreenTarget}`);
    console.log(`'PhoneCheckbox' target found: ${this.hasPhoneCheckboxTarget}`);
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

  replace() {
    const newCard = document.createElement("div");
    newCard.classList.add("carousel", "carousel-start", "transition-opacity", "duration-700", "opacity-0", "h-56", "w-96");
    newCard.innerHTML = `
        <div class="carousel-item">
          <img src="assets/fish1.jpg" alt="Spring" />
        </div> 
        <div class="carousel-item">
          <img src="assets/fish2.jpg" alt="Summer" />
        </div> 
        <div class="carousel-item">
          <img src="assets/fish3.jpg" alt="Autumn" />
        </div> 
        <div class="carousel-item">
          <img src="assets/fish4.jpg" alt="Winter" />
        </div> 
      `;

    const currentCard = this.cardTarget;
    currentCard.parentNode.replaceChild(newCard, currentCard);
    
    requestAnimationFrame(() => {
      newCard.classList.remove("opacity-0");
      newCard.classList.add("opacity-100");
    });
  }

    phoneOn() {
      if (this.phoneCheckboxTarget.checked) {
        this.phoneBezelTarget.classList.add("border-primary")
        this.phoneScreenTarget.classList.add("bg-teal-200")
      } else {
        this.phoneBezelTarget.classList.remove("border-primary")
        this.phoneScreenTarget.classList.remove("bg-teal-200")
      }
    }
 
}
