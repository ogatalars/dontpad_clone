import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Home.css';

const Home: React.FC<{ onSubmit: (code: string) => void }> = ({ onSubmit }) => {
  const [code, setCode] = useState('');

  const handleNew = () => {
    const newCode = uuidv4();
    onSubmit(newCode);
  };

  const handleExisting = () => {
    if (code) {
      onSubmit(code);
    } else {
      alert("Please enter a code");
    }
  };

  return (
    <div className="home-container">
      <h2>Welcome to Dontpad Clone</h2>
      <button onClick={handleNew}>Start New Text</button>
      <div>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter code"
        />
        <button onClick={handleExisting}>Load Text</button>
      </div>
    </div>
  );
};

export default Home;
