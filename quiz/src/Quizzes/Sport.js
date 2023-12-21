import { Link, useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react'
import './Quiz.css'


function Sport() {
const questions= [
    {
        questionTxt: 'Which country won the FIFA World Cup in 2018?',
        answerOptions: [
            { answerTxt: 'France', isCorrect: true },
            { answerTxt: 'Brazil', isCorrect: false },
            { answerTxt: 'Germany', isCorrect: false },
            { answerTxt: 'Argentina', isCorrect: false },
        ],
    },
   {
    questionTxt:"Who holds the record for the most home runs in Major League Baseball(MLB) history?",
    answerOptions: [
        { answerTxt: 'Babe Ruth', isCorrect: false },
        { answerTxt: 'Barry Bonds', isCorrect: true },
        { answerTxt: 'Hank Aaron', isCorrect: false },
        { answerTxt: 'Alex Rodiguez', isCorrect: false },
    ],
   },
   {
    questionTxt:"Who is the all-time leading scorer in the NBA?",
    answerOptions: [
        { answerTxt: 'LeBRon James', isCorrect: false },
        { answerTxt: 'Kobe Bryant', isCorrect: false },
        { answerTxt: 'Michel Jordan', isCorrect: false },
        { answerTxt: 'Kareem Abdul-Jabbar', isCorrect: true },
    ],
   },
   {
    questionTxt:"Which tennis player has won the most Grand Slam single titles in history?",
    answerOptions: [
        { answerTxt: 'Serena Williams', isCorrect: false },
        { answerTxt: 'Roger Federer', isCorrect: true },
        { answerTxt: 'Rafael Nadal', isCorrect: false },
        { answerTxt: 'Novak Djokovic', isCorrect: false },
    ],
   },
   {
    questionTxt:"In which city were the Olympic Games held in 2021?",
    answerOptions: [
        { answerTxt: 'Tokyo, japan', isCorrect: true },
        { answerTxt: 'Rio de Janerio, Brazil', isCorrect: false },
        { answerTxt: 'London, United Knigdom', isCorrect: false },
        { answerTxt: 'Bejing, China', isCorrect: false },
    ],
   },
   {
    questionTxt:"Who won the FIFA Women's World Cup in 2019?",
    answerOptions: [
        { answerTxt: 'Germany', isCorrect: false },
        { answerTxt: 'Brazil', isCorrect: false },
        { answerTxt: 'United Stated', isCorrect: true },
        { answerTxt: 'Sweden', isCorrect: false },
    ],
   },
   {
    questionTxt:"Which team has wono the most super Bowl titles in NFL history?",
    answerOptions: [
        { answerTxt: 'Pittsburgh Steelers', isCorrect: false },
        { answerTxt: 'Dallas Cowboys', isCorrect: false },
        { answerTxt: 'San Francisco 49ers', isCorrect: false },
        { answerTxt: 'New England Patriots', isCorrect: true },
    ],
   },
   {
    questionTxt:"Who is the fastest man in the world and holds the world record for the 100-meter sprint?",
    answerOptions: [
        { answerTxt: 'Carls Lewis', isCorrect: false },
        { answerTxt: 'Usain Bolt', isCorrect: true },
        { answerTxt: 'Justin Gatlin', isCorrect: false },
        { answerTxt: 'Tyson Gay', isCorrect: false },
    ],
   },
   {
    questionTxt:"Which country has won the most Olympic gold medals in the history of the Summer Olympics?",
    answerOptions: [
        { answerTxt: 'China', isCorrect: false },
        { answerTxt: 'Russia', isCorrect: false },
        { answerTxt: 'United States', isCorrect: true },
        { answerTxt: 'Germany', isCorrect: false },
    ],
   },
   {
    questionTxt:"Who is the most decorated Olympian of all time, with a total of 28 Olympic medals?",
    answerOptions: [
        { answerTxt: 'Michael Phelps', isCorrect: true },
        { answerTxt: 'Usain Bolt', isCorrect: false },
        { answerTxt: 'Simone Biles', isCorrect: false },
        { answerTxt: 'Carles Lewis', isCorrect: false },
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

export default Sport
