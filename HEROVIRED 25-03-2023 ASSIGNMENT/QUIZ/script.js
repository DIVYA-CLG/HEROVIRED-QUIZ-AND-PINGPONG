const data = [
    {
        question: "The latest HTML standard is?",
        a: "HTML4.0",
        b: "XML",
        c: "SGML",
        d: "HTML 5.0",
        correct: "d",
    },
    {
        question: "Identify the incorrect HTML tag among the following?",
        a: "<input>",
        b: "<list>",
        c: "<textarea>",
        d: "<select>",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "How many sizes of headers are available in HTML by default?",
        a: "5",
        b: "6",
        c: "1",
        d: "3",
        correct: "b",
    },
        {
        question: "HTML files are saved by default with the extension?",
        a: ".h",
        b: ".ht",
        c: ".html",
        d: ".htm",
        correct: "c",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const current = data[currentQuiz]
    questionEl.innerText = current.question
    a_text.innerText = current.a
    b_text.innerText = current.b
    c_text.innerText = current.c
    d_text.innerText = current.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === data[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < data.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2 style="text-align:center;"> your score is ${score}/${data.length} </h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})