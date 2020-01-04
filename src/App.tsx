import React from 'react';
import './App.css';
import Timer from './components/timer';

const App: React.FC = () => {
  return (  
    <Timer
      startDate={null}
      seconds={0}
      timerOn={true}
    />
  );
}

export default App;
