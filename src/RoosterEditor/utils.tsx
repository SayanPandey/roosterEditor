import React, { useRef } from "react";
import { FONT_SIZES } from "roosterjs-editor-api";

export const CreateElementImmutable = (): HTMLElement => {
  var block = document.createElement("span");
  block.draggable = true;
  block.contentEditable = "false";
  block.innerHTML = "Hello block!";
  return block;
};

export const createSection = (): HTMLElement => {
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

  /* test */
  console.log(FONT_SIZES);

  return block;
};
