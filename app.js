let game=[];
let user=[];
let colors=["yellow","red","green","blue"];
let started=false, level=0;
let h2=document.querySelector('h2');
function random(){
  let rnd= Math.floor(Math.random()*4);
  return rnd;
}
//start
function start(){
  if(started==false){
    started=true;
    level++;
    h2.innerText=`Level ${level}`;
    let rndbt=random();
    let rndbtn=colors[rndbt];
    flash(rndbtn);
    game.push(rndbtn);
    console.log(game);
  }
}
//level-up
function levelup(){
  level++;
  h2.innerText=`Level ${level}`;
  let rndbt=random();
  let rndbtn=colors[rndbt];
  flash(rndbtn);
  game.push(rndbtn);
  console.log(game);
}
//check the sequence
let idx = 0;
function check() {
  if (!started) return;
  flash(this.id);
  user.push(this.id);

  if (game[idx] === user[idx]) {
    idx++;

    if (user.length === game.length) {
      user = [];
      idx = 0;
      setTimeout(levelup, 600);
    }
  } else {
    h2.innerText = `Game Over! Your score is ${level - 1}`;
    user = [];
    game = [];
    idx = 0;
    level = 0;
    started = false;
  }
}
//flash
function flash(rnd){
  let btn= document.querySelector(`.${rnd}`);
  btn.classList.add("white");
  setTimeout(function(){
    btn.classList.remove("white");
  },250);
}
//start the game
document.addEventListener("keypress",start);
//user-click
let boxes=document.querySelectorAll('.two');
for (let box of boxes) {
  box.addEventListener("click", check);
}