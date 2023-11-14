class Player {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.power = 10;
    }
  
    hit(power) {
      this.health -= power;
    }
  
    useItem(item) {
      this.health += item.health;
      this.power += item.power;
    }
  
    showStatus() {
      return `${this.name} (Health => ${this.health}, Power => ${this.power})`;
    }
  }
  
class ShootingGame {
    constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
      this.currentPlayer = player1;
    }
  
    getRandomItem() {
      // Returns an object with random health or power increase
      return {
        health: Math.floor(Math.random() * 2) * 10, // 0 or 10
        power: Math.floor(Math.random() * 2) * 10 // 0 or 10
      };
    }
  
    start() {
      while (this.player1.health > 0 && this.player2.health > 0) {
        console.log(this.player1.showStatus());
        console.log(this.player2.showStatus());
  
        // Each player gets a random item
        const itemForPlayer1 = this.getRandomItem();
        const itemForPlayer2 = this.getRandomItem();
  
        this.player1.useItem(itemForPlayer1);
        this.player2.useItem(itemForPlayer2);
  
        console.log(`After getting items:`);
        console.log(this.player1.showStatus());
        console.log(this.player2.showStatus());
  
        // Players shoot each other
        this.currentPlayer === this.player1
          ? this.player2.hit(this.player1.power)
          : this.player1.hit(this.player2.power);
  
        // Switch turns
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
      }
  
      const winner = this.player1.health > 0 ? this.player1.name : this.player2.name;
      console.log(`Winner is: ${winner}`);
    }
  }
  
  const player1 = new Player("Player A");
  const player2 = new Player("Player B");
  const game = new ShootingGame(player1, player2);
  game.start();
  