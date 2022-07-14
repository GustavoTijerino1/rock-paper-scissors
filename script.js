console.log(5);

const readyBtn = document.querySelector(".readyBtn");
const gone = document.querySelector(".gone");
const rules = document.querySelector(".rules");
// const body = document.querySelector("body");
// console.log(body);

readyBtn.addEventListener("click", () => {
  gone.classList.toggle("hidden");
  const html = ` <div class="movements__row">
  <div class="movements__type movements__type--none">10</div>
  <div class="movements__value">lol</div>
  </div>`;

  rules.insertAdjacentHTML("afterbegin", html);
});

document.querySelector(".hello").addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "blue";
  // document.body.setAttribute("style", "background-color:pink");
});

/*
User story:
1. As a user I want to pick my choice and beat the cpu
2. I want to see score of the game
3. Make an account


Features:
1. Display when player wins / loses
2. Bring back scores from local storage

Flowchart:
1.  Login sheet at homepage /optional (dont have to make an account *maybe*)
2. Bring back Users info
3. play game
**Bonus customize account**





*/
