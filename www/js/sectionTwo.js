//global variables
var ctx;            //var that will hold the drawing context of <canvas> element
var monster;        //var that will hold info about monster graphic
var monsterPosX = 0;  //monster position data X
var monsterPosY = 0;  //monster position data Y

/**
 * Purpose: init and set up context obj and app init state
 * - window.screen.orientation.lock('portrait-primary') diff from what was in the book.
 * https://stackoverflow.com/questions/34005615/cordova-screen-lockorientation-is-not-a-function
 * 
 * 
 */
window.onload = function () {
  document.addEventListener("deviceready", init, false);

  window.screen.orientation.lock('portrait-primary');

  var c = document.getElementById('myCanvas');    //init the canvas
  this.ctx = c.getContext("2d");                  //seting ctx to 2d content
  this.ctx.canvas.width = window.innerWidth;      //seting the screen width
  this.ctx.canvas.height = window.innerHeight;    //seting the screen height
  this.monsterPosX = window.innerWidth / 2 - 25;  //seting the monster position X
  this.monsterPosY = window.innerHeight / 2 - 25; //seting the monster position Y

  displayMonster();     // call the displayMonster()
}

/**directly sets frequency: 50
 * NOTE: higher frequency will create much more responsive exp for the end user
 */
function init() {
  var accel = navigator.accelerometer.watchAcceleration(success, accelError, {frequency: 50});
}

/**success(accel)
 * recieves data from accelerometer vai parameter
 * -clears the screen by resetting ctx
 * -- after clear:
 *  modify monsterPosX by subtracting value of the accelerometer X axis reading 
 *  modify monsterPosY by adding value of the accelerometer Y axis reading.
 * X is subtracted and Y is added due to the values that are returned from the accelerometer. If we added X, then the graphic would move to the left when the screen was tilted right.
 * drawImage() 
 * 
 * @param {*} accel 
 */
function success(accel){
  ctx.canvas.width = ctx.canvas.width;    //clears the screen by resetting ctx
  monsterPosX -= accel.x;                 
  monsterPosY += accel.y;
  ctx.drawImage(monster, monsterPosX, monsterPosY);
}

/** displayMonster()
 * sets the monster var as an image obj
 * sets the source file to monster.gif
 * when the file is loaded draw monster to ctx location at monsterPosX, monsterPosY
 */
function displayMonster(){
  monster = new Image();
  monster.onload = function(){
    ctx.drawImage(monster, monsterPosX, monsterPosY);
  }
  monster.src = "img/monster.gif";
}

function accelError(error) {
  alert('Accelerometer Error');
}