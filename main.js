import pictures from "./pix1.js";

const counter = document.querySelector(".counter");
const arrow_left = document.querySelector(".arrow_left");
const imgCont = document.querySelector(".imgCont");
const arrow_right = document.querySelector(".arrow_right");
const tag = document.querySelector(".tag")
const dots = document.querySelector(".dots")
let img_main;

let picId = 0;

const imgTemplate = `<img class="inner_image" src="" alt="beer" />`;

imgCont.innerHTML += imgTemplate;
img_main = document.querySelector(".inner_image");

img_main.setAttribute("src", pictures[0].src);



const dotsTemplate = `<img class="hop" src="./pictures/hop.png" alt=""></img>`;

pictures.forEach(() => dots.innerHTML = (dotsTemplate));




arrow_right.addEventListener("click", () => {
    picId === pictures.length-1 ? picId = 0 : picId++;
    steps(picId);
  
});

arrow_left.addEventListener("click", () => {
    picId === 0 ? picId = pictures.length-1 : picId--;
    steps(picId);
});

const steps = (picId) => {
    img_main.setAttribute("src", pictures[picId].src);
    counter.innerHTML = `${picId + 1}/${pictures.length}`;
    tag.innerHTML = (pictures[picId].tag);

}

setInterval(() => {
    picId === pictures.length - 1 ? picId = 0 : picId++;
    steps(picId);
}, 3500);

