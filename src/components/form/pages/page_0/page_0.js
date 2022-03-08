import React, { Component } from "react";

//css
import "./page_0.css";

// error (explanation see in ./../error)
import error from "./../error";
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
  }
  handleClick = (param) => {
    this.props.setStateOfParent({
      ...param,
      page_0:
        document.getElementById("first-name").value != null &&
        document.getElementById("last-name").value != null &&
        document.getElementById("email").value != "" &&
        Object.keys(document.getElementsByClassName("error")).length === 0,
    });
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
          defaultValue={this.props.state.first_name}
          onChange={() => {
            if (document.contains(document.getElementById("fname"))) {
              document.getElementById("fname").remove();
            }
            if (document.getElementById("first-name").value.length < 2) {
              if (document.getElementById("first-name").value.length == 0) {
                error("first-name", "This Field is Required", "fname");
              } else {
                error("first-name", "Enter at least 2 letters", "fname");
              }
            }
            this.handleClick({
              first_name: document.getElementById("first-name").value,
            });
          }}
        />
        {/* Last-name */}
        <input
          type="text"
          id="last-name"
          className="input inp-form"
          placeholder="Last Name"
          defaultValue={this.props.state.last_name}
          onChange={() => {
            if (document.contains(document.getElementById("lname"))) {
              document.getElementById("lname").remove();
            }
            if (document.getElementById("last-name").value.length < 2) {
              if (document.getElementById("last-name").value.length == 0) {
                error("last-name", "This Field is Required", "lname");
              } else {
                error("last-name", "Enter at least 2 letters", "lname");
              }
            }

            this.handleClick({
              last_name: document.getElementById("last-name").value,
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
          onChange={() => {
            if (document.contains(document.getElementById("ename"))) {
              document.getElementById("ename").remove();
            }
            if (!validateEmail(document.getElementById("email").value)) {
              error("email", "Please Enter Correct E-mail address", "ename");
            }

            this.handleClick({ email: document.getElementById("email").value });
          }}
        />
        {/* Phone Number */}
        <input
          id="tel"
          placeholder="+995 5__ __ __ __"
          defaultValue={this.props.state.phone}
          onChange={() => {
            let value = document.getElementById("tel").value;

            if (document.contains(document.getElementById("etel"))) {
              document.getElementById("etel").remove();
            }
            if (
              document.getElementById("tel").value.length != 17 &&
              document.getElementById("tel").value.length != 0 &&
              document.getElementById("tel").value.length != 6 &&
              !(document.getElementById("tel").value == "+995 5  ")
            ) {
              error(
                "tel",
                "Enter Correct Phone Number or Leave it Empty",
                "etel"
              );
            }
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

            this.handleClick({ phone: document.getElementById("tel").value });
          }}
          maxLength="17"
        />
      </section>
    );
  }
}

/*

     Explanation
  I replaced input number so that all chars(except numbers) are removed
  and then I add Geo Format numbers  
  so user can write only digits with Geo Format
*/
export default Page_0;
