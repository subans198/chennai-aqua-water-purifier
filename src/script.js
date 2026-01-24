console.log("Chennai Aqua Water Purifier website loaded");
const slider = document.getElementById("slider");

/* ADD IMAGE FILE NAMES HERE ONLY */
const images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg"
];

/* LOAD IMAGES */
images.forEach(src => {
  const img = document.createElement("img");
  img.src = src;
  slider.appendChild(img);
});

let index = 0;

/* AUTO SLIDE */
setInterval(() => {
  index = (index + 1) % images.length;
  slider.style.transform = `translateX(-${index * 100}%)`;
}, 3000);

/* SWIPE SUPPORT */
let startX = 0;

slider.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) index++;
  if (endX - startX > 50) index--;
  index = (index + images.length) % images.length;
  slider.style.transform = `translateX(-${index * 100}%)`;
});

