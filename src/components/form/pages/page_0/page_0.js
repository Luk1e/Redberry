import React, { Component } from "react";
import "./page_0.css";

// function for error appending to dom
function error(id, text, id2) {
  let element = document.getElementById(id);
  let error = document.createElement("p");
  error.textContent = text;
  error.setAttribute("id", id2);
  error.setAttribute("class", "error");
  element.after(error);
}
// Email validation
function validateEmail(emailAdress) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
}

class Page_0 extends Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
      this.state = {
        page: 0,
        fname: null,
        lname: null,
        email: null,
        phone: null,
      };
  }
  handleClick = () => {
    // Simply call the setStateOfParent function from
    // prop and pass required argument
    //  alert(this.props.state.fname)

    this.props.setStateOfParent(this.state);

  };
  render() {
    return (
      <section className="main-0">
        <header>
          <h1>Hey, Rocketeer, what are your coordinates?</h1>
        </header>
        {/* First-name */}
        <input
          type="text"
          id="first-name"
          className="input inp-form"
          placeholder="First Name"
          defaultValue={this.props.state.fname}
          onChange={() => {
            if (document.contains(document.getElementById("fname"))) {
              document.getElementById("fname").remove();
            }
            if (document.getElementById("first-name").value.length < 2) {
              if (document.getElementById("first-name").value.length == 0) {
                error("first-name", "This Field is Required", "fname");
              } else {
                error("first-name", "Enter more than 2 letters", "fname");
              }
            }
            this.setState({ fname: document.getElementById("first-name").value })
          }}
        />
        {/* Last-name */}
        <input
          type="text"
          id="last-name"
          className="input inp-form"
          placeholder="Last Name"
          defaultValue={this.props.state.lname}
          onChange={() => {
            if (document.contains(document.getElementById("lname"))) {
              document.getElementById("lname").remove();
            }
            if (document.getElementById("last-name").value.length < 2) {
              if (document.getElementById("last-name").value.length == 0) {
                error("last-name", "This Field is Required", "lname");
              } else {
                error("last-name", "Enter more than 2 letters", "lname");
              }
            }
              this.setState({
                fname: document.getElementById("last-name").value,
              });
          }}
        />
        {/* E-mail */}
        <input
          type="email"
          className="input inp-form"
          placeholder="E Mail"
          id="email"
          defaultValue={this.props.state.email}
          onBlur={() => {
            if (document.contains(document.getElementById("ename"))) {
              document.getElementById("ename").remove();
            }
            if (!validateEmail(document.getElementById("email").value)) {
              error("email", "Please Enter Correct E-mail address", "ename");
            }
              this.setState({
                fname: document.getElementById("email").value,
              });
          }}
        />
        {/* Phone Number */}
        <input
          id="tel"
          placeholder="+995 5__ __ __ __"
          defaultValue={this.props.state.phone}
          onChange={() => {
            let value = document.getElementById("tel").value;

            if (value.startsWith("+995 ")) {
              value = value.slice(6);
            }
            value = value
              .replace(/\s/g, "")
              .replace(/[^0-9.]/g, "")
              .replace(/(\..*)\./g, "$1");
            switch (value.length) {
              case 1:
                value = value.slice(0, 1);
                break;
              case 2:
                value = value.slice(0, 2);
                break;
              case 3:
                value = value.slice(0, 2) + " " + value.slice(2, 3);
                break;
              case 4:
                value = value.slice(0, 2) + " " + value.slice(2, 4);
                break;
              case 5:
                value =
                  value.slice(0, 2) +
                  " " +
                  value.slice(2, 4) +
                  " " +
                  value.slice(4, 5);
                break;
              case 6:
                value =
                  value.slice(0, 2) +
                  " " +
                  value.slice(2, 4) +
                  " " +
                  value.slice(4, 6);
                break;
              default:
                value =
                  value.slice(0, 2) +
                  " " +
                  value.slice(2, 4) +
                  " " +
                  value.slice(4, 6) +
                  " " +
                  value.slice(6, 8);
                break;
            }
            // I know Its not beautiful here but its beautiful for user :D (I know it could be written easier)
            document.getElementById("tel").value = "+995 5" + value;
            this.setState({
              fname: document.getElementById("tel").value,
            });
          }}
          onBlur={() => {
            if (document.contains(document.getElementById("etel"))) {
              document.getElementById("etel").remove();
            }
            if (
              document.getElementById("tel").value.length != 17 &&
              document.getElementById("tel").value.length != 0 &&
              document.getElementById("tel").value.length != 9
            ) {
              error(
                "tel",
                "Enter Correct Phone Number or Leave it Empty",
                "etel"
              );
            }
          }}
          maxLength="17"
        />
        <button onClick={this.handleClick}>Reveal Title</button>
      </section>
    );
  }
}

/*
   there is written that phone is not required but why we need incorrect numbers?
   so user can leave it empty or write only correct one!!!

*/
/* this is long code but it costs this

     Explanation
  I replaced input number so that all chars(except numbers) are removed
  and then I add Geo Format numbers  
  so user can write only digits with Geo Format
*/
export default Page_0;
