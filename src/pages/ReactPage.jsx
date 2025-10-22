import React, { useState } from "react";
import copy from "copy-to-clipboard";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { themes } from "prism-react-renderer";
import styles from "./ReactPage.module.css";

const ReactPage = () => {
  const initialCode = `
function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div style={{
      textAlign: 'center',
      marginTop: '30px',
      fontFamily: 'Arial'
    }}>
      <h2>Hello React! 👋</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

`;

  const [code, setCode] = useState(initialCode);
  const [key, setKey] = useState(0);

  // 🟢 Buttons
  const handleRun = () => setKey((prev) => prev + 1);
  const handleReset = () => setCode(initialCode);
  const handleCopy = () => {
    copy(code);
    alert("✅ Code copied to clipboard!");
  };

  return (
    <div className={styles.mainContainer}>
      <h1>⚛️ React Playground</h1>

      <div className={styles.buttons}>
        <button onClick={handleRun}>▶ Run</button>
        <button onClick={handleReset}>🔄 Reset</button>
        <button onClick={handleCopy}>📋 Copy</button>
      </div>

      <LiveProvider
        key={key}
        code={code}
        theme={themes.nightOwl}
        scope={{ React }}
      >
        <div className={styles.editorContainer}>
          <LiveEditor
            className={styles.editor}
            onChange={(newCode) => setCode(newCode)}
          />
          <div className={styles.previewBox}>
            <LivePreview className={styles.preview} />
            <LiveError className={styles.error} />
          </div>
        </div>
      </LiveProvider>
    </div>
  );
};

export default ReactPage;
