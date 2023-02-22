export default class PreloadScene extends Phaser.Scene
{
    constructor()
    {
        super({ key: 'PreloadScene' });
    }

    preload()
    {
        this.load.image("background", "assets/images/board.png");
        this.load.audio("type1", "assets/audio/type1.wav");
        this.load.audio("type2", "assets/audio/type2.wav");
        this.load.audio("score_up", "assets/audio/score_up.wav");
        this.load.audio("wrong", "assets/audio/wrong.wav");
        this.load.audio("celebrate", "assets/audio/celebrate.wav");
        this.load.audio("bounce", "assets/audio/bounce.wav");
        this.load.audio("music", "assets/audio/music.mp3");
    }

    create()
    {
        this.scene.start('MainScene');
    }
}
