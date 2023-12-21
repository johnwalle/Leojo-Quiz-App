import { Link, useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react'
import './Quiz.css'


function Nature() {
const questions=[
    {
        questionTxt: 'What is the process by which plants convert sunlight into chemical energy?',
        answerOptions: [
            { answerTxt: 'Photosynthesis', isCorrect: true },
            { answerTxt: 'Respiration', isCorrect: false },
            { answerTxt: 'Transpiration', isCorrect: false },
            { answerTxt: 'Pollination', isCorrect: false },
        ],
    },
    {
        questionTxt: 'Which gas is primarily responsible for the greenhouse effect?',
        answerOptions: [
            { answerTxt: 'Carbon dioxide', isCorrect: true },
            { answerTxt: 'Oxygen', isCorrect: false },
            { answerTxt: 'Nitrogen', isCorrect: false },
            { answerTxt: 'Methane', isCorrect: false },
        ],
    },
    {
        questionTxt: 'What is the term for the gradual increase in the Earth\'s average temperature primarily caused by human activities?',
        answerOptions: [
            { answerTxt: 'Global warming', isCorrect: true },
            { answerTxt: 'Climate change', isCorrect: false },
            { answerTxt: 'Ozone depletion', isCorrect: false },
            { answerTxt: 'Deforestation', isCorrect: false },
        ],
    },
    {
        questionTxt: 'Which natural disaster is measured using the Richter scale?',
        answerOptions: [
            { answerTxt: 'Hurricanes', isCorrect: false },
            { answerTxt: 'Tornadoes', isCorrect: false },
            { answerTxt: 'Earthquakes', isCorrect: true },
            { answerTxt: 'Floods', isCorrect: false },
        ],
    },
    {
        questionTxt: 'What is the term for the loss of a species from a particular habitat or from the entire planet?',
        answerOptions: [
            { answerTxt: 'Extinction', isCorrect: true },
            { answerTxt: 'Endangerment', isCorrect: false },
            { answerTxt: 'Habitat destruction', isCorrect: false },
            { answerTxt: 'Overpopulation', isCorrect: false },
        ],
    },
    {
        questionTxt: 'Which biome is characterized by very low temperatures, little precipitation, and permafrost?',
        answerOptions: [
            { answerTxt: 'Tropical rainforest', isCorrect: false },
            { answerTxt: 'Desert', isCorrect: false },
            { answerTxt: 'Tundra', isCorrect: true },
            { answerTxt: 'Grassland', isCorrect: false },
        ],
    },
    {
        questionTxt: 'What is the term for the process of converting waste materials into reusable materials?',
        answerOptions: [
            { answerTxt: 'Recycling', isCorrect: true },
            { answerTxt: 'Composting', isCorrect: false },
            { answerTxt: 'Incineration', isCorrect: false },
            { answerTxt: 'Landfilling', isCorrect: false },
        ],
    },
    {
        questionTxt: 'Which gas is primarily responsible for the depletion of the ozone layer?',
        answerOptions: [
            { answerTxt: 'Carbon dioxide', isCorrect: false },
            { answerTxt: 'Oxygen', isCorrect: false },
            { answerTxt: 'Chlorofluorocarbons (CFCs)', isCorrect: true },
            { answerTxt: 'Methane', isCorrect: false },
        ],
    },
    {
        questionTxt: 'What is the term for the process of converting atmospheric nitrogen into a form usable by plants?',
        answerOptions: [
            { answerTxt: 'Denitrification', isCorrect: false },
            { answerTxt: 'Ammonification', isCorrect: false },
            { answerTxt: 'Nitrification', isCorrect: false },
            { answerTxt: 'Nitrogen fixation', isCorrect: true },
        ],
    },
    {
        questionTxt: 'Which marine ecosystem is characterized by high levels of biodiversity and covers less than 1% of the ocean surface?',
        answerOptions: [
            { answerTxt: 'Coral reefs', isCorrect: true },
            { answerTxt: 'Mangrove forests', isCorrect: false },
            { answerTxt: 'Kelp forests', isCorrect: false },
            { answerTxt: 'Deep-sea trenches', isCorrect: false },
        ],
    },
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
export default Nature
