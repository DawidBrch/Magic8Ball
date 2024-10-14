//VARIABLES SECTION


const ballImg = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answersArr = ['Tak', 'Nie', 'Może', 'Zapytaj później', 'Zdecydowanie tak', 'Zdecydowanie nie']

//2. You need to write a function that when you type a question into the input will fire the shuffle function. When you click on the ticket, the ball-img class should be added to the div with the shake-animation class.

//3. You need to write a function that will draw answers from the table.  

//4. you need to write a function that will add the appropriate text to the div with the error class. (if the question does not end with a question mark or the ball is clicked without specifying the question, an error should be displayed) THIS POINT PROBABLY NOT NEEDED



//FUNCTIONS SECTION


const shakeBall = () => {
	ballImg.classList.add('shake-animation')
	setTimeout(answerGenerator, 1000)
}

const answerGenerator = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		drawingMachine()
		error.textContent = ''
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi być zakończone znakiem zapytania!'
		answer.textContent = ''
	} else {
		error.textContent = 'Musisz zadać pytanie!'
		answer.textContent = ''
	}

	ballImg.classList.remove('shake-animation')
}

const drawingMachine = () => {
	const randomElement = answersArr[Math.floor(Math.random() * answersArr.length)]
	answer.textContent = randomElement
}


//LISTENERS SECTION


ballImg.addEventListener('click', shakeBall)







// if(input will be empty){
// complete the div with the class answer with the text “you need to ask a question”
//}else if(text does not end with question mark){
// complete the div with the class answer with the text “the question must end with a question mark”
//} else{
// run the drawingMachine() function
//}
