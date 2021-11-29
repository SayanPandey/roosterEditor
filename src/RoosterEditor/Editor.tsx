import React, { useEffect, useRef, useState } from "react";
import { IEditor } from "roosterjs-editor-types";
import { getEditor } from "./rooster";
import * as roosterjs from "roosterjs";
import { createSection, noticeTemplate1, noticeTemplate2 } from "./utils";
import "./style.css";
import WithLineNumbers from "../common/Highlighter";
import { Toolbar } from "./Toolbar";

<script
  src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/prism.min.js"
  data-manual
></script>;

export const Editor = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const editor = useRef<IEditor>();

  const [content, setContent] = useState("");
  const [bgColor, setbgColor] = useState("#000000");

  useEffect(() => {
    editor.current = getEditor(editorRef);
    editor.current.triggerContentChangedEvent();
    editor.current!.addDomEventHandler("click", () => {
      setContent(editor.current!.getContent(0));
    });
    setContent(editor.current!.getContent());
  }, [editor.current]);

  return (
    <React.Fragment>
      <div className="fx-col main-container">
        <div className="fx-col editor-container">
          <Toolbar editor={editor.current!} />
          <div
            ref={editorRef}
            id="editorDiv"
            style={{
              width: "1165px",
              height: "820px",
              overflow: "auto",
              border: "solid 1px black",
            }}
          ></div>
        </div>
      </div>

      <div
        className="fx-row html-container"
        style={{
          width: "100%",
          height: "600px",
          overflow: "auto",
          border: "solid 1px black",
        }}
      >
        {/* <div style={{ minWidth: "50%", flex: "1 1 0" }}>
          <h1>Rendered HTML</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          ></div>
        </div> */}
        <WithLineNumbers
          code={content.replace(/>/g, "> \n").replace(/<\//g, "\n</")}
        />
      </div>
    </React.Fragment>
  );
};
