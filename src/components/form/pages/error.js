import React from "react";

function error(id, text, id2) {
  let element = document.getElementById(id);
  let error = document.createElement("p");
  error.textContent = text;
  error.setAttribute("id", id2);
  error.setAttribute("class", "error");
  element.after(error);
}

export default error;
