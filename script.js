const btn = document.querySelector(".btn");
const rating = document.querySelectorAll(".rating_value");
const ratingValue = document.querySelector(".rating-span");
const error=document.querySelector('small');

const ratingForm = document.querySelector("form");
const result = document.querySelector(".thankyou-state-container");
// console.log(rating);

ratingForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let isRated = checkRate();
  if (isRated) {
    ratingForm.style.display='none';
    result.style.display='block';
}
});

let value;
rating.forEach((element) => {
    element.addEventListener("click", () => {
        value = element.value;
        error.style.display='none';
    });
});

function checkRate() {
    let rated = false;
    if(value){
        rated=true;
        ratingValue.textContent=value;
  }else{
    error.textContent=' knock knock, You Forgot to rate us.';
  }
  return rated;
}
