const Questions = [

    {
        Ques: "What is CSE?",
        options: ["1. Computer Science Engineering","2. Computer Science","3. Cse",],
        answer: "1. Computer Science Engineering"
    },
    {
        Ques: "What is Rohit?",
        options: ["1. Just A Name","2. Nothing","3. Computer Science Engineering",],
        answer: "2. Nothing"
    },
    {
        Ques: "What is Ankit?",
        options: ["1. just A Name","2. Lezend","3. Computer Science Engineering",],
        answer: "2. Lezend"
    },
    {
        Ques: "What is what?",
        options: ["1. Kuch to hai","2. hmm","3. Kya?",],
        answer: "3. Kya?"
    },

];

function getrandomnum() {

    const randnum = Math.floor(Math.random()*Questions.length);
    const randomques = Questions[randnum];
    return randomques;

}

const randomques = getrandomnum();

console.log(randomques.Ques);
console.log(randomques.options);
console.log(randomques.answer);

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

function showans() {

    ans.style.display = "flex";

}