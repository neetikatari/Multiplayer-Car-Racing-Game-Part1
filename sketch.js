//global variables
var database;
var playerCount;
var gameState = 0;
var form,player,game;

function setup(){
  createCanvas(400,400);
  //database linking
  database = firebase.database();

  //to start game and make forms so players can enter into the form
  game = new Game();
  game.getState();
  game.start()
}

function draw(){
  background("white");

}