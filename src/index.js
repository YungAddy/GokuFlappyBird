import Phaser, { Scene } from "phaser";
import PreloadScene from "./scenes/PreloadScene";
import PlayScene from "./scenes/PlayScene";
import MenuScene from "./scenes/MenuScene";
import ScoreScene from "./scenes/ScoreScene";
import PauseScene from "./scenes/PauseScene";

// ! npm run dev starts localhost:8080
// npm run build makes build folder
console.log(
 "%cIf you used Developer Tools to find this, then follow me on Instagram! @yungaddydev",
 "font-weight: bold; font-size: 30px;color: #aa81ff  ; text-shadow: 3px 3px 0 #b837ea , 6px 6px 0 #aa11bb  , 9px 9px 0 #90006c  , 12px 12px 0 #56002a  , 15px 15px 0 #25000d  , 18px 18px 0 #47054f  , 21px 21px 0 #15021e "
);

const WIDTH = 800;
const HEIGHT = 600;
const BIRD_POSITION = { x: WIDTH / 10, y: HEIGHT / 2 };

const SHARED_CONFIG = {
 width: WIDTH,
 height: HEIGHT,
 startPosition: BIRD_POSITION,
};

const Scenes = [PreloadScene, MenuScene, ScoreScene, PlayScene, PauseScene];
const createScene = (Scene) => new Scene(SHARED_CONFIG);
const initScenes = () => Scenes.map(createScene);

const config = {
 // Default Renderer: WebGL
 type: Phaser.AUTO,
 ...SHARED_CONFIG,
 pixelArt: true,
 physics: {
  // arcade physics plugin, manages physics simulation
  default: "arcade",
  arcade: {
   debug: true,
   // gravity: { y:400 }
  },
 },
 scene: initScenes(),
};

//Global VARIABLES
const VELOCITY = 200;
// 4 pipes are rendered at a time

// where the bird starts in game
// 10 is 1/10th of width of sky for placement
const initalBirdPosition = { x: config.width / 10, y: config.height / 2 };

// The value null represents the intentional absence of any object value.
let bird = null;
let pipes = null;

// Creates game, pass through configurations
new Phaser.Game(config);
