"use client";

import Editor from "@monaco-editor/react";

function CodeEditor({ height, width }: { height?: string; width?: string }) {
  return (
    <Editor
      height={height || "50vh"}
      width={width || "50vw"}
      defaultLanguage="javascript"
      defaultValue="// 코드를 작성해주세요"
      theme="vs-dark"
    />
  );
}

export default CodeEditor;
