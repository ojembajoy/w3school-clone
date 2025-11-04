import React, { useState, useEffect, useRef } from "react";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";
import styles from "./TryNow.module.css";

function TryNow() {
  const [activeTab, setActiveTab] = useState("html");
  const [viewTab, setViewTab] = useState("editor"); // 👈 new: editor/output toggle for mobile
  const [htmlCode, setHtmlCode] = useState("<h1>Hello World!</h1>");
  const [cssCode, setCssCode] = useState("h1 { color: blue; }");
  const [jsCode, setJsCode] = useState("console.log('Hello JS!')");
  const [output, setOutput] = useState("");
  const [consoleOutput, setConsoleOutput] = useState([]);
  const iframeRef = useRef(null);

  const runCode = () => {
  setConsoleOutput([]);
  const combinedCode = `
    <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
        <script>
          const originalLog = console.log;
          console.log = function(...args) {
            window.parent.postMessage({ type: 'console', message: args.join(' ') }, '*');
            originalLog.apply(console, args);
          };

          // 👇 NEW: Log your HTML text content automatically
          window.addEventListener('load', () => {
            const pageText = document.body.innerText.trim();
            if (pageText) {
              console.log("HTML says:", pageText);
            } else {
              console.log("HTML has no visible text content.");
            }
          });

          try {
            ${jsCode}
          } catch (error) {
            window.parent.postMessage({ type: 'console', message: 'Error: ' + error.message }, '*');
          }
        </script>
      </body>
    </html>
  `;
  setOutput(combinedCode);
};

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === "console") {
        setConsoleOutput((prev) => [...prev, event.data.message]);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className={styles.container}>
      {/* MOBILE VIEW TOGGLE BUTTONS */}
      <div className={styles.mobileTabs}>
        <button
          className={`${styles.mobileTab} ${
            viewTab === "editor" ? styles.activeMobileTab : ""
          }`}
          onClick={() => setViewTab("editor")}
        >
          ✏️ Editor
        </button>
        <button
          className={`${styles.mobileTab} ${
            viewTab === "output" ? styles.activeMobileTab : ""
          }`}
          onClick={() => setViewTab("output")}
        >
          🖥️ Result
        </button>
      </div>

      {/* DESKTOP + MOBILE: EDITOR SECTION */}
      <div
        className={`${styles.editorSection} ${
          viewTab === "editor" ? styles.showMobile : styles.hideMobile
        }`}
      >
        <h2 className={styles.editorTitle}>Code Editor</h2>

        <div className={styles.tabs}>
          {["html", "css", "js"].map((tab) => (
            <button
              key={tab}
              className={`${styles.tabButton} ${
                activeTab === tab ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {activeTab === "html" && (
          <CodeMirror
            value={htmlCode}
            height="400px"
            extensions={[html()]}
            theme="dark"
            onChange={(value) => setHtmlCode(value)}
          />
        )}
        {activeTab === "css" && (
          <CodeMirror
            value={cssCode}
            height="400px"
            extensions={[css()]}
            theme="dark"
            onChange={(value) => setCssCode(value)}
          />
        )}
        {activeTab === "js" && (
          <CodeMirror
            value={jsCode}
            height="400px"
            extensions={[javascript()]}
            theme="dark"
            onChange={(value) => setJsCode(value)}
          />
        )}

        <button onClick={runCode} className={styles.runButton}>
          Run ▶️
        </button>
      </div>

      {/* DESKTOP + MOBILE: OUTPUT SECTION */}
      <div
        className={`${styles.outputSection} ${
          viewTab === "output" ? styles.showMobile : styles.hideMobile
        }`}
      >
        <h2 className={styles.outputTitle}>Result</h2>

        <iframe
          ref={iframeRef}
          title="output"
          srcDoc={output}
          className={styles.browser}
          sandbox="allow-scripts"
        ></iframe>

        <hr />

        <div className={styles.console}>
          <strong className={styles.consoleTitle}>Console Output:</strong>
          {consoleOutput.length === 0 ? (
            <p className={styles.consoleEmpty}>No logs yet...</p>
          ) : (
            consoleOutput.map((line, index) => (
              <div key={index}>{"> " + line}</div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default TryNow;
