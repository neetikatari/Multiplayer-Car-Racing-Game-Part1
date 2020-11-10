class Game{
    constructor(){}
//read gameState from database
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){gameState = data.val()})
    }
//to update the database
    update(state){
        database.ref('/').update({gameState:state});
    }
//if gameState is 0 them game is in WAIT state create player object and form object 
    start(){
        if(gameState === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }
    }

}