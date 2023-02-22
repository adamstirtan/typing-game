export default class FallingWord extends Phaser.GameObjects.GameObject
{
    private wordText: Phaser.GameObjects.Text;
    private typingText: Phaser.GameObjects.Text;

    private word: string;
    private speed: number;
    private currentIndex: number;

    constructor(scene: Phaser.Scene, word: string, speed: number = 60)
    {
        super(scene, 'falling-word');

        this.word = word;
        this.speed = speed;
        this.currentIndex = 0;

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.wordText = scene.add.text(480, 200, this.word, {
            font: "64px Arial",
            color: "#ccc"
        });

        this.typingText = scene.add.text(480, 200, "", {
            font: "64px Arial",
            color: "#000"
        });
    }

    get nextLetter() {
        return this.word[this.currentIndex];
    }

    update(time: number, delta: number): void
    {
        const fallAmount = this.speed * delta / 1000;

        this.wordText.y += fallAmount;
        this.typingText.y = this.wordText.y;
    }

    public keyTyped(): void
    {
        this.typingText.text += this.wordText.text[this.currentIndex++];
    }

    public isComplete(): boolean
    {
        return this.currentIndex === this.wordText.text.length;
    }
}