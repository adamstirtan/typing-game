import { Tilemaps } from "phaser";

import FallingWord from "../objects/fallingWord";
import Ground from "../objects/ground";

export default class MainScene extends Phaser.Scene
{
    constructor()
    {
        super({ key: 'MainScene' })
    }

    private static isAllowedKey = /^[0-9a-zA-Z ]+$/;

    // private words: string[] = [
    //     "fart attack", "boogie monster", "silly socks", "monster burp", "giggle fit", "crazy hat", "tickle tummy", "prank call", "silly walk", "funny face", "goofy grin", "jokes galore", "whoopee cushion", "haha hauler", "laughing loo",
    //     "slippery slide", "wacky wig", "silly songs", "noodle noodle", "clown car", "funny farm", "bouncing ball", "jumpy jelly", "giggly gorilla", "jolly jump", "silly circus", "hilarious hamster", "grinning gorilla", "funny fiesta", "joyful jester"
    // ];
    private words: string[] = [
        "a", "b", "c"
    ];

    private newWordDelay: number = 5000;
    private score: number = 0;

    private wordsGroup: Phaser.Physics.Arcade.Group;
    private groundGroup: Phaser.Physics.Arcade.StaticGroup;

    private fallingWords: FallingWord[];

    private scoreText: Phaser.GameObjects.Text;
    private type1Sound: Phaser.Sound.BaseSound;
    private type2Sound: Phaser.Sound.BaseSound;
    private scoreUpSound: Phaser.Sound.BaseSound;
    private wrongSound: Phaser.Sound.BaseSound;
    private celebrateSound: Phaser.Sound.BaseSound;
    
    create()
    {
        this.add.image(480, 270, "background");

        this.scoreText = this.add.text(630, 70, "Score: " + this.score, {
            font: "24px Arial",
            color: "#222"
        });

        this.type1Sound = this.sound.add("type1");
        this.type2Sound = this.sound.add("type2");
        this.scoreUpSound = this.sound.add("score_up");
        this.wrongSound = this.sound.add("wrong");
        this.celebrateSound = this.sound.add("celebrate");

        this.wordsGroup = this.physics.add.group({
            classType: FallingWord
        });

        this.groundGroup = this.physics.add.staticGroup({
            classType: Ground
        });
        this.groundGroup.create(0, 0, "ground").refreshBody();

        this.time.addEvent({
            delay: this.newWordDelay,
            callback: this.addNewWord,
            callbackScope: this,
            loop: true
        });

        this.physics.add.collider(this.wordsGroup, this.groundGroup);

        //this.music = this.sound.add("music");

        //this.music.setLoop(true);
        //this.music.play();

        //this.fallingWords = [];
        //this.fallingWords.push(new FallingWord(this, this.newWord()));

        // this.input.keyboard.on("keydown", (event: KeyboardEvent) => {
        //     if (!event.key.match(MainScene.isAllowedKey)) {
        //         return;
        //     }
    
        //     const roll = Math.random() < 0.75;
    
        //     if (roll) {
        //         this.type1Sound.play();
        //     } else {
        //         this.type2Sound.play();
        //     }

        //     this.fallingWords.forEach((item, index, object) => {
        //         if (event.key === item.nextLetter) {
        //             item.keyTyped();
        //         }

        //         if (item.isComplete()) {
        //             this.scoreUpSound.play();

        //             this.fallingWords.splice(index, 1);
        //             item.destroy();

        //             this.fallingWords.push(new FallingWord(this, this.newWord()));
        //         }
        //     });
    
        // });
    }

    update(time: number, delta: number)
    {
        // this.fallingWords.forEach(item => {
        //     item.update(time, delta);
        // });
    }

    private addNewWord()
    {
        const newWord = new FallingWord(this, this.newWord(), 100);
        this.wordsGroup.add(newWord);
    }

    private handleKeyDown(event: KeyboardEvent): void
    {

        // if (event.key !== this.word[this.typingText.text.length]) {
        //     this.wrongSound.play();

        //     if (this.score > 0) {
        //         this.score--;
        //     }

        //     this.scoreText.text = "Score: " + this.score;

        //     this.newWord();

        //     this.typingText.text = "";
        //     this.wordText.text = this.word;

        //     return;
        // }

        // this.typingText.text += event.key;

        // if (this.typingText.text === this.word) {
        //     this.score++;

        //     if (this.score % 10 == 0) {
        //         this.celebrateSound.play();
        //     } else {
        //         this.scoreUpSound.play();
        //     }

        //     this.scoreText.text = "Score: " + this.score;

        //     this.newWord();

        //     this.typingText.text = "";
        //     this.wordText.text = this.word;
        // }
    }

    private newWord(): string
    {
        return Phaser.Math.RND.pick(this.words);
    }
}
