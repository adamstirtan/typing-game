import 'phaser';

export default class Game extends Phaser.Scene
{
    constructor()
    {
        super('Typing Game');
    }

    preload ()
    { }

    create ()
    { }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: "#000000",
    parent: "game-container",
    width: 960,
    height: 540,
    scene: Game
};

const game = new Phaser.Game(config);
