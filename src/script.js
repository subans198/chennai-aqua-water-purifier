console.log("Chennai Aqua Water Purifier website loaded");

const slider = document.getElementById("slider");

/* IMAGE + PRICE DATA */
const images = [
  { src: "images/1.jpg", price: "₹ 7,000" },
  { src: "images/2.jpg", price: "₹ 8,000" },
  { src: "images/3.jpg", price: "₹ 9,500" }
];

/* LOAD IMAGES WITH PRICE */
images.forEach(item => {
  const wrapper = document.createElement("div");
  wrapper.className = "slide";

  const img = document.createElement("img");
  img.src = item.src;

  const price = document.createElement("div");
  price.className = "price";
  price.textContent = item.price;

  wrapper.appendChild(img);
  wrapper.appendChild(price);
  slider.appendChild(wrapper);
});

let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  slider.style.transform = `translateX(-${index * 100}%)`;
}, 3000);

/* Swipe */
let startX = 0;

slider.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) index++;
  if (endX - startX > 50) index--;
  index = (index + images.length) % images.length;
  slider.style.transform = `translateX(-${index * 100}%)`;
});
