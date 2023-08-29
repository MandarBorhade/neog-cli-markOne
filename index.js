var readLineSync = require('readline-sync')

// Geometry quiz
var score = 0
var userName = readLineSync.question('Enter your name: ')

var questions = [
  {
    question: 'How many sides does a hexagon have? ',
    answer: '6'
  },
  {
    question: 'The internal angles of an equilateral triangle all measure how many degrees? ',
    answer: '60'
  },
  {
    question: 'The distance from the center of a circle to its edge is called what? ',
    answer: 'Radius'
  },
  {
    question: 'True or false? A parallelogram features three pairs of parallel sides. ',
    answer: 'false'
  },
  {
    question: 'How many points are there on a pentagram? ',
    answer: '5'
  }
]


function greet() {
  console.log('**************************************')
  console.log('Welcome to Geomatry quiz ' + userName)
  console.log('**************************************')
}


//answer question check

function questionCheck(question, answer) {
  var userAnswer = readLineSync.question(question)
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score += 1
  }
}

function gamePlay() {
  greet()

  questions.map(el => {
    questionCheck(el.question, el.answer)
  })

  console.log('**************************************')
  console.log(userName + ' ' + 'has scored ' + score)
}

gamePlay()
