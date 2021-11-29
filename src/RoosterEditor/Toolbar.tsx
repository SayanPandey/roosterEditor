import React, { useRef, useState } from "react";
import { Alignment, IEditor } from "roosterjs-editor-types";
import * as roosterjs from "roosterjs";
import { FONT_SIZES } from "roosterjs";
import { createSection, noticeTemplate2 } from "./utils";

interface IToolbarProps {
  editor: IEditor;
}

const FONT_NAMES: Map<string, string> = new Map([
  ["Arial", "Arial, sans-serif"],
  ["Verdana", "Verdana, sans-serif"],
  ["Helvetica", "Helvetica, sans-serif"],
  ["Tahoma", "Tahoma, sans-serif"],
  ["Trebuchet MS", "Trebuchet MS, sans-serif"],
  ["Times New Roman", "'Times New Roman', serif"],
  ["Georgia", "Georgia, serif"],
  ["Garamond", "Garamond, serif"],
  ["Cournier New", "Courier New, monospace"],
  ["Brush Script MT", "'Brush Script MT', cursive"],
]);

export const Toolbar = (props: IToolbarProps) => {
  const { editor } = props;

  const inputColorRef = useRef<HTMLInputElement>(null);
  const inputBGColorRed = useRef<HTMLInputElement>(null);
  const linkContainerRef = useRef<HTMLDivElement>(null);

  const [textColor, settextColor] = useState("#545454");
  const [bgColor, setbgColor] = useState("#ffffff");
  const [link, setlink] = useState("");

  return (
    <React.Fragment>
      <div className="fx-row toolbar">
        <div className="fx-col group">
          {/* Font family and Size */}
          <div className="fx-row">
            <select
              className="font-family-select"
              onChange={(event) => {
                roosterjs.setFontName(
                  editor,
                  String(FONT_NAMES.get(event.target.value))
                );
                // editor.current!.triggerContentChangedEvent();
              }}
            >
              {Array.from(FONT_NAMES.keys()).map((x) => (
                <option value={x} style={{ fontFamily: FONT_NAMES.get(x) }}>
                  {x}
                </option>
              ))}
            </select>

            <select
              className="font-family-select"
              onChange={(event) => {
                roosterjs.setFontSize(
                  editor,
                  String(FONT_SIZES[event.target.selectedIndex] + "px")
                );
                // editor.current!.triggerContentChangedEvent();
              }}
            >
              {FONT_SIZES.map((x) => (
                <option value={x} style={{ fontSize: x }}>
                  Heading {x} px
                </option>
              ))}
            </select>
          </div>

          {/* Some basic font function */}
          <div className="fx-row">
            <button
              className="font-button-basic"
              onClick={() => roosterjs.toggleBold(editor)}
            >
              <strong>B</strong>
            </button>
            <button
              className="font-button-basic"
              onClick={() => roosterjs.toggleItalic(editor)}
            >
              <i>I</i>
            </button>
            <button
              className="font-button-basic"
              onClick={() => roosterjs.toggleUnderline(editor)}
            >
              <u>U</u>
            </button>
            <button
              className="font-button-basic"
              onClick={() => roosterjs.toggleStrikethrough(editor)}
            >
              <s>ab</s>
            </button>

            <div className="color">
              <button
                className="font-button-basic"
                onClick={() => {
                  inputColorRef.current!.click();
                }}
                style={{
                  color: textColor,
                }}
              >
                A
              </button>
              <input
                ref={inputColorRef}
                className="color-input"
                type="color"
                value={textColor}
                onChange={(event) => {
                  settextColor(event.target.value);
                  roosterjs.setTextColor(editor, String(event.target.value));
                }}
              />
            </div>

            <div className="color">
              <button
                className="font-button-basic"
                onClick={() => {
                  inputBGColorRed.current!.click();
                }}
                style={{
                  backgroundColor: bgColor,
                }}
              >
                A
              </button>
              <input
                ref={inputBGColorRed}
                className="color-input"
                type="color"
                value={bgColor}
                onChange={(event) => {
                  setbgColor(event.target.value);
                  roosterjs.setBackgroundColor(
                    editor,
                    String(event.target.value)
                  );
                }}
              />
              <button
                className="font-button-basic"
                style={{ fontSize: 12 }}
                onClick={() => {
                  linkContainerRef.current?.setAttribute(
                    "style",
                    "visibility:visible"
                  );
                }}
              >
                &#128279;
              </button>
              <div
                // onBlur={() =>
                //   linkContainerRef.current?.setAttribute(
                //     "style",
                //     "visibility:hidden"
                //   )
                // }
                ref={linkContainerRef}
                className="fx-col link-container"
              >
                <div className="fx-col link-set-container">
                  <input
                    onChange={(event) => setlink(event.target.value)}
                    type="text"
                  />
                  <div className="fx-row ">
                    <button
                      className="font-button-basic"
                      style={{ fontSize: 10, width: "auto" }}
                      onClick={() => roosterjs.createLink(editor, link)}
                    >
                      Set
                    </button>
                    <button
                      className="font-button-basic"
                      style={{ fontSize: 10, width: "auto" }}
                      onClick={() => roosterjs.removeLink(editor)}
                    >
                      Remove
                    </button>
                    <button
                      className="font-button-basic"
                      style={{ fontSize: 10, width: "auto" }}
                      onClick={() =>
                        linkContainerRef.current?.setAttribute(
                          "style",
                          "visibility:hidden"
                        )
                      }
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alignments control */}
        <div className="fx-col group">
          <div className="fx-row">
            <button
              className="font-button-basic"
              onClick={() => roosterjs.setAlignment(editor, 0)}
            >
              &#8592;
            </button>
            <button
              className="font-button-basic"
              onClick={() => roosterjs.setAlignment(editor, 1)}
            >
              &#8596;
            </button>
            <button
              className="font-button-basic"
              onClick={() => roosterjs.setAlignment(editor, 2)}
            >
              &#8594;
            </button>
          </div>
          Alignment
        </div>

        <div className="fx-col group">
          <div className="fx-row">
            <button
              className="font-button-basic"
              onClick={() => editor.insertNode(noticeTemplate2())}
            >
              &#9847;
            </button>

            <button
              className="font-button-basic"
              onClick={() => editor.insertNode(createSection(editor))}
            >
              &#9857;
            </button>
          </div>
          Notice templates
        </div>

        <div className="fx-col group">
          <div className="fx-row">
            <button
              className="font-button-basic"
              onClick={() => editor.setContent("")}
            >
              &#215;
            </button>
          </div>
          Clear
        </div>
      </div>
    </React.Fragment>
  );
};
