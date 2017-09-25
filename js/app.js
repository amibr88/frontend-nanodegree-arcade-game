function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}
// Enemies details
var Enemy = function(x,y) {
	
	this.x=x
	this.y=y
    this.sprite = 'images/enemy-bug.png';
	this.width=50
	this.height=50
};

//enemy update
Enemy.prototype.update = function(dt) {
	
	this.x=this.x+3
	if (this.x>ctx.canvas.width){
		
		// enemy movment
			
		this.x=getRandomInt(0,100)*-3
	}
	
	this.checkCollisions();
};

// check collisions with player 
Enemy.prototype.checkCollisions = function() {
	
	if (this.x < player.x + player.width &&
   this.x + this.width > player.x &&
   this.y < player.y + player.height &&
   this.height + this.y > player.y) {
		alert("ههههههههههه خسرت يافاشل")
		player.reset();
		
	}
}
	
//enemyies render
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//event listener 
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
	
    player.handleInput(allowedKeys[e.keyCode]);
});

// enemimes & positions
var allEnemies = [new Enemy(30,50),new Enemy(1,150),new Enemy(30,320),new Enemy(6,220)];


////Player///

//player details
var Player = function() {
	
	this.x=250
	this.y=420
    this.sprite = 'images/char-boy.png';
	this.width=50
	this.height=50
};

//player update status 
Player.prototype.update = function(dt) {
	
	if (this.y < 10) {
			alert("مبرووووك ترا فزت باللعبه ")
		this.reset();
	}
};
// the directions and arrows 

Player.prototype.handleInput = function(directions) {	
	if (directions=="up"){
		
		this.y -=101;
	}
	if (directions=="down"&& this.y<400){
		
		this.y +=83;
	}
	if (directions=="left" && this.x > 50){
		
		this.x -=101;
	}
	
	if (directions=="right" && this.x < 350){
		//console.log(this.x);
		this.x +=101;
	}
	
};

/// the reset 
Player.prototype.reset = function() {	

this.x=250
this.y=420

}
//render 
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
var player = new Player();
