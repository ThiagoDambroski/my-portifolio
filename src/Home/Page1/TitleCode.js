import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function TitleCode({ text, lineNumber }) {
  return (
    <SyntaxHighlighter
      language="typescript"
      style={vscDarkPlus}
      wrapLines
      wrapLongLines
      showLineNumbers
      startingLineNumber={lineNumber}
      className="newPage1-syntax-highlighter"
    >
      {text}
    </SyntaxHighlighter>
  );
}

export default TitleCode;
