import React, { RefObject } from "react";
import * as roosterjs from "roosterjs";

export const getEditor = (elementRef: RefObject<HTMLDivElement>) => {
  console.log(elementRef);
  var editor = roosterjs.createEditor(elementRef.current!);
  editor.setContent("Welcome to <b>RoosterJs</b>!");
};
