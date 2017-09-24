function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


// Enemies our player must avoid
var Enemy = function(x,y) {
	
	this.x=x
	this.y=y
	
	
	
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
	this.width=50
	this.height=50
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
	
	this.x=this.x+3
	if (this.x>ctx.canvas.width){
		
		//this.x=getRandomInt(0,100)*-1
			
		this.x=getRandomInt(0,100)*-3
	}
	
	this.checkCollisions();
	//الحركه
	
	
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};


Enemy.prototype.checkCollisions = function() {
	
	if (this.x < player.x + player.width &&
   this.x + this.width > player.x &&
   this.y < player.y + player.height &&
   this.height + this.y > player.y) {
		alert("you lose")
		player.reset();
		
	}

}
	


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
	
    player.handleInput(allowedKeys[e.keyCode]);
});

var allEnemies = [new Enemy(30,50),new Enemy(1,150),new Enemy(30,320),new Enemy(6,220)];


////Player

var Player = function() {
	
	this.x=250
	this.y=420
    this.sprite = 'images/char-boy.png';
	this.width=50
	this.height=50
	
	
	/////fix
};

Player.prototype.update = function(dt) {
	
	if (this.y < 10) {
			alert("congratiolations you win")
		this.reset();
	}
	//this.x=this.x+3
	//if (this.x>ctx.canvas.width){		
	//this.x=getRandomInt(0,100)*-3
	//}
};

Player.prototype.handleInput = function(directions) {	
	if (directions=="up"){
		
		this.y -=83;
	}//else {  this.reset() }
	
	if (directions=="down"&& this.y<420){
		
		this.y +=83;
	}
	if (directions=="left" && this.x > 0){
		
		this.x -=101;
	}
	
	if (directions=="right" && this.x < 505){
		//console.log(this.x);
		this.x +=101;
	}
	
};


Player.prototype.reset = function() {	

this.x=250
this.y=420

}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
var player = new Player();

