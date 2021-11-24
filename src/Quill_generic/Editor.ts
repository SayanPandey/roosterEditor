import Quill, { QuillOptionsStatic } from "quill";
import React from "react";
import { RefObject } from "react";
import "../RoosterEditor/style.css";

var DirectionAttribute = Quill.import("attributors/attribute/direction");
Quill.register(DirectionAttribute, true);
var AlignClass = Quill.import("attributors/class/align");
Quill.register(AlignClass, true);
var BackgroundClass = Quill.import("attributors/class/background");
Quill.register(BackgroundClass, true);
var ColorClass = Quill.import("attributors/class/color");
Quill.register(ColorClass, true);
var DirectionClass = Quill.import("attributors/class/direction");
Quill.register(DirectionClass, true);
var FontClass = Quill.import("attributors/class/font");
Quill.register(FontClass, true);
var SizeClass = Quill.import("attributors/class/size");
Quill.register(SizeClass, true);
var AlignStyle = Quill.import("attributors/style/align");
Quill.register(AlignStyle, true);
var BackgroundStyle = Quill.import("attributors/style/background");
Quill.register(BackgroundStyle, true);
var ColorStyle = Quill.import("attributors/style/color");
Quill.register(ColorStyle, true);
var DirectionStyle = Quill.import("attributors/style/direction");
Quill.register(DirectionStyle, true);
var FontStyle = Quill.import("attributors/style/font");
Quill.register(FontStyle, true);
var SizeStyle = Quill.import("attributors/style/size");
Quill.register(SizeStyle, true);

export const getQuillEditor = (elementRef: RefObject<HTMLDivElement>) => {
  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  var options = {
    debug: "info",
    modules: {
      toolbar: toolbarOptions,
    },
    readOnly: false,
    theme: "snow",
  };

  // let BlockEmbed: any = Quill.import("blots/block/embed");
  let BlockEmbed: any = Quill.import("blots/inline");

  class DividerBlot extends BlockEmbed {
    static create(val: any) {
      // const node = document.createElement("div");
      // node.className = "section-block";
      // node.setAttribute("contenteditable", "true");

      var superContainer: HTMLElement = super.create();
      superContainer.className = "section-block";
      superContainer.contentEditable = "false";

      var container: HTMLElement = document.createElement("div");
      container.className = "section-container";

      const heading = document.createElement("h1");
      heading.className = "section-heading";
      heading.contentEditable = "true";
      heading.innerText = "Place your heading here";

      const nodeChild: HTMLElement = document.createElement("span");

      superContainer.appendChild(container);
      container.appendChild(heading);
      container.appendChild(nodeChild);

      nodeChild.contentEditable = "true";
      nodeChild.innerHTML = val;
      return superContainer;
    }

    static blotName = "divider";
    static tagName = "div";
  }

  Quill.register(DividerBlot);

  return new Quill(elementRef.current!, options);
};
