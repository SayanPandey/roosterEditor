import React, { RefObject } from "react";
import { IEditor } from "roosterjs-editor-types";
import * as roosterjs from "roosterjs";
import { Editor } from "roosterjs";

export const getEditor = (elementRef: RefObject<HTMLDivElement>): IEditor => {
  // var editor = roosterjs.createEditor(elementRef.current!);
  var editor = new Editor(elementRef.current!);
  // editor.setContent(
  //   '<div style="font-family: Calibri, Arial, Helvetica, sans-serif; font-size: 11pt; color: rgb(0, 0, 0);">' +
  //     '<span style="font-family:&quot;Open Sans&quot;, Arial, sans-serif;font-size:14px;text-align:justify;background-color:rgb(255, 255, 255);display:inline !important">' +
  //     "</span></div>"
  // );
  return editor;
};
