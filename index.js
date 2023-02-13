const thankYouState = document.querySelector(".thank-you-state")
const ratingState = document.querySelector(".rating-state")
const ratingButtons = document.querySelectorAll(".btn-rating")
const submitBtn = document.querySelector(".btn-submit")
let starRating = 0;

document.addEventListener("click", (event) => {
    const element = event.target

    ratingButtons.forEach((button) => {
        if (button.className.includes("btn-rating-clicked")) {
            button.classList.remove("btn-rating-clicked")
            button.classList.add("hover")
        }

        if (button === element) {

            element.classList.add("btn-rating-clicked")
            element.classList.remove("hover")
        }
    })
            
    // Armazena a classificação
    starRating = element.dataset.rating

})
