import React, { useState,useEffect, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vsDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function TitleCode({text,lineNumber}) {

    const fullText = text
   

  return (
    <>
        <SyntaxHighlighter
        language="typescript"
        style={vscDarkPlus}
        wrapLines={true}
        wrapLongLines={true}
        showLineNumbers={true}
        startingLineNumber={lineNumber}
        className="newPage1-syntax-highlighter" // Use the CSS class to style the SyntaxHighlighter  
       >
         {fullText}
        </SyntaxHighlighter>
    </>
  )
}

export default TitleCode