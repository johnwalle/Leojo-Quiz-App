import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleSportButtonClick = () => {
    navigate('/Sport');
  };

  const handleNatureButtonClick = () => {
    navigate('/Nature');
  };

  const handleCelebrityButtonClick = () => {
    navigate('/Celebrity');
  };

  const handleHealthButtonClick = () => {
    navigate('/Health');
  };

  const handleGeneralButtonClick = () => {
    navigate('/General');
  };

  return (
    <div className='main-home-container'>
      <h1 className='welcome'>𝓛𝓮𝓸𝓳𝓸 𝓠𝓤𝓘𝓩 𝓐𝓟𝓟!</h1>
      <h1 className='category-heading'>ℂ𝕙𝕠𝕠𝕤𝕖 𝕪𝕠𝕦𝕣 𝕡𝕣𝕖𝕗𝕖𝕣𝕣𝕖𝕕 𝕔𝕒𝕥𝕖𝕘𝕠𝕣𝕪</h1>

      <div className='category-list'>
        <button onClick={handleGeneralButtonClick}>General Knowledge</button>
        <button onClick={handleHealthButtonClick}>Health and Wellness</button>
        <button onClick={handleSportButtonClick}>Sports Trivia</button>
        <button onClick={handleCelebrityButtonClick}>Celebrity Quiz</button>
        <button onClick={handleNatureButtonClick}>Nature and Environment</button>
      </div>
    </div>
  );
}

export default Home;