const Questions = [{
        Ques: "What is CSE?",
        options: ["1. Computer Science Engineering", "2. Computer Science", "3. Cse"],
        answer: "1. Computer Science Engineering"
    },
    {
        Ques: "What is Rohit?",
        options: ["1. Just A Name", "2. Nothing", "3. Computer Science Engineering"],
        answer: "2. Nothing"
    },
    {
        Ques: "What is Ankit?",
        options: ["1. just A Name", "2. Lezend", "3. Computer Science Engineering"],
        answer: "2. Lezend"
    },
    {
        Ques: "What is what?",
        options: ["1. Kuch to hai", "2. hmm", "3. Kya?"],
        answer: "3. Kya?"
    },
];

let currentQuestion = null;

function getrandomnum() {
    if (Questions.length === 0) {
        alert("All Questions are over");
        return;
    }
    const randnum = Math.floor(Math.random() * Questions.length);
    currentQuestion = Questions.splice(randnum, 1)[0];
}

function nextques() {
    getrandomnum();
    const nextsound = document.getElementById('nextSound');
    const Question = document.getElementById('Question');
    Question.textContent = currentQuestion.Ques;

    const option1 = document.getElementById('option1');
    option1.textContent = currentQuestion.options[0];

    const option2 = document.getElementById('option2');
    option2.textContent = currentQuestion.options[1];

    const option3 = document.getElementById('option3');
    option3.textContent = currentQuestion.options[2];

    option1.style.backgroundColor = "";
    option2.style.backgroundColor = "";
    option3.style.backgroundColor = "";
    nextsound.play();
}

function checkAnswer(optionIndex) {
    const wrongsound = document.getElementById('wrongSound');
    const correctsound = document.getElementById('correctSound');
    const selectedOption = document.getElementById(`option${optionIndex + 1}`);
    const correctOptionIndex = currentQuestion.options.findIndex(option => option === currentQuestion.answer);
    const correctOption = document.getElementById(`option${correctOptionIndex + 1}`);

    if (optionIndex === correctOptionIndex) {
        selectedOption.style.backgroundColor = "#1ed31e";
        correctsound.play();
    } else {
        selectedOption.style.backgroundColor = "red";
        correctOption.style.backgroundColor = "#1ed31e";
        wrongsound.play();
    }
}

nextques();

function stopTimeSound() {
    var timeSound = document.getElementById('timeSound');
    timeSound.pause();
    timeSound.currentTime = 0;
}
