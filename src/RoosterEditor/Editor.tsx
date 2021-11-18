import React, { useEffect, useRef, useState } from "react";
import { IEditor } from "roosterjs-editor-types";
import { getEditor } from "./rooster";
import * as roosterjs from "roosterjs";

export const Editor = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  var editor: IEditor;

  useEffect(() => {
    editor = getEditor(editorRef);
  });

  return (
    <React.Fragment>
      <div
        ref={editorRef}
        id="editorDiv"
        style={{
          width: "500px",
          height: "300px",
          overflow: "auto",
          border: "solid 1px black",
        }}
      ></div>
      <button id="buttonB" onClick={() => roosterjs.toggleBold(editor!)}>
        B
      </button>
      <button id="buttonI" onClick={() => roosterjs.toggleItalic(editor!)}>
        I
      </button>
      <button id="buttonU" onClick={() => roosterjs.toggleUnderline(editor!)}>
        U
      </button>
    </React.Fragment>
  );
};
