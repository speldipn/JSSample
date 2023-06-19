const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const imgIndex = Math.floor(Math.random() * 3);

// option 1
// const chosenImage = `img/${images[imgIndex]}`;
// document.body.style.background = `url(${chosenImage}) no-repeat`;

// option 2
const chosenImage = images[imgIndex];
const img = document.createElement("img");
img.src = `img/${chosenImage}`;
img.classList.add("background");
// insert to front
// document.body.prepend(img);

// insert to end
document.body.appendChild(img);
