import React from "react";
//This element gets the ID of the element after which it is to be created, the context and its ID
function error(id, text, id2) {
  let element = document.getElementById(id);
  let error = document.createElement("p");
  error.textContent = text;
  error.setAttribute("id", id2);
  error.setAttribute("class", "error");
  element.after(error);
}

export default error;
