class nightScene extends Phaser.Scene{constructor(){super({key:"nightScene"})}preload(){this.load.image("nightbg","images/night_background_real.png"),this.load.image("player","images/casper_asleep.png")}create(e){this.nightbg=this.add.sprite(0,0,"nightbg").setOrigin(0,0),this.player=this.physics.add.sprite(1050,400,"player").setScale(.3),this.player.setCollideWorldBounds(!0),this.textBox=this.add.text(100,820,"A thunderstorm hit and your tent flooded!",{fontFamily:"Arial",fontSize:22,color:"#000000"}),this.textBox=this.add.text(100,850,"Quick, get back to your car!",{fontFamily:"Arial",fontSize:22,color:"#000000"})}update(e,t){const i=this.input.keyboard.addKey("LEFT"),s=this.input.keyboard.addKey("RIGHT"),a=this.input.keyboard.addKey("UP"),r=this.input.keyboard.addKey("DOWN");i.isDown&&(this.player.setScale(-.3,.3),this.player.x-=5),s.isDown&&(this.player.setScale(.3,.3),this.player.x+=5),a.isDown&&(this.player.y-=5),r.isDown&&(this.player.y+=5),this.player.x<80&&this.player.y<400&&this.player.y>250&&this.scene["switch"]("endScene")}}export default nightScene;