const quizData = [
    {
        question: "How old is Adam",
        a: "10",
        b: "20",
        c: "24",
        d: "26",
        correct: "c"
    },{
        question: "What is the most used programing language in 2023>",
        a: "java",
        b: "python",
        c: "JS",
        d: "C++",
        correct: "c"
    },{
        question: "What is the most interesting job you can have",
        a: "automatic",
        b: "programist",
        c: "robber",
        d: "banker",
        correct: "b"
    },{
        question: "Who is the marshal of the Sejm",
        a: "Szymon Hołownia",
        b: "Elżbieta Witek",
        c: "Donald Tusk",
        d: "Kosiniak-Kamysz",
        correct: "a"
    },{
        question: "What was first, Java or Python",
        a: "Java",
        b: "Python",
        c: "both at the same time",
        d: "none of them exist",
        correct: "c"
    }
];

const questionEl = document.getElementById("question_header");
const a_text = document.getElementById("a_text"); 
const b_text = document.getElementById("b_text"); 
const c_text = document.getElementById("c_text"); 
const d_text = document.getElementById("d_text"); 
const subBut = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

const fillQuestions = () => {
    
    const questionName = quizData[currentQuestion];

    questionEl.innerHTML = questionName.question;
    a_text.innerText = questionName.a;
    b_text.innerText = questionName.b;
    c_text.innerText = questionName.c;
    d_text.innerText = questionName.d;

    return questionName;
};

const getSelected = () => {
    const answerEls = document.querySelector('input[name="answer"]:checked');
    if(answerEls){
        return answerEls.id;
    };
};
subBut.addEventListener("click", () => {
    let question_name = fillQuestions();
    let answer = getSelected();
    if(currentQuestion<quizData.length){    
        if(answer){
            
            if(answer == question_name.correct){
                score++;
            };
            if(currentQuestion < quizData.length -1){
                currentQuestion++;
                fillQuestions();
            }else{
                alert("skonczyles")
            }
            
            
        }
    }
})
if(currentQuestion==0){
    fillQuestions();
}else{

}

