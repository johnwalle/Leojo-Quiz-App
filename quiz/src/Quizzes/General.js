import { Link, useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react'
import './Quiz.css'
function General() {
const questions= [
    {
        questionTxt: 'Which scientist is credited with discovering the theory of general relativity?',
        answerOptions: [
            { answerTxt: 'Isaac Newton', isCorrect: false },
            { answerTxt: 'Albert Einstein', isCorrect: true },
            { answerTxt: 'Galileo Galilei', isCorrect: false },
            { answerTxt: 'Marie Curie', isCorrect: false },
        ],
    },
    {
        questionTxt: 'What is the capital city of Australia?',
        answerOptions: [
            { answerTxt: 'Canberra', isCorrect: true },
            { answerTxt: 'Sydney', isCorrect: false },
            { answerTxt: 'Melbourne', isCorrect: false },
            { answerTxt: 'Perth', isCorrect: false },
        ],
    },
    {
        questionTxt: 'Who wrote the novel "Pride and Prejudice"?',
        answerOptions: [
            { answerTxt: 'Emily Brontë', isCorrect: false },
            { answerTxt: 'Jane Austen', isCorrect: true },
            { answerTxt: 'Charlotte Brontë', isCorrect: false },
            { answerTxt: 'Virginia Woolf', isCorrect: false },
        ],
    },
    {
        questionTxt: 'What is the chemical symbol for the element gold?',
        answerOptions: [
            { answerTxt: 'Ag', isCorrect: false },
            { answerTxt: 'Au', isCorrect: true },
            { answerTxt: 'Fe', isCorrect: false },
            { answerTxt: 'Pb', isCorrect: false },
        ],
    },
    {
        questionTxt: 'In which year did the French Revolution begin?',
        answerOptions: [
            { answerTxt: '1789', isCorrect: true },
            { answerTxt: '1799', isCorrect: false },
            { answerTxt: '1765', isCorrect: false },
            { answerTxt: '1804', isCorrect: false },
        ],
    },
    {
        questionTxt: 'Who is the author of the novel "To Kill a Mockingbird"?',
        answerOptions: [
            { answerTxt: 'Harper Lee', isCorrect: true },
            { answerTxt: 'F. Scott Fitzgerald', isCorrect: false },
            { answerTxt: 'Mark Twain', isCorrect: false },
            { answerTxt: 'Ernest Hemingway', isCorrect: false },
        ],
    },
    {
        questionTxt: 'What is the largest planet in our solar system?',
        answerOptions: [
            { answerTxt: 'Mars', isCorrect: false },
            { answerTxt: 'Jupiter', isCorrect: true },
            { answerTxt: 'Saturn', isCorrect: false },
            { answerTxt: 'Neptune', isCorrect: false },
        ],
    },
    {
        questionTxt: 'Who painted the Mona Lisa?',
        answerOptions: [
            { answerTxt: 'Pablo Picasso', isCorrect: false },
            { answerTxt: 'Leonardo da Vinci', isCorrect: true },
            { answerTxt: 'Vincent van Gogh', isCorrect: false },
            { answerTxt: 'Michelangelo', isCorrect: false },
        ],
    },
    {
        questionTxt: 'What is the largest ocean in the world?',
        answerOptions: [
            { answerTxt: 'Indian Ocean', isCorrect: false },
            { answerTxt: 'Arctic Ocean', isCorrect: false },
            { answerTxt: 'Atlantic Ocean', isCorrect: false },
            { answerTxt: 'Pacific Ocean', isCorrect: true },
        ],
    },
    {
        questionTxt: 'Who is the author of the play "Romeo and Juliet"?',
        answerOptions: [
            { answerTxt: 'William Shakespeare', isCorrect: true },
            { answerTxt: 'George Bernard Shaw', isCorrect: false },
            { answerTxt: 'Oscar Wilde', isCorrect: false },
            { answerTxt: 'Arthur Miller', isCorrect: false },
        ],
    }

];

const [currentQuestion,setCurrentQuestion]=useState(0);
const [showScore,setShowScore]=useState(false);
const [score,setScore]=useState(0)
const[remainingTime,setRemainingTime]=useState(10);

const handleAnswerOptionClick =(isCorrect)=>{
    if(isCorrect){
        setScore(score+1)
    }

const nextQuestion=currentQuestion+1;
    if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
    } else {
        setShowScore(true);
    }
    setRemainingTime(10);
}


useEffect(() => {
    if (!showScore && remainingTime > 0) {
      const timer = setTimeout(() => {
        setRemainingTime(remainingTime - 1);
      }, 1000); // Update the remaining time every second

      return () => clearTimeout(timer);
    } else if (!showScore && remainingTime === 0) {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setRemainingTime(10); // Reset the remaining time for the next question
      } else {
        setShowScore(true);
      }
    }
  }, [remainingTime, showScore]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };



  return (
    <div id='app'>

    {showScore ? (
            <div className='score-section position'>
                <div>
            {score < 4 && <span>Keep practicing!</span>}
            {score >= 4 && score < 7 && <span>Good job!.</span>}
            {score >= 7 && <span>Great job!</span>}
            </div>
            <div className='score'>
            {score} / {questions.length}
            </div>
           <div className='link-container'>
           <Link to="/" className='back-to-home'>Back to Home</Link>

           </div>

          </div>
        )

        : (
        <>
            
           <div className='question-container ' id='main-container'>
           <div className='countdown'>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock" width="32" height="32">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  </div>
  <div className='remaining-time'>{formatTime(remainingTime)}</div>
</div>

               <div className='question-count position'>
                    <span >Question {currentQuestion + 1}/{questions.length}</span>
                </div>
           <div className='question-text position'>{questions[currentQuestion].questionTxt}</div>

           <div className='answer-section position'>
               {questions[currentQuestion].answerOptions.map((answerOption) => (
        <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerTxt}</button>
                 ))}
          </div>
           </div>
        </>
    )}
</div>
	);
  
}

export default General
