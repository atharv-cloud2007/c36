class Player{
    constructor(){
    }
    readCount(){
     var playerCountRef=database.ref("playercount")
     playerCountRef.on("value",function(data){
        playercount=data.val()
     })
    }
    updateCount(count){
    database.ref("/").update({
        playercount:count
    })
    }
    update(name){
    var playerName="players/player"+playercount
    database.ref(playerName).set({
        Name:name
    })
    }
   }