class endScene extends Phaser.Scene{constructor(){super({key:"endScene"})}preload(){this.load.image("endbg","img/images/end_scene.png")}create(e){this.endbg=this.add.sprite(0,0,"endbg").setOrigin(0,0)}update(e,n){}}export default endScene;