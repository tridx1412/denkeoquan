const carousel = document.getElementById("carousel");
const images = carousel.children;
const total = images.length;
let angle = 0;
let rotate = true;

// Xếp 6 hình quanh trục tròn
for (let i = 0; i < total; i++) {
  const deg = i * (360 / total);
  images[i].style.transform = `rotateY(${deg}deg) translateZ(300px)`;
}

// Quay đèn
function spin() {
  if (rotate) {
    angle += 0.5;
    carousel.style.transform = `rotateY(${angle}deg)`;
  }
  requestAnimationFrame(spin);
}
spin();

// Hover dừng / chạy tiếp
carousel.addEventListener("mouseover", () => {
  rotate = false;
});

carousel.addEventListener("mouseout", () => {
  rotate = true;
});
