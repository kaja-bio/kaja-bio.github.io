
class dayScene extends Phaser.Scene {
  constructor() {
    super({ key: 'dayScene' });
  }

  preload() {
    this.load.image("bg", "images_copy/hiking_background_textbox_green.png");
    this.load.image("start", "images_copy/car.png");
    this.load.image("tent", "images_copy/tent.png");
    this.load.image("lake", "images_copy/lake_real.png"); //REDO THIS WITH TRANSPARENT BACKGROUND 
    this.load.image("mountain", "images_copy/mountain.png");
    this.load.image("food", "images_copy/food_stall.png");
    this.load.image("bg_night", "images_copy/night_background.png");
    this.load.image("player", "images_copy/casper.png");
  }
  create(data, time, game) {
    this.bg = this.add.sprite(0, 0, "bg").setOrigin(0, 0);
    this.start = this.add.image(100, 380, "start").setScale(0.6); // replace start with car
    this.tent = this.add.image(1050, 400, "tent").setScale(.3);
    this.lake = this.add.image(300, 210, "lake").setScale(1.3);
    this.mountain = this.add.image(500, 660, "mountain").setScale(.5);
    this.food = this.add.image(750, 200, "food").setScale(.3);
    this.player = this.physics.add.sprite(40, 420, "player").setScale(0.3)
    this.textBox = this.add.text(100, 800, 'Path Integration: The Hike', { fontFamily: 'Arial', fontSize: 22, color: '#000000' });

    // Enable collision with the world bounds
    this.player.setCollideWorldBounds(true);

    // Enable physics for other objects
    this.physics.world.enable([this.start, this.tent, this.lake, this.mountain, this.food]);
    this.counter = 0
    this.lakeText = true;
    this.mountainText = true;
    this.foodText = true;
    this.tentText = true;

  }
  update(time, delta) {
    const keyLeftObj = this.input.keyboard.addKey('LEFT');
    const keyRightObj = this.input.keyboard.addKey('RIGHT');
    const keyUpObj = this.input.keyboard.addKey('UP');
    const keyDownObj = this.input.keyboard.addKey('DOWN');
    if (keyLeftObj.isDown) {
      this.player.setScale(-0.3, 0.3)
      this.player.x -= 5;
    }
    if (keyRightObj.isDown) {
      this.player.setScale(0.3, 0.3)
      this.player.x += 5;
    }
    if (keyUpObj.isDown) {
      this.player.y -= 5;
    }
    if (keyDownObj.isDown) {
      this.player.y += 5;
    }
    if (time > 3000) {
      this.textBox.text = "You're out on a fun camping trip with your friends. It's pretty sweltering outside - how about going to the lake first?"
    }
    this.physics.add.collider(this.player, this.lake, (player, lake) => {
      if (this.counter == 0 && this.lakeText) {
        this.counter = 1;
        console.log(this.counter);
        this.lakeText = false;
      }
    });

    this.physics.add.collider(this.player, this.mountain, (player, mountain) => {
      if (this.counter == 1 && this.mountainText) {
        this.counter += 1;
        console.log(this.counter);
        this.mountainText = false;
      }
    });

    this.physics.add.collider(this.player, this.food, (player, food) => {
      if (this.counter == 2 && this.foodText) {
        this.counter += 1;
        this.foodText = false;
      }
    });

    this.physics.add.collider(this.player, this.tent, (player, tent) => {
      if (this.counter == 3 && this.tentText) {
        this.counter += 1;
        this.tentText = false;
      }
    });
    if (this.counter == 1) {
      this.textBox.text = "That was refreshing! You're ready to take on the mountain."
      this.lakeText = false;
    }
    if (this.counter == 2) {
      this.textBox.text = "You've been reminded why you don't go hiking very often. That was EXHAUSTING."
      this.textBoxz = this.add.text(100, 850, "Let's get some food.", { fontFamily: 'Arial', fontSize: 22, color: '#000000' });
    }
    if (this.counter == 3) {
      this.textBox.text = "That hit the spot. Let's set up camp!"
      this.textBoxz.destroy()
    }
    if (this.counter == 4) {
      this.textBox.text = "Oh no!"
      this.scene.switch('nightScene')
    }



  }
}
export default dayScene