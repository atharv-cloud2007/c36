var hypnoticBall, database;
var form,player,game;
var gamestate=0
var playercount
function setup(){
  database = firebase.database();
  createCanvas(400,400)
  game=new Game()
  game.readState()
  game.start()
}
function draw(){
  background("white");
  
}
