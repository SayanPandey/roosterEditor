import { RefObject } from "react";
import { IEditor } from "roosterjs-editor-types";
import * as roosterjs from "roosterjs";

export const getEditor = (elementRef: RefObject<HTMLDivElement>): IEditor => {
  var editor = roosterjs.createEditor(elementRef.current!);
  return editor;
};
