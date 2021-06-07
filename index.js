const input = require('readline-sync');

let candidateName = "Erin";
let quizQuestion = " True or false: 5000 meters = 5 kilometers?";
let correctQuizAnswer = "True";
let candidateAnswer = "False";
let spacing = " ";
let questions = [" 1) True or false: 5000 meters = 5 kilometers?" , "2) (5+3)/2*10=?" , "3) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?" , "4) Who was the first American woman in space?" , "5) What is the minimum crew size for the International Space Station (ISS)?"];
let rightAnswers = ["True" , "40" , "Trajectory" , "Sally Ride" , "3"];
let userAnswers = [];
let candidate = input.question("Candidate name? ");
console.log(spacing);
let right = 0;
let wrong = 0;

for (let i = 0; i < questions.length; i++) {
  let question = input.question(questions[i]);
  userAnswers.push(question);
  if (userAnswers[i].toUpperCase() === rightAnswers[i].toUpperCase()) {
    console.log(`Your Answer: ${userAnswers[i]}`);
    console.log(`Correct Answer: ${rightAnswers[i]}`);
    console.log(spacing);
    right += 1;
  }else{
    console.log(`Your Answer: ${userAnswers[i]}`);
    console.log(`Correct Answer: ${rightAnswers[i]} `);
    console.log(spacing);
    wrong += 1;
  }
 }

let percent = (right/5) * 100;
console.log(`>>> Overall Grade: ${percent}% (${right} of 5 responses correct) <<<`);
if (percent <= 60) {
  console.log(">>> Status: FAILED <<<");
} else {
  console.log(">>> Status: PASSED <<<");
}


