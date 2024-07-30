// const gallery = document.getElementById("slider");
// const left = document.getElementsByClassName("left")[0];
// left.classList.add("disabled");
// const right = document.getElementsByClassName("right")[0];
// const images = 10;
const imagePaths = [
  "./m1.jpg",
  "./m2.jpg",
  "./m3.jpg",
  "./m4.jpg",
  "./m5.jpg",
  "./m6.jpg",
  "./m7.jpg",
  "./m8.jpg",
  "./m9.jpg",
  "./m10.jpg"
];
// var selected = 0;

// function init() {
// console.log('hello world!');
//   for (var i = 0; i < images; i++) {
//     var imageWrapper = document.createElement("div");
//     imageWrapper.id = `image_${i}`;
//     imageWrapper.classList.add("wrapper");
//     if (i === selected) {
//       imageWrapper.classList.add("selected");
//     }
//     var image = document.createElement("img");
//     console.log(imagePaths[i]);
//     image.src = imagePaths[i]; 
//      // Use the specific image path
//     imageWrapper.appendChild(image);
//     var mirrored = image.cloneNode();
//     mirrored.classList.add("flipped");
//     imageWrapper.appendChild(mirrored);
//     gallery.appendChild(imageWrapper);
//   }
// }

// init();

// right.onclick = function () {
//   selected++;
//   if (selected > images - 1) {
//     selected = images - 1;
//   }
//   handleSelection();
// };

// left.onclick = function () {
//   selected--;
//   if (selected < 0) {
//     selected = 0;
//   }
//   handleSelection();
// };

// function handleSelection() {
//   var images = document.getElementsByClassName("wrapper");
//   if (selected === images.length - 1) {
//     right.classList.add("disabled");
//   } else {
//     right.classList.remove("disabled");
//   }
//   if (selected === 0) {
//     left.classList.add("disabled");
//   } else {
//     left.classList.remove("disabled");
//   }
//   for (var i = 0; i < images.length; i++) {
//     var img = images[i];
//     if (img.id === 
//         `image_${selected}`) {
//       img.classList.add("selected");
//     } else {
//       img.classList.remove("selected");
//     }
//   }
// }

const gallery = document.getElementById("slider");
const left = document.getElementsByClassName("left")[0];
left.classList.add("disabled");
const right = document.getElementsByClassName("right")[0];
const images = 10;
// const imagesUrl = "https://picsum.photos/seed/{seed}/500/350";
var selected = 0;

function init() {
  for (var i = 0; i < images; i++) {
    var imageWrapper = document.createElement("div");
    imageWrapper.id = `image_${i}`;
    imageWrapper.classList.add("wrapper");
    if (i === selected) {
      imageWrapper.classList.add("selected");
    }
    var image = document.createElement("img");
    image.src = imagePaths[i];
    imageWrapper.appendChild(image);
    var mirrored = image.cloneNode();
    mirrored.classList.add("flipped");
    imageWrapper.appendChild(mirrored);
    gallery.appendChild(imageWrapper);
  }
}

init();

right.onclick = function () {
  selected++;
  if (selected > images - 1) {
    selected = images - 1;
  }
  handleSelection();
};

left.onclick = function () {
  selected--;
  if (selected < 0) {
    selected = 0;
  }
  handleSelection();
};

function handleSelection() {
  var images = document.getElementsByClassName("wrapper");
  if (selected === images.length - 1) {
    right.classList.add("disabled");
  } else {
    right.classList.remove("disabled");
  }
  if (selected === 0) {
    left.classList.add("disabled");
  } else {
    left.classList.remove("disabled");
  }
  for (var i = 0; i < images.length; i++) {
    var img = images[i];
    if (img.id === `image_${selected}`) {
      img.classList.add("selected");
    } else {
      img.classList.remove("selected");
    }
  }
}
