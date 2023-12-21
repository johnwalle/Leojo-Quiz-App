import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Celebrity from './Quizzes/Celebrity';
import Sport from './Quizzes/Sport';
import Health from './Quizzes/Health';
import Nature from './Quizzes/Nature';
import General from './Quizzes/General';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Sport" element={<Sport />} />
        <Route path="/Health" element={<Health />} />
        <Route path="/Nature" element={<Nature />} />
        <Route path="/General" element={<General />} />
        <Route path="/Celebrity" element={<Celebrity />} />
      </Routes>
    </Router>
  );
}

export default App;