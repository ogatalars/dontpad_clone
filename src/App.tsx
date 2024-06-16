import React, { useState } from 'react';
import Home from './pages/Home';
import Editor from './pages/Editor';
import './App.css';

const App: React.FC = () => {
  const [code, setCode] = useState<string | null>(null);

  const handleSubmit = (code: string) => {
    setCode(code);
  };

  const handleBack = () => {
    setCode(null);
  };

  return (
    <div className="app-container">
      {code === null ? (
        <Home onSubmit={handleSubmit} />
      ) : (
        <Editor code={code} onBack={handleBack} />
      )}
    </div>
  );
};

export default App;
