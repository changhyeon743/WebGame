var testScene = new Scene();
testScene.init = function() {
    preloadImage("bullet.png")
    this.player = this.addImage(new GameImage("player.png"))
    this.player.setZ(-1);

    this.bullets = [];

    this.bulletETime = 0;
}
testScene.update = function() {
    this.bulletETime+=deltaTime;
    //this.player.rotation+=0.1;
    if (keys["KeyW"] > 0) {
        this.player.pos.y-=200 * deltaTime;
    }
    if (keys["KeyS"] > 0) {
        this.player.pos.y+=200 * deltaTime;
    }
    if (keys["KeyA"] > 0) {
        this.player.pos.x-=200 * deltaTime;
    }
    if (keys["KeyD"] > 0) {
        this.player.pos.x+=200 * deltaTime;
    }
    if (keys["KeyQ"] > 0) {
        this.player.rotation-=0.1 * deltaTime;
    }
    if (keys["KeyE"] > 0) {
        this.player.rotation+=0.1 * deltaTime;
    }
    if (keys["Space"] > 0) {
        if(bulletETime >= 1) {
            let b = this.addImage(new GameImage("bullet.png"))
            b.pos = {x:this.player.pos.x+this.player.image.width/2-b.image.width/2,y:this.player.pos.y}
            this.bullets.push(b)
            bulletETime -= 1;
        }

        
    }
    
    for(let i=0;i<this.bullets.length;i++) {
        if (this.bullets[i].pos.y <= 0) {
            this.bullets.splice(i,1);
            continue;
        }

        this.bullets[i].pos.y-=400 * deltaTime;
        
    }
}
testScene.start();