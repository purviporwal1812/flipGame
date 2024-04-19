const cardArr = [
  {
    name: "melon",
    img: "melon.png",
  },
  {
    name: "cherry",
    img: "cherry.jpg",
  },
  {
    name: "grape",
    img: "grape.jpg",
  },
  {
    name: "straw",
    img: "straw.jpg",
  },
  {
    name: "orange",
    img: "orange.webp",
  },
  {
    name: "pineapple",
    img: "pineapple.png",
  },
  {
    name: "melon",
    img: "melon.png",
  },
  {
    name: "cherry",
    img: "cherry.jpg",
  },
  {
    name: "grape",
    img: "grape.jpg",
  },
  {
    name: "straw",
    img: "straw.jpg",
  },
  {
    name: "orange",
    img: "orange.webp",
  },
  {
    name: "pineapple",
    img: "pineapple.png",
  },
];
console.log(cardArr);
//shuffling array
cardArr.sort(() => 0.5 - Math.random());

const grid = document.querySelector("#grid");
const result = document.querySelector("#result");

function createBoard() {
  for (let i = 0; i < 12; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "bck.jpg");
    card.setAttribute("data-id", i);
    card.style.width = "270px";
    card.style.height = "180px";
    grid.append(card);
    card.addEventListener("click", flip);
    console.log(card, i);
  }
}

let selected = [];
let selectedId = [];
//flip card
function flip() {
  const id = this.getAttribute("data-id");
  selected.push(cardArr[id].name);
  this.setAttribute("src", cardArr[id].img);
  console.log(selected);
  selectedId.push(id);

  if (selected.length === 2) {
    setTimeout(check, 500);
  }
}
let score = 0;
function check() {
  const cards = document.querySelectorAll("img");
  if (selectedId[0] === selectedId[1]) {
    alert("clicked the same element");
    cards[selectedId[0]].setAttribute("src", "bck.jpg");
    cards[selectedId[1]].setAttribute("src", "bck.jpg");
  } else if (selected[1] === selected[0]) {
    console.log("id : ", selectedId);
    console.log(selected);

    cards[selectedId[0]].style.opacity = 0;
    cards[selectedId[1]].style.opacity = 0;

    selected = [];
    selectedId = [];
    alert("found a match");

    score += 2;
    if (score === 12) {
      alert("you won");
      result.innerHTML(score);
    }
    result.innerHTML = score;
    cards[selected[0]].removeEventListener("click", flip);
    cards[selected[1]].removeEventListener("click", flip);
    selected = [];
    selectedId = [];
  } else {
    cards[selectedId[1]].setAttribute("src", "bck.jpg");
    cards[selectedId[0]].setAttribute("src", "bck.jpg");

    alert("try again");
  }
  selected = [];
  selectedId = [];
  console.log(score);
}
createBoard();
