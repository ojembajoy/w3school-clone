import React from 'react'
import { useState } from 'react';

export default function TryNow() {

    const [code, setCode] = useState("<h1>Hello World!</h1>");
  const [output, setOutput] = useState("");

  const runCode = () => {
    setOutput(code);
  };

  return (

<div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Try It Yourself</h1>
      <p>Write HTML, CSS, or JS code and see the result instantly 👇</p>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          width: "80%",
          height: "200px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
          fontFamily: "monospace",
          fontSize: "16px",
        }}
      ></textarea>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={runCode}
          style={{
            background: "#04AA6D",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Run Code ▶️
        </button>
      </div>

      <h3 style={{ marginTop: "30px" }}>Result 👇</h3>

      <iframe
        title="output"
        srcDoc={output}
        style={{
          width: "80%",
          height: "200px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          marginTop: "10px",
          background: "white",
        }}
        sandbox="allow-scripts"
      ></iframe>
    </div>



   
    // <div>
    //   <h1 style={{ textAlign: "center", marginTop: "50px" }}>Try It Yourself - HTML, CSS, JavaScript Editor</h1>
    //   <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
    //     <iframe
    //       title="HTML, CSS, JavaScript Editor"
    //       style={{ border: "1px solid #ccc", width: "80%", height: "500px" }}
    //       srcDoc={`
    //         <html>
    //           <head>
    //             <style>
    //               body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
    //               h1 { color: #333; }
    //               pre { background: #f4f4f4; padding: 10px; border: 1px solid #ddd; }
    //             </style>
    //           </head>
    //           <body>
    //             <h1>Try It Yourself - HTML Editor</h1>
    //             <p>Type your HTML code below:</p>
    //             <textarea style="width: 100%; height: 200px;"></textarea>
    //             <button style="margin-top: 10px;">Run</button>
    //             <h2>Output:</h2>
    //             <div id="output"></div>
    //             <script>
    //               const button = document.querySelector("button");
    //               button.addEventListener("click", () => {
    //                 const code = document.querySelector("textarea").value;
    //                 document.getElementById("output").innerHTML = code;
    //               });
    //             </script>
    //           </body>
    //         </html>
    //       `}
    //     />
    //   </div>
    // </div>
  )
}

