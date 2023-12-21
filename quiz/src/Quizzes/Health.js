import { Link, useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react'
import './Quiz.css'


function Health() {
const questions= [
    {
        questionTxt: 'Which of the following nutrients is essential for the growth and repair of body tissues?',
        answerOptions: [
            { answerTxt: 'Carbohydrates', isCorrect: false },
            { answerTxt: 'Proteins', isCorrect: true },
            { answerTxt: 'Fats', isCorrect: false },
            { answerTxt: 'Vitamins', isCorrect: false },
        ],
    },
   {
    questionTxt:"Which organ is primarily responsible for detoxifying the body?",
    answerOptions: [
        { answerTxt: 'Liver', isCorrect: true },
        { answerTxt: 'Kidneys', isCorrect: false },
        { answerTxt: 'Lungs', isCorrect: false },
        { answerTxt: 'Stomach', isCorrect: false },
    ],
   },
   {
    questionTxt:"What is the recommended duration of moderate-intensty aerobic exercise per week for adults?",
    answerOptions: [
        { answerTxt: '30 minutes', isCorrect: false },
        { answerTxt: '60 minutes', isCorrect: true },
        { answerTxt: '90 minutes', isCorrect: false },
        { answerTxt: '120 minutes', isCorrect: false },
    ],
   },
   {
    questionTxt:"Which of the following is stress-reducing pracitce that involves focused breathing and meditation?",
    answerOptions: [
        { answerTxt: 'Weightlifing', isCorrect: false },
        { answerTxt: 'Cycling', isCorrect: false },
        { answerTxt: 'Swimming', isCorrect: false },
        { answerTxt: 'Yoga', isCorrect: true },
    ],
   },
   {
    questionTxt: 'Which of the following nutrients is necessary for the formation and maintenance of strong bones and teeth?',
    answerOptions: [
        { answerTxt: 'Vitamin C', isCorrect: false },
        { answerTxt: 'Calcium', isCorrect: true },
        { answerTxt: 'Iron', isCorrect: false },
        { answerTxt: 'Folic Acid', isCorrect: false },
    ],
},
{
    questionTxt: 'What is the recommended daily intake of fruits and vegetables for a healthy diet?',
    answerOptions: [
        { answerTxt: '1 serving', isCorrect: false },
        { answerTxt: '2 servings', isCorrect: false },
        { answerTxt: '3 servings', isCorrect: false },
        { answerTxt: '5 servings', isCorrect: true },
    ],
},
{
    questionTxt: 'Which of the following is a common symptom of dehydration?',
    answerOptions: [
        { answerTxt: 'Increased urination', isCorrect: false },
        { answerTxt: 'Dry mouth', isCorrect: true },
        { answerTxt: 'Excessive sweating', isCorrect: false },
        { answerTxt: 'Rapid heartbeat', isCorrect: false },
    ],
},
{
    questionTxt: 'What is the recommended amount of sleep for adults on average?',
    answerOptions: [
        { answerTxt: '4-6 hours', isCorrect: false },
        { answerTxt: '6-8 hours', isCorrect: true },
        { answerTxt: '8-10 hours', isCorrect: false },
        { answerTxt: '10-12 hours', isCorrect: false },
    ],
},
{
    questionTxt: 'Which of the following is a good source of omega-3 fatty acids?',
    answerOptions: [
        { answerTxt: 'Salmon', isCorrect: true },
        { answerTxt: 'Beef', isCorrect: false },
        { answerTxt: 'Chicken', isCorrect: false },
        { answerTxt: 'Pork', isCorrect: false },
    ],
},
{
    questionTxt: 'Which of the following is a good source of vitamin D?',
    answerOptions: [
        { answerTxt: 'Mushrooms', isCorrect: true },
        { answerTxt: 'Spinach', isCorrect: false },
        { answerTxt: 'Apples', isCorrect: false },
        { answerTxt: 'Carrots', isCorrect: false },
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

export default Health
