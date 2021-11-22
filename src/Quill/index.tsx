import React, { memo, useEffect, useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

export const QuillTextEditor = memo(() => {
  const [text, settext] = useState("");
  const quillNode = useRef<ReactQuill>(null);
  const editor = useRef<Quill>();

  useEffect(() => {
    if (quillNode && quillNode.current) {
      const quill = quillNode.current;
      editor.current = quill.getEditor();
      editor.current.insertEmbed(
        0,
        "image",
        "https://miro.medium.com/max/580/0*uyPv5FeFHvOimMKn.jpg"
      );
    }
  }, [quillNode]);

  return (
    <React.Fragment>
      <ReactQuill ref={quillNode} value={text} onChange={settext} />
      <div>
        <h1>Editor contents</h1>
        <div>{text}</div>
        <h1>Detla format</h1>
        <div>{JSON.stringify(editor?.current?.getContents())}</div>

        <button
          onClick={() => {
            editor?.current?.insertText(0, "image", "bold", true);
          }}
        />
      </div>
    </React.Fragment>
  );
});
