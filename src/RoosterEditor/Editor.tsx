import React, { useEffect, useRef, useState } from "react";
import { IEditor } from "roosterjs-editor-types";
import { getEditor } from "./rooster";
import * as roosterjs from "roosterjs";
import { createSection } from "./utils";
import "./style.css";
import { FONT_SIZES } from "roosterjs";
import WithLineNumbers from "../common/Highlighter";

<script
  src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/prism.min.js"
  data-manual
></script>;

export const Editor = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const editor = useRef<IEditor>();

  const [content, setContent] = useState("");
  const [innerHTML, setInnerHTML] = useState("");

  useEffect(() => {
    editor.current = getEditor(editorRef);
    editor.current!.addDomEventHandler("keydown", () => {
      setContent(editor.current!.getContent(0));
      setInnerHTML(editorRef.current!.innerHTML);
    });
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
      <button onClick={() => roosterjs.toggleBold(editor.current!)}>
        Bold
      </button>
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
          editor.current!.setContent(
            '<div style="font-family: Calibri, Arial, Helvetica, sans-serif; font-size: 11pt; color: rgb(0, 0, 0);"><br></div>'
          );
        }}
      >
        Clear
      </button>
      <select
        onChange={(event) => {
          const fontSelected = FONT_SIZES[event.target.selectedIndex];
          roosterjs.setFontSize(editor.current!, String(fontSelected));
          console.log(fontSelected);
        }}
      >
        {FONT_SIZES.map((x) => (
          <option value={x} style={{ fontSize: x }}>
            Heading {x} px
          </option>
        ))}
      </select>

      <button
        onClick={() => {
          setContent(editor.current!.getContent());
        }}
      >
        Generate html
      </button>

      <div
        className="fx-row"
        style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          border: "solid 1px black",
        }}
      >
        <div style={{ flex: "1 1 0" }}>
          <h1>Rendered HTML</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          ></div>
        </div>

        <WithLineNumbers
          code={content.replace(/>/g, "> \n").replace(/<\//g, "\n</")}
        />
      </div>
    </React.Fragment>
  );
};
