const range = document.querySelector(".slider");
const pageviews = document.querySelector(".pageviews");
const price = document.querySelector(".price");
const plan = document.querySelector("#plan");
const pv = document.querySelector(".pv>p");

const toggle = document.querySelector(".toggle-icon");
const circle = document.querySelector(".circle");

let pageViewsVal = ['10', '50', '100', '500', '1000'];
let priceVal = ['8.00', '12.00', '16.00', '24.00', '36.00'];

range.addEventListener("mousemove", () => {
  //Get range slider value [0,1,2,3,4]
  let sliderValue = range.value;
  //Change range background color when sliding
  let sliderColor = `linear-gradient(90deg, rgb(165,243,235) ${(sliderValue * 25)}%, rgb(234,238,251) ${(sliderValue * 25)}%)`;
  range.style.background = sliderColor;

  if (toggle.classList.contains("active")) {
    plan.innerHTML = "/year";
    pvVal = ((pageViewsVal[sliderValue]) * 12);
    pageviews.innerHTML = pvVal;
    prVal = ((priceVal[sliderValue] * 12) - (25/100));
    price.innerHTML = Math.floor(prVal);
    // if (pvVal >=1000 ) {
    //   pageviews.innerHTML = pvVal / 1000;
    //   pv.innerHTML = "M Pageviews";
    // }
  }else{
    plan.innerHTML = "/month";
    pageviews.innerHTML = pageViewsVal[sliderValue];
    price.innerHTML = priceVal[sliderValue];
    if (pageviews.value >=1000 ) {
      pageviews.innerHTML = (pageviews.value / 1000);
      pv.innerHTML = "M Pageviews";
    }
  }
});

//Switch button
toggle.addEventListener("click", ()=>{
  toggle.classList.toggle("active");
  circle.classList.toggle("active");
});
