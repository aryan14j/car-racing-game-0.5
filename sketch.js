var canvas;
var database;
var form, game, player;
var gameState=0;
var playerCount;


function setup(){
  canvas=createCanvas(400,400);
  database=firebase.database();
  
  game = new Game();
  game.start();
}



function draw(){

}