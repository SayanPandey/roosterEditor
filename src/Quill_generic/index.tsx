import Quill from "quill";
import React, { useEffect, useRef, useState } from "react";
import { getQuillEditor } from "./Editor";
import "react-quill/dist/quill.snow.css";

export const Quill_generic = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const editor = useRef<Quill>();

  const [delta, setdelta] = useState<string>("");
  const [html, sethtml] = useState<string>("");

  useEffect(() => {
    editor.current = getQuillEditor(editorRef);
  }, [editor]);

  return (
    <React.Fragment>
      <div>
        <div ref={editorRef}></div>
        <button
          onClick={() => {
            sethtml(editor.current?.root?.innerHTML!);
            setdelta(JSON.stringify(editor?.current?.getContents()));
          }}
        >
          Get HTML string
        </button>

        <button
          onClick={() => {
            //Deprecated and cannot be used with styles
            // editor?.current?.pasteHTML(
            //   '<div><h1 style="color:red">Your contents here</h1><div>Add something here</div></div>'
            // );
            editor.current?.insertEmbed(
              editor?.current?.getSelection()?.index!,
              "divider",
              "This is a embedded block",
              "silent"
            );
          }}
        >
          Insert custom HTML Element
        </button>

        <h1>HTML content</h1>
        {html}
        <h1>DELTA content</h1>
        {delta}
        <h1>Rendered HTML</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        ></div>
      </div>
    </React.Fragment>
  );
};
