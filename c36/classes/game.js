class Game{
 constructor(){
 }
 readState(){
  var gameStateRef=database.ref("gamestate")
  gameStateRef.on("value",function(data){
      gamestate=data.val()
  })
 }
 updateState(state){
 database.ref("/").update({
     gamestate:state
 })
 }
 start(){
     if(gamestate==0){
         form=new Form()
         form.display()
         player=new Player()
         player.readCount() 
     }
 }
}
