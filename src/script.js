console.log("Chennai Aqua Water Purifier website loaded");
const slider = document.getElementById("slider");

const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg"
];

images.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  slider.appendChild(img);
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
