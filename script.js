const range = document.querySelector(".slider");
const pageviews = document.querySelector(".pageviews");
const price = document.querySelector(".price");

const toggle = document.querySelector(".toggle-icon");
const circle = document.querySelector(".circle");

let pageViewsVal = ['10K', '50K', '100K', '500K', '1M'];
let priceVal = ['$8.00', '$12.00', '$16.00', '$24.00', '$36.00'];

range.addEventListener("mousemove", () => {
  let sliderValue = range.value;
  pageviews.innerHTML = pageViewsVal[sliderValue];
  price.innerHTML = priceVal[sliderValue];
  let sliderColor = `linear-gradient(90deg, rgb(165,243,235) ${(sliderValue * 25)}%, rgb(234,238,251) ${(sliderValue * 25)}%)`;
  range.style.background = sliderColor;
});

toggle.addEventListener("click", ()=>{
  toggle.classList.toggle("active");
  circle.classList.toggle("active");
});
