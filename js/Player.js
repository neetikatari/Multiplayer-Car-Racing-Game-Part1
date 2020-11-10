class Player{
    constructor(){}
//to get read the playerCount
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){playerCount=data.val()})
    }
//to update the playerCount
    updateCount(count){
        database.ref('/').update({playerCount:count})
    }
//to update the player.name
    update(name){
        var playerIndex="player"+playerCount
        database.ref(playerIndex).set({name:name})
    }
}