class Form
{
    constructor()
    {
    
    }
    display()
    {
    var title=createElement('h1')
    title.html("multiplayer car racing ")
    title.position(250,100)
    var input=createInput("name")
    input.position(250,200)
    var button=createButton('play')
    button.position(250,300)
    var greeting=createElement('h3')
    button.mousePressed(function(){
input.hide()
button.hide()
var name =input.value()
playerCount+=1
player.update(name)
player.updateCount(playerCount)
greeting.html("Hello "+ name )
greeting.position(230,160)
    })

    
    }
}