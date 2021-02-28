const range = document.querySelector(".slider");
const pageviews = document.querySelector(".pageviews");
const price = document.querySelector(".price");

let pageViewsVal = ['10K', '50K', '100K', '500K', '1M'];
let priceVal = ['$8.00', '$12.00', '$16.00', '$24.00', '$36.00'];


range.addEventListener("oninput", () => {
  let sliderValue = range.value;
  let sliderColor = 'linear-gradient(90deg, $Full-Slider-Bar' + sliderValue + '%, $Empty-Slider-Bar' + sliderValue +'%)';
  range.style.background = sliderColor;
});
