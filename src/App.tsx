import React, { useState } from 'react';
import Login from './pages/Login';
import Editor from './pages/Editor';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (password: string) => {
    if (password === 'your_password') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div>
      {isAuthenticated ? <Editor /> : <Login onLogin={handleLogin} />}
    </div>
  );
};

export default App;
