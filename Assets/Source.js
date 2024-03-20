const Questions = [

    {
        Ques: "What is CSE?",
        options: ["1. Computer Science Engineering", "2. Computer Science", "3. Cse", ],
        answer: "1. Computer Science Engineering"
    },
    {
        Ques: "What is Rohit?",
        options: ["1. Just A Name", "2. Nothing", "3. Computer Science Engineering", ],
        answer: "2. Nothing"
    },
    {
        Ques: "What is Ankit?",
        options: ["1. just A Name", "2. Lezend", "3. Computer Science Engineering", ],
        answer: "2. Lezend"
    },
    {
        Ques: "What is what?",
        options: ["1. Kuch to hai", "2. hmm", "3. Kya?", ],
        answer: "3. Kya?"
    },

];

function getrandomnum() {

    if (Questions.length === 0) {

        exp = "All Questions are over";
        Questions = Question.exp;

    }

    const randnum = Math.floor(Math.random() * Questions.length);
    const randomques = Questions.splice(randnum, 1)[0];
    return randomques;

}

function nextques() {

    const randomques = getrandomnum();

    const Question = document.getElementById('Question');
    Question.textContent = randomques.Ques;

    const option1 = document.getElementById('option1');
    option1.textContent = randomques.options[0];

    const option2 = document.getElementById('option2');
    option2.textContent = randomques.options[1];

    const option3 = document.getElementById('option3');
    option3.textContent = randomques.options[2];

    const ans = document.getElementById('answer');
    ans.textContent = randomques.answer;

}

function checkAnswer(optionIndex) {
    const selectedOption = document.getElementById(`option${optionIndex + 1}`);
    const correctOptionIndex = randomques.options.findIndex(option => option === randomques.answer);
    const correctOption = document.getElementById(`option${correctOptionIndex + 1}`);

    if (optionIndex === correctOptionIndex) {
        selectedOption.style.backgroundColor = "green";
    } else {
        selectedOption.style.backgroundColor = "red";
        correctOption.style.backgroundColor = "green";
    }
}

const next = document.getElementById('next');