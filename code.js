let timer = 6;
let score = 0;
let randomhit = 0;

function makebubble() {
    var clutter = "";
    for (i = 2; i < 2000; i++) {
      clutter += ` <div class="bubble">
                      ${Math.floor(Math.random() * i)}
                  </div>`;
    }
  
    document.querySelector(".pbottom").innerHTML = clutter;
  }
makebubble();
  

function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

function getNewHit() {
  randomhit = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = randomhit;
}
getNewHit();

function runTimer() {
  let timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector(".pbottom").innerText = "Game Over"
    }
  }, 1000);
}
runTimer();


document.querySelector(".pbottom").addEventListener("click", (det) => {
    let clickednum = Number(det.target.innerText)
    console.log(clickednum)
    if(clickednum === randomhit){
        console.log("same same")
        increaseScore();
        getNewHit();
        makebubble();
    }
})
