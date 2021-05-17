class Form {
 constructor(){

 }
 display(){
     var title=createElement("h1")
     title.html("Car Racing Game")
     title.position(200,100)
     
     var input= createInput("name")
     input.position(200,200)

     var button=createButton("play")
     button.position(200,300)

     button.mousePressed(function(){
         input.hide()
         button.hide()
         var name=input.value()
         playercount=playercount+1
         player.update(name)
         player.updateCount(playercount)
         var greeting =createElement("H3")
         greeting.html("hello"+name)
         greeting.position(200,350)
     })
 }
}