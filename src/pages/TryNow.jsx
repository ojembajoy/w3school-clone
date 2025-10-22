import React, { useState, useRef, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";

function TryNow() {
  const [activeTab, setActiveTab] = useState("html");
  const [htmlCode, setHtmlCode] = useState("<h1>Hello World!</h1>");
  const [cssCode, setCssCode] = useState("h1 { color: blue; }");
  const [jsCode, setJsCode] = useState("console.log('Hello JS!')");
  const [output, setOutput] = useState("");
  const [consoleOutput, setConsoleOutput] = useState([]);
  const iframeRef = useRef(null);

  const runCode = () => {
    // Clear previous console logs
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
    console.log(combinedCode);
  };

 
  // Listen for console messages from iframe
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
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        height: "100vh",
        backgroundColor: "#1e1e1e",
        color: "#fff",
      }}
    >
      {/* Left: Editor */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
        <h2 style={{ marginBottom: "10px" }}>Code Editor</h2>

        {/* Tabs */}
        <div style={{ display: "flex", marginBottom: "10px" }}>
          {["html", "css", "js"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                flex: 1,
                background: activeTab === tab ? "#04AA6D" : "#333",
                color: "white",
                border: "none",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Editors */}
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

        <button
          onClick={runCode}
          style={{
            background: "#04AA6D",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "15px",
          }}
        >
          Run ▶️
        </button>
      </div>

      {/* Right: Output */}
      <div style={{ padding: "20px", backgroundColor: "#fff", display: "flex", flexDirection: "column" }}>
        <h2 style={{ color: "#000" }}>Result</h2>

        {/* Visual Output */}
        <iframe
          ref={iframeRef}
          title="output"
          srcDoc={output}
          style={{
            width: "100%",
            height: "70%",
            border: "1px solid #ddd",
            borderRadius: "5px",
            background: "white",
          }}
          sandbox="allow-scripts"
        ></iframe>

        {/* Divider */}
        <hr style={{ margin: "15px 0", border: "1px solid #ccc" }} />

        {/* Console Output */}
        <div
          style={{
            background: "#000",
            color: "#0f0",
            padding: "10px",
            height: "20%",
            overflowY: "auto",
            borderRadius: "5px",
            fontFamily: "monospace",
          }}
        >
          <strong style={{ color: "#04AA6D" }}>Console Output:</strong>
          {consoleOutput.length === 0 ? (
            <p style={{ color: "#777" }}>No logs yet...</p>
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
