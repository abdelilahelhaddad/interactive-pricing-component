const range = document.querySelector(".slider");
const pageviews = document.querySelector(".pageviews");
const price = document.querySelector(".price");
const plan = document.querySelector("#plan");

const toggle = document.querySelector(".toggle-icon");
const circle = document.querySelector(".circle");

let pageViewsVal = ['10', '50', '100', '500', '1000'];
let priceVal = ['8.00', '12.00', '16.00', '24.00', '36.00'];

range.addEventListener("mousemove", () => {
  let sliderValue = range.value;
  if (toggle.classList.contains("active")) {
    plan.innerHTML = "/year";
    pageviews.innerHTML = ((pageViewsVal[sliderValue]) * 12);
    pVal = (priceVal[sliderValue] * 12 - (25/100));
    price.innerHTML = Math.floor(pVal);
  }else{
    plan.innerHTML = "/month";
    pageviews.innerHTML = pageViewsVal[sliderValue];
    price.innerHTML = priceVal[sliderValue];
  }
  
  let sliderColor = `linear-gradient(90deg, rgb(165,243,235) ${(sliderValue * 25)}%, rgb(234,238,251) ${(sliderValue * 25)}%)`;
  range.style.background = sliderColor;
});

toggle.addEventListener("click", ()=>{
  toggle.classList.toggle("active");
  circle.classList.toggle("active");
});
