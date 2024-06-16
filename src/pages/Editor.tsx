import React, { useState, useEffect } from "react";
import axios from "axios";

const Editor: React.FC = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get("/api/content").then((response) => setText(response.data));
  }, []);

  const handleSave = () => {
    axios.post("/api/content", { text });
  };

  return (
    <div>
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
