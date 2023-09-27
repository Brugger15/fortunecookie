const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnOpen = document.querySelector("#btnOpen");
const btnTry = document.querySelector("#btnTry");

let randomPhrase;

function getRandomPhrase() {
  return Math.floor(Math.random() * 5);
}

function updatePhrase() {
  switch (randomPhrase) {
    case 0:
      document.querySelector(".screen2 p").innerText = "A vida trará coisas boas se tiver paciência.";
      break;
    case 1:
      document.querySelector(".screen2 p").innerText = "Não compense na ira o que lhe falta na razão.";
      break;
    case 2:
      document.querySelector(".screen2 p").innerText = "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.";
      break;
    case 3:
      document.querySelector(".screen2 p").innerText = "Defeitos e virtudes são apenas dois lados da mesma moeda.";
      break;
    case 4:
      document.querySelector(".screen2 p").innerText = "Não há que ser forte. Há que ser flexível.";
      break;
  }
}

function handleTryClick(event) {
  event.preventDefault();
  randomPhrase = getRandomPhrase();
  updatePhrase();
  screen1.classList.add("hide");
  screen2.classList.remove("hide");
}

btnOpen.addEventListener("click", handleTryClick);

btnTry.addEventListener("click", function () {
  screen1.classList.remove("hide");
  screen2.classList.add("hide");
});







