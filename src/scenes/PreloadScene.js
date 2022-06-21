import Phaser from "phaser";

class MenuScene extends Phaser.Scene {
    constructor(config){
        super('PreloadScene');
    }

    preload(){
        // this context = scene
        // EXAMPLE: "In this scene/file, load image"
		// contains functions and properties we can use
        // give "key" to be called later
		this.load.image("sky", "assets/sky.png");
		this.load.spritesheet('bird',"assets/GokuFlying.png", {
            frameWidth: 31.5, frameHeight: 19,
        });
		this.load.image("pipe", "assets/pipe.png");
		this.load.image("pause", "assets/pause.png");
        this.load.image("back", "assets/back.png");
    }

    create(){
        this.createBG();
    }

    createBG() {
		// starting scene
		this.scene.start('MenuScene')
	}
}
// exported as Menu
export default MenuScene;