import React, { RefObject } from "react";
import { IEditor } from "roosterjs-editor-types";
import * as roosterjs from "roosterjs";

export const getEditor = (elementRef: RefObject<HTMLDivElement>): IEditor => {
  var editor = roosterjs.createEditor(elementRef.current!);
  editor.setContent(
    "This is some random text. Hello, " +
      "I am Sayan Pandey, This editor is great works well for now."
  );
  return editor;
};
