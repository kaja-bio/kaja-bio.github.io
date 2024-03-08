class titleScene extends Phaser.Scene {
  constructor (){
    super({key: 'titleScene'});
    this.titleScenebackgroundimage = null
    this.startButton = null
  }

  preload(){
    console.log("title")
    this.load.image( 'titleScenebackgroundimage', '../img/images/titlebackground.png');
    this.load.image('startButton', '../img/images/start_button.png')
  }
  create (data){
    this.titleScenebackgroundimage = this.add.sprite(0,0, 'titleScenebackgroundimage').setOrigin(0,0);;
    this.startButton = this.add.sprite(600,550, 'startButton').setScale(.8).setInteractive({useHandCursor:true});
    this.startButton.on('pointerdown', () => this.clickButton())

  }
  update(time, delta){
    }
  clickButton (){
    this.scene.start('dayScene')
  }
}
export default titleScene