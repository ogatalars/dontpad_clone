import React, { useState, useEffect } from 'react';
import './Editor.css';

const Editor: React.FC<{ code: string; onBack: () => void }> = ({ code, onBack }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    const savedText = localStorage.getItem(code);
    if (savedText) {
      setText(savedText);
    }
  }, [code]);

  const handleSave = () => {
    localStorage.setItem(code, text);
    alert(`Your code is: ${code}`);
  };

  return (
    <div className="editor-container">
      <h2>Editor</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={20}
        cols={80}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onBack}>Back to Home</button>
    </div>
  );
};

export default Editor;
