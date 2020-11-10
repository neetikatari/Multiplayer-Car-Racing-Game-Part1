class Form{
    constructor(){}
//create h2,input and button on the login form
//set the position and name of them elements
    display(){
        var title = createElement('h1')
        title.html("car racing game!")
        title.position(380,100)

        var input = createInput("Name")
        var button = createButton("Play")
        var greeting = createElement('h2')
        input.position(380,240)
        button.position(440,300)
//when player pressed over the button player count is increased and updated
//button and input is hidden
//greeting message to the player is displayed

        button.mousePressed(function(){
            input.hide()
            button.hide()
    //.value()- gives the value that was passed inside the input
            var name = input.value()

            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)

            greeting.html("hellow "+name)
            greeting.position(380,250)

        })

    }

}