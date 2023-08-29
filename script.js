let pElement = document.querySelector(".bt-text-01");

function hide() {
  pElement.innerHTML = `
    <button onclick="hide()">hide text</button>
    <button onclick="show()">show text</button>`;
}
function show() {
  pElement.innerHTML = `<h2> this is test</h2>
    <button onclick="hide()">hide text</button>
    <button onclick="show()">show text</button>`;
}
function bt_01() {
  const width = Number(prompt("nhập chiều dài"));
  const height = Number(prompt("nhập chiều cao"));
  const rectangleElement = document.querySelector("#rectangle");
  rectangleElement.style.width = `${width}px`;
  rectangleElement.style.height = `${height}px`;
}

// function moveTop() {
//   movetop += 20;

//   imgElement.style.top = movetop + "px";
// }
// function moveDow() {
//   movetop -= 20;
//   imgElement.style.top = movetop + "px";
// }
// function moveRight() {
//   moveleft -= 20;
//   imgElement.style.left = moveleft + "px";
// }
// function moveLeft() {
//   moveleft += 20;
//   imgElement.style.left = moveleft + "px";
// }

// let imgElement = document.querySelector("#img");
// let movetop = 0;
// let moveleft = 0;
// function move(action) {
//   switch (action) {
//     case "top":
//       movetop += 20;
//       imgElement.style.top = movetop + "px";
//       break;
//     case "dow":
//       movetop -= 20;
//       imgElement.style.top = movetop + "px";
//       break;
//     case "left":
//       moveleft -= 20;
//       imgElement.style.left = moveleft + "px";
//       break;
//     case "right":
//       moveleft += 20;
//       imgElement.style.left = moveleft + "px";
//       break;
//   }
// // }
// const bodyElement = document.querySelector("body");
// function bt_01() {
//   let numberRandom = Math.floor(Math.random() * 255);
//   let numberRandom1 = Math.floor(Math.random() * 255);
//   let numberRandom2 = Math.floor(Math.random() * 255);
//   bodyElement.style.backgroundColor =
//     "rgb" + `(${numberRandom},${numberRandom1},${numberRandom2})`;
// }
// const header = document.getElementById ("header");
//  header.addEventListener ("mousedown", (e) => {
//  console.log("mousedown");
//  });
//  header.addEventListener ("mouseup", (e) => {
//  console.log("mouseup");
//  });
//  header.addEventListener ("click", (e) => {
//  console.log("click");
//  });
//  header.addEventListener ("mousemove", (e) => {
//  console.log("mousemove");
//  });
//  function onMouseOver() {
//  console.log('mouseover');
//  }
window.addEventListener("keydown", (a) => {
  console.log(a);
});

let imgElement = document.querySelector("#img");
let movetop = 0;
let moveleft = 0;
document.addEventListener("keydown", function (event) {
  console.log(event);
  switch (event.key) {
    case "ArrowUp":
      movetop += 20;
      imgElement.style.top = movetop + "px";
      break;
    case "ArrowDown":
      movetop -= 20;
      imgElement.style.top = movetop + "px";
      break;
    case "ArrowLeft":
      moveleft -= 20;
      imgElement.style.left = moveleft + "px";
      break;
    case "ArrowRight":
      moveleft += 20;
      imgElement.style.left = moveleft + "px";
      break;
  }
});

const bodyElement = document.querySelector("#body");
const modalContainer = document.querySelector(".modal-container");
function openModal() {
  bodyElement.style.backgroundColor = "rgb(139, 189, 189)";
  modalContainer.innerHTML = `<p>Some text in the modal</p>
    <button onclick="click_x()" id="btn-x">x</button>`;
}

function click_x() {
  modalContainer.innerHTML = ``;
  bodyElement.style.backgroundColor = "white";
}

body.addEventListener("dblclick", () => {
  modalContainer.innerHTML = ``;
  bodyElement.style.backgroundColor = "white";
});

hover.addEventListener("mouseover", () => {
  hover.style.color = "red";
});
hover.addEventListener("mouseout", () => {
  hover.style.color = "black";
});
