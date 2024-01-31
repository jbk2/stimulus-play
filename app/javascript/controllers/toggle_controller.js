import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["checkbox", "checkedOutput", "select", "card"]
  connect() {
    console.log("Toggle Controller is now connected.")
    console.log(`'checkbox' target found: ${this.hasCheckboxTarget}`);
    console.log(`'checkedOutput' target found: ${this.hasCheckedOutputTarget}`);
    console.log(`'select' target found: ${this.hasSelectTarget}`);
    console.log(`'card' target found: ${this.hasCardTarget}`);
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
 
}
