const range = document.querySelector(".slider");
const pageviews = document.querySelector(".pageviews");
const price = document.querySelector(".price");

let pageViewsVal = ['10K', '50K', '100K', '500K', '1M'];
let priceVal = ['$8.00', '$12.00', '$16.00', '$24.00', '$36.00'];

// range.oninput = ()=>{
//   price.value
// }

range.addEventListener("mousemove", () => {
  let sliderValue = range.value;
  pageviews.innerHTML = pageViewsVal[sliderValue];
  price.innerHTML = priceVal[sliderValue];
  let sliderColor = 'linear-gradient(90deg, $Full-Slider-Bar' + sliderValue + '%, $Empty-Slider-Bar' + sliderValue +'%)';
  range.style.background = sliderColor;
});
