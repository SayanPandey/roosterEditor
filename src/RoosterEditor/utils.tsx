import React, { useRef } from "react";
import { FONT_SIZES } from "roosterjs-editor-api";
import * as roosterjs from "roosterjs";
import { IEditor, VList } from "roosterjs";

const headerDummyText = "Here's how we use cookies";
const description1 =
  "To give you best experience we tailor our site to show the most relevant content and bring helpful offers to you.";
const description2 =
  "You can update your preferences at anytime,at the bottom of the page. Learn more about how your data is used in our cookie policy.";

export const CreateElementImmutable = (): HTMLElement => {
  var block = document.createElement("span");
  block.draggable = true;
  block.contentEditable = "false";
  block.innerHTML = "Hello block!";
  return block;
};

export const createSection = (editor: any): HTMLElement => {
  var block = document.createElement("div");
  block.className = "section-block";

  var container = document.createElement("div");
  container.className = "section-container";

  var heading = document.createElement("span");
  heading.className = "section-heading";
  heading.innerText = "Place your heading here";

  var descrtiption = document.createElement("span");
  descrtiption.className = "section-desctiption";
  descrtiption.innerText = "Place your description here";

  block.appendChild(container);
  container.appendChild(heading);
  container.appendChild(descrtiption);
  const something = editor.getBlockElementAtNode(block);
  console.log(something);

  return block;
};

export const noticeTemplate1 = (): HTMLElement => {
  var block = document.createElement("span");
  block.className = "section-block";

  var container = document.createElement("span");
  container.className = "section-container";

  var heading = document.createElement("span");
  heading.className = "section-heading";
  heading.innerText = "Place your heading here";

  var descrtiption = document.createElement("span");
  descrtiption.className = "section-desctiption";
  descrtiption.innerText = "Place your description here";

  block.appendChild(container);
  container.appendChild(heading);
  container.appendChild(descrtiption);

  /* test */
  console.log(FONT_SIZES);

  return block;
};

export const noticeTemplate2 = () => {
  const container = roosterjs.createElement(
    {
      tag: "div",
      className: "notice-template-2",
      attributes: {
        contenteditable: "true",
      },
      dataset: {
        string: "hello",
      },
    },
    document
  );

  const descriptionP = roosterjs.createElement(
    {
      tag: "div",
      attributes: {
        contenteditable: "true",
      },
      dataset: {
        string: "hello",
      },
      className: "description-1",
    },
    document
  );
  descriptionP.innerHTML = description1;

  const descriptionS = roosterjs.createElement(
    {
      tag: "div",
      attributes: {
        contenteditable: "true",
      },
      dataset: {
        string: "hello",
      },
      className: "description-2",
    },
    document
  );
  descriptionS.innerHTML = description1;

  const head = roosterjs.createElement(
    {
      tag: "div",
      className: "heading",
      attributes: {
        contenteditable: "true",
      },
      dataset: {
        string: "hello",
      },
    },
    document
  );
  head.innerHTML = headerDummyText;

  container.appendChild(head);
  container.appendChild(descriptionP);
  container.appendChild(descriptionS);
  container.appendChild(ULList());

  return container;
};

export const ULList = () => {
  const OLList = roosterjs.createElement(
    {
      tag: "ul",
      attributes: {
        contenteditable: "true",
      },
      children: [
        { tag: "li", children: ["To personalize your experience"] },
        { tag: "li", children: ["To bring you most relevant contents"] },
        { tag: "li", children: ["To show the most useful ads"] },
        { tag: "li", children: ["To help report any issues with our site"] },
      ],
    },
    document
  );

  return OLList;
};
