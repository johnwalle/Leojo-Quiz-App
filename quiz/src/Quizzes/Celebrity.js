import { Link, useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react'
import './Quiz.css'


function Celebrity() {
const questions= [
    {
        questionTxt: 'Which actor played the character Tony Stark, also known as Iron Man, in the Marvel Cinematic Universe?',
        answerOptions: [
            { answerTxt: 'Robert Downey Jr.', isCorrect: true },
            { answerTxt: 'Chris Evans', isCorrect: false },
            { answerTxt: 'Chris Hemsworth', isCorrect: false },
            { answerTxt: 'Tom Holland', isCorrect: false },
        ],
    },
    {
        questionTxt: 'Who is the lead vocalist of the rock band Queen?',
        answerOptions: [
            { answerTxt: 'Freddie Mercury', isCorrect: true },
            { answerTxt: 'Robert Plant', isCorrect: false },
            { answerTxt: 'Mick Jagger', isCorrect: false },
            { answerTxt: 'Bono', isCorrect: false },
        ],
    },
    {
        questionTxt: 'Which actress won an Academy Award for her role in the movie "La La Land"?',
        answerOptions: [
            { answerTxt: 'Emma Stone', isCorrect: true },
            { answerTxt: 'Jennifer Lawrence', isCorrect: false },
            { answerTxt: 'Natalie Portman', isCorrect: false },
            { answerTxt: 'Meryl Streep', isCorrect: false },
        ],
    },
    {
        questionTxt: 'Who is the highest-grossing actor of all time as of 2021?',
        answerOptions: [
            { answerTxt: 'Robert Downey Jr.', isCorrect: false },
            { answerTxt: 'Samuel L. Jackson', isCorrect: true },
            { answerTxt: 'Tom Hanks', isCorrect: false },
            { answerTxt: 'Scarlett Johansson', isCorrect: false },
        ],
    },
    {
        questionTxt: 'Which singer has the nickname "Queen of Pop"?',
        answerOptions: [
            { answerTxt: 'Madonna', isCorrect: true },
            { answerTxt: 'Beyoncé', isCorrect: false },
            { answerTxt: 'Taylor Swift', isCorrect: false },
            { answerTxt: 'Rihanna', isCorrect: false },
        ],
    },
    {
        questionTxt: 'Which actor portrayed the character James Bond in the film "Casino Royale"?',
        answerOptions: [
            { answerTxt: 'Daniel Craig', isCorrect: true },
            { answerTxt: 'Pierce Brosnan', isCorrect: false },
            { answerTxt: 'Sean Connery', isCorrect: false },
            { answerTxt: 'Roger Moore', isCorrect: false },
        ],
    },
    {
        questionTxt: 'Who is the youngest person to ever win an Academy Award for Best Actress?',
        answerOptions: [
            { answerTxt: 'Jennifer Lawrence', isCorrect: false },
            { answerTxt: 'Marlee Matlin', isCorrect: false },
            { answerTxt: 'Audrey Hepburn', isCorrect: false },
            { answerTxt: 'Tatum O\'Neal', isCorrect: true },
        ],
    },
    {
        questionTxt: 'Which actor played the character Forrest Gump in the 1994 film of the same name?',
        answerOptions: [
            { answerTxt: 'Tom Hanks', isCorrect: true },
            { answerTxt: 'Brad Pitt', isCorrect: false },
            { answerTxt: 'Leonardo DiCaprio', isCorrect: false },
            { answerTxt: 'Johnny Depp', isCorrect: false },
        ],
    },
    {
        questionTxt: 'Who is the director of the "Harry Potter" film series?',
        answerOptions: [
            { answerTxt: 'Christopher Nolan', isCorrect: false },
            { answerTxt: 'Steven Spielberg', isCorrect: false },
            { answerTxt: 'Peter Jackson', isCorrect: false },
            { answerTxt: 'David Yates', isCorrect: true },
        ],
    },
    {
        questionTxt: 'Which actress played the character Katniss Everdeen in the "Hunger Games" film series?',
        answerOptions: [
            { answerTxt: 'Jennifer Aniston', isCorrect: false },
            { answerTxt: 'Emma Watson', isCorrect: false },
            { answerTxt: 'Jennifer Lawrence', isCorrect: true },
            { answerTxt: 'Anne Hathaway', isCorrect: false },
        ],
    }
]
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

export default Celebrity
