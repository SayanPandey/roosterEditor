import React, { useEffect, useRef, useState } from "react";
import { IEditor } from "roosterjs-editor-types";
import { getEditor } from "./rooster";
import * as roosterjs from "roosterjs";
import { createSection } from "./utils";
import "./style.css";

export const Editor = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const editor = useRef<IEditor>();

  const [content, setContent] = useState("");

  useEffect(() => {
    editor.current = getEditor(editorRef);
  }, [content]);

  return (
    <React.Fragment>
      <h1>User Input</h1>
      <div
        ref={editorRef}
        id="editorDiv"
        style={{
          width: "100%",
          height: "300px",
          overflow: "auto",
          border: "solid 1px black",
        }}
      ></div>
      <button onClick={() => roosterjs.toggleBold(editor.current!)}>B</button>
      <button onClick={() => roosterjs.toggleItalic(editor.current!)}>I</button>
      <button onClick={() => roosterjs.toggleUnderline(editor.current!)}>
        U
      </button>
      <button
        onClick={() => {
          editor.current!.insertNode(createSection());
        }}
      >
        Custom Section
      </button>
      <button
        onClick={() => {
          editor.current!.setContent("");
        }}
      >
        Clear
      </button>
      <button
        onClick={() => {
          setContent(editor.current!.getContent());
        }}
      >
        Generate html
      </button>

      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          border: "solid 1px black",
        }}
      >
        <h1>HTML output</h1>
        {content}
        <h1>Rendered HTML</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></div>
      </div>
    </React.Fragment>
  );
};
