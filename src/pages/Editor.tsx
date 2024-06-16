import React, { useState, useEffect } from 'react';
import './Editor.css';

const Editor: React.FC = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const savedText = localStorage.getItem('content');
    if (savedText) {
      setText(savedText);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('content', text);
  };

  return (
    <div className="editor-container">
      <h2>Editor</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
        cols={50}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Editor;