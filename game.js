let score = 0;
const images = [
    { url: "img/Image_1.jpeg", isGeneratedByAI: true },
    { url: "img/image_2.jpeg", isGeneratedByAI: true },
    { url: "img/image_3.jpeg", isGeneratedByAI: true },
    { url: "img/image_4.jpeg", isGeneratedByAI: true },
    { url: "img/image_5.jpeg", isGeneratedByAI: true },
    { url: "img/Image_6.jpeg", isGeneratedByAI: true },
    { url: "img/image_7.png", isGeneratedByAI: true },
    { url: "img/image_8.png", isGeneratedByAI: true },
    { url: "img/image_9.png", isGeneratedByAI: true },
    { url: "img/image_10.png", isGeneratedByAI: true },
     { url: "img/image_11.png", isGeneratedByAI: true },
     { url: "img/image_12.png", isGeneratedByAI: true },
    { url: "img/image_13.png", isGeneratedByAI: true },
    { url: "img/image_14.png", isGeneratedByAI: true },
    { url: "img/image_15.png", isGeneratedByAI: true },
    { url: "img/image_16.png", isGeneratedByAI: true },
    // Add more images as needed
];

const imageHeader = document.getElementById("image-header");
const gameImage = document.getElementById("game-image");
const gameForm = document.getElementById("game-form");
const scoreDisplay = document.getElementById("score");

function displayImage() {
    const image = images[Math.floor(Math.random() * images.length)];
    imageHeader.textContent = "Is this image generated by AI?";
    gameImage.src = image.url;
    gameForm.addEventListener("submit", checkAnswer);
}

function checkAnswer(event) {
    event.preventDefault();
    const userAnswer = gameForm.answer.value.toLowerCase();
    const image = images.find(image => gameImage.src.includes(image.url));
    if (userAnswer === String(image.isGeneratedByAI).toLowerCase()) {
        alert("Correct!");
        score++;
    } else {
        alert("Incorrect.");
    }
    scoreDisplay.textContent = `Score: ${score}`;
    displayImage();
}

displayImage();
