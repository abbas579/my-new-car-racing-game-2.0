class Game{
    constructor(){}
    getState(){
    var gamestateref=database.ref("gameState");
    gamestateref.on("value",function(){
        gameState=data.val();
    })

    }
    update(State){
    database.ref("/").update({
    gameState:State
    });
    }
    start(){
    if(gameState===0){
    player=new Player();
    player.getCount();
    form=new Form();
    form.display();
    }
    }
}
