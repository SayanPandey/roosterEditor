import { useEffect, useRef } from "react";
import { getEditor } from "./rooster";

export const Editor = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    getEditor(editorRef);
  });

  return (
    <div
      ref={editorRef}
      id="editorDiv"
      style={{
        width: " 500px",
        height: " 300p",
        overflow: " auto",
        border: " solid 1px black",
      }}
    ></div>
  );
};
