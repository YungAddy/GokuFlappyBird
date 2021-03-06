import Phaser from "phaser";

class BaseScene extends Phaser.Scene {
 constructor(key, config) {
  super(key);
  this.config = config;
  this.fontSize = 34;
  this.lineHeight = 42;
  this.fontOptions = { fontSize: `${this.fontSize}px`, fill: "#fff" };
  this.screenCenter = [config.width / 2, config.height / 2];
 }

 create() {
  this.createBG();
  // backButton START
  if (this.config.canGoBack) {
   const backButton = this.add
    .image(this.config.width - 10, this.config.height - 10, "back")
    .setOrigin(1)
    // How big/small
    .setScale(3)
    .setInteractive();

   backButton.on("pointerup", () => {
    this.scene.start("MenuScene");
   });
  }
  // backButton END
 }
 // This funciton is imported/called into "Preload"
 createBG() {
  // x + ,y + ,key of "image"/ "key"
  // Provide "middle quardinates" (width & height / 2)
  this.add.image(400, 300, "sky");
 }

 createMenu(menu, setupMenuEvents) {
  let lastMenuPositionY = 0;

  menu.forEach((menuItem) => {
   const menuPosition = [
    this.screenCenter[0],
    this.screenCenter[1] + lastMenuPositionY,
   ];
   menuItem.textGO = this.add
    .text(...menuPosition, menuItem.text, this.fontOptions)
    .setOrigin(0.5, 1);
   lastMenuPositionY += this.lineHeight;
   setupMenuEvents(menuItem);
  });
 }
}

// Functions from this scene/file is called into each scene except Prel
export default BaseScene;
