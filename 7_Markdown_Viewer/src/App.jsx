import { useEffect, useState } from "react";
import Toolbar from "./components/Toolbar";
import { useRef } from "react";
import { marked } from "marked";

function App() {
  const [text, setText] = useState(
    localStorage.getItem("markdownText") || "# Markdown Viewer"
  );

  const renderText = () => {
    return { __html: marked(text) };
  };

  const textAreaRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("markdownText", text);
  }, [text]);

  const inserText = (before, after, needExample = true) => {
    const textArea = textAreaRef.current;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const previousText = textArea.value;
    const beforeText = previousText.substring(0, start);
    const selectText = previousText.substring(start, end);
    const afterText = previousText.substring(end);

    let newText
    let cursorPosition

    if (start === end) {
      if (!needExample) {
        newText = `${beforeText}${before}${after}${afterText}`
        cursorPosition = start + before.length
      } else {
        newText = `${beforeText}${before}Exemplo${after}${afterText}`
        cursorPosition = start + before.length + 7
      }
    } else {
      newText = `${beforeText}${before}${selectText}${after}${afterText}`
      cursorPosition = end + before.length + after.length
    }
  
    setText(newText)

    textArea.focus()
    textArea.selectionStart = textArea.selectionEnd = cursorPosition;
  };
  return (
    <>
      <h1 id="title">Markdown Viewer</h1>
      <div className="app-container">
        <Toolbar inserText={inserText} />

        <div className="main-section">
          <textarea
            ref={textAreaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div
            className="dangerouslySetInnerHTML"
            dangerouslySetInnerHTML={renderText()}
          />
        </div>
      </div>
    </>
  );
}

export default App;
