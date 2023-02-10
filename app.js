// const btn = document.getElementById("btn");
// const modal = document.getElementById("modal");
// const close_btn = document.getElementById("close_btn");
// const overlay = document.getElementById("overlay");

// btn.addEventListener("click", addFuc);
// close_btn.addEventListener("click", removFuc);
// overlay.addEventListener("click", removFuc);

// function removFuc() {
//   modal.classList.add("hiddin");
//   overlay.classList.add("hiddin");
// }

// function addFuc() {
//   modal.classList.remove("hiddin");
//   overlay.classList.remove("hiddin");
// }

// window.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") {
//     removFuc();
//   }
// });

// btn.addEventListener("click", () => {
//   modal.classList.remove("hiddin");
//   overlay.classList.remove("hiddin");
// });

// close_btn.addEventListener("click", () => {
//   modal.classList.add("hiddin");
//   overlay.classList.add("hiddin");
// });

// overlay.addEventListener("click", () => {
//   modal.classList.add("hiddin");
//   overlay.classList.add("hiddin");
// });


const alert = document.getElementById("alert");
// const alert_2 = document.querySelector(".alert");
// const ul = document.querySelector("ul");
// const formsubmit = document.getElementById("formsubmit");
// const form_input = document.getElementById("form_input");
// const submit = document.getElementById("submit");

// formsubmit.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const inputVe = form_input.value;
//     console.log(inputVe);
//     if (inputVe === "") {
//         alert_2.classList.remove("hiddin");
//         alert.textContent = "Biron narsa kiriting !!!";
//         setTimeout(() => {
//             alert_2.classList.add("hiddin");
//         }, 1000);
//     }else{
//         const li = document.createElement("li");
//         li.textContent = `${inputVe}` ;
//         ul.appendChild(li);
//         form_input.value = "";
//     }
// });

// ul.addEventListener("click", (e)=>{
//     e.target.remove();
// })

const body = document.querySelector("body");
const container = document.querySelector(".container");
const text = document.querySelector(".text");

container.addEventListener("click", setGradient);

const valeus = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function getGradient() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomColor = Math.trunc(Math.random() * valeus.length);
    color += valeus[randomColor];
  }
  return color;
}


function setGradient() {
    const color1 = getGradient();
    const color2 = getGradient();
    const color3 = getGradient();
    const randomDeg = Math.trunc(Math.random() * 360);
    const bgColor = `linear-gradient(
    ${randomDeg}deg,
    ${color1},
    ${color2},
    ${color3}
  )`;
  body.style.background = bgColor;
  text.textContent = bgColor;
}

setGradient();
