<<<<<<< HEAD
const images = {
  treasure: "💰",
  leafs: "🍃",
  trees: "🌲",
};

const container = document.querySelector(".entry");
const trees = document.querySelectorAll(".entry .tree");
const result = document.querySelector(".result");
const btnClear = document.querySelector(".clear");
const btnReset = document.querySelector(".reset");
const tresuare = document.querySelector("div.treasure");

let total = 0;

const updateResult = () => {
  result.textContent = `Result: ${total}`;
};

container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("treasure")) {
    e.target.innerHTML = images.treasure;
    total++;
    updateResult();
    alert("you won");
  } else if (e.target.classList.contains("tree")) {
    e.target.innerHTML = images.leafs;
  }
});
container.addEventListener("mouseout", (e) => {
  if (e.target.innerHTML === images.leafs) {
    e.target.innerHTML = images.trees;
  }
});

btnClear.addEventListener("click", () => {
  tresuare.innerHTML = images.trees;
});

btnReset.addEventListener("click", () => {
  tresuare.innerHTML = images.trees;
  total = 0;
  updateResult();
});
=======
import './style.css';

const images = {
  treasure: '💰',
  leafs: '🍃'
}
>>>>>>> a2bcbbfc16d10667fbdaf8be251bd3e982725b3d
