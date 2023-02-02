const starRating = document.querySelector(".wrapper");
const stars = document.querySelectorAll(".star");

stars.forEach((star, i) => {
    star.addEventListener("mouseover", function() {
        starRating.classList = "";
        starRating.classList.add("wrapper");
        starRating.classList.add(`mark-${i+1}`);
    })
})