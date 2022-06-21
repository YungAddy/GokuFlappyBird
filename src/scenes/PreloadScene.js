import Phaser from "phaser";

class MenuScene extends Phaser.Scene {
    constructor(config){
        super('PreloadScene');
    }

    preload(){
        // this context = scene
		// contains functions and properties we can use
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
		// x + y + key of image
		this.scene.start('MenuScene')
	}
}

export default MenuScene;