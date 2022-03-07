//imports
// react
import React, { useState } from "react";
//error
import error from "./pages/error";
//axios
import axios from "axios";

// pages
import Page_0 from "./pages/page_0/page_0";
import Page_1 from "./pages/page_1/page_1";
import Page_2 from "./pages/page_2/page_2";
import Page_3 from "./pages/page_3/page_3";
import Page_4 from "./pages/page_4/page_4";
//css
import "./form.css";
//data
import { asideData } from "./src/aside.js";

//-                       CLASS          COMPONENT

class Form extends React.Component {
  //-                  STATE

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      page_0: false,
      page_1: false,
      page_2: false,
      page_3: false,
      skill_names: null,
      first_name: null,
      last_name: null,
      email: null,
      phone: null,
      skills: [],
      work_preference: null,
      had_covid: null,
      had_covid_at: null,
      vaccinated: null,
      vaccinated_at: null,
      will_organize_devtalk: null,
      devtalk_topic: null,
      something_special: null,
    };
  }

  // -                        F U N C T I O N S 

  // get skills from api
  optionSkills = () => {
    axios.get("https://bootcamp-2022.devtest.ge/api/skills").then((res) => {
      const skills = res.data;
      this.setState({
        ...this.state,
        skill_names: skills,
      });
    });
  };

  // -                         Page Errors search

  //first page search

  First_search = () => {
    if (
      this.state.first_name == null &&
      !document.contains(document.getElementById("fname"))
    ) {
      error("first-name", "This Field is Required", "fname");
    }
    if (
      this.state.last_name == null &&
      !document.contains(document.getElementById("lname"))
    ) {
      error("last-name", "This Field is Required", "lname");
    }
    if (
      this.state.email == null &&
      !document.contains(document.getElementById("ename"))
    ) {
      error("email", "This Field is Required", "ename");
    }
  };

  // second page

  Second_search = () => {
    if (
      this.state.skills.length == 0 &&
      !document.contains(document.getElementById("no-skill"))
    ) {
      error("skill", "This Field is Required", "no-skill");
    }
  };

  //third page

  Third_search = () => {
    let pass = null;
    if (
      this.state.work_preference == null &&
      !document.contains(document.getElementById("work-error"))
    ) {
      error("work-field", "This Field is Required", "work-error");
    }
    this.state.had_covid == null &&
    !document.contains(document.getElementById("had_covid-error"))
      ? error(
          "covid-contact-field",
          "This Field is Required",
          "had_covid-error"
        )
      : this.state.had_covid == "true"
      ? (this.state.had_covid_at == null || this.state.had_covid_at == "") &&
        !document.contains(document.getElementById("had_covid_at-error"))
        ? error("aidi", "This Field is Required", "had_covid_at-error")
        : (pass = null)
      : (pass = null);

    this.state.vaccinated == null &&
    !document.contains(document.getElementById("vaccinated-error"))
      ? error("vaccinated-field", "This Field is Required", "vaccinated-error")
      : this.state.vaccinated == "true"
      ? (this.state.vaccinated_at == null || this.state.vaccinated_at == "") &&
        !document.contains(document.getElementById("vaccinated_at-error"))
        ? error("aidi-1", "This Field is Required", "vaccinated_at-error")
        : (pass = null)
      : (pass = null);
  };

  // fourth page

  Fourth_search = () => {
    if (
      this.state.will_organize_devtalk == null &&
      !document.contains(document.getElementById("will_organize_devtalk-error"))
    ) {
      error(
        "will_organize_devtalk-field",
        "This Field is Required",
        "will_organize_devtalk-error"
      );
    }
    if (
      (this.state.something_special == null ||
        this.state.something_special == "") &&
      !document.contains(document.getElementById("erspectalks"))
    ) {
      error("spectalks", "This Field is Required", "erspectalks");
    }
    if (
      this.state.will_organize_devtalk == "true" &&
      this.state.devtalk_topic == null &&
      !document.contains(document.getElementById("ertalks"))
    ) {
      error("devtalks", "This Field is Required", "ertalks");
    }
  };

  //set state parameters

  setStateOfParent = (newState) => {
    this.setState({ ...this.state, ...newState });
  };

  //set skills from second page

  setSkillOfParent = (newSkill, page) => {
    this.setState({
      ...this.state,
      skills: [...this.state.skills, newSkill],
      ...page,
    });
  };

  // delete skills from second page

  deleteSkillOfParent = (newskill, page) => {
    let updatedSkills = this.state.skills.filter(function (el) {
      return el != newskill;
    });
    this.setState({
      ...this.state,
      skills: updatedSkills,
      ...page,
    });
  };
  // give skills to second page(part of code)

  componentDidMount() {
    this.optionSkills();
  }
  //-                         B U T T O N   F U N C T I O N(additional)
  btnDisable =(id) => {
    document.getElementById(id).style.opacity = "0.1";
  }
  btnEnable=(id) => {
    document.getElementById(id).style.opacity = "1";
  }
  // -                         Render

  render() {
    // -                        Return Pages
    // -     I give special functions to speciel pages(ex: skill page-> setting and deleting skills)

    switch (this.state.page) {
      case 0:
        var Component = (
          <Page_0 state={this.state} setStateOfParent={this.setStateOfParent} />
        );
        break;
      case 1:
        var Component = (
          <Page_1
            state={this.state}
            setSkillOfParent={this.setSkillOfParent}
            deleteSkillOfParent={this.deleteSkillOfParent}
          />
        );
        break;
      case 2:
        var Component = (
          <Page_2 state={this.state} setStateOfParent={this.setStateOfParent} />
        );
        break;
      case 3:
        var Component = (
          <Page_3 state={this.state} setStateOfParent={this.setStateOfParent} />
        );
        break;
      case 4:
        var Component = (
          <Page_4 state={this.state} setStateOfParent={this.setStateOfParent} />
        );
        break;
    }
    // -                         Return

    return (
      <div className="main">
        <main> {Component}</main>

        {/* right side content */}

        <aside>
          {asideData
            .filter((item) => item.page == this.state.page)
            .map((data, key) => {
              return (
                <div key={key}>
                  <h1>{data.header}</h1>
                  <p>{data.text}</p>
                </div>
              );
            })}
        </aside>

        {/* Buttons */}

        <footer>
          <div className="pagBtns">
            {/* prevBtns */}

            <div
              className="prevBtns"
              onClick={() => {
                if (this.state.page == 0) {
                  window.location.replace(
                    window.location.protocol +
                      "//" +
                      window.location.host +
                      "/Redberry"
                  );
                }
                this.setStateOfParent({ page: this.state.page - 1 });
              }}
            >
              &#x27A4;
            </div>
            {/* button 0 */}
            <div
              id="0"
              onClick={() => {
                this.setStateOfParent({
                  page: 0,
                });
              }}
            >
              d
            </div>
            {/* button 1 */}
            <div
              id="1"
              onClick={() => {
                if (!this.state.page_0 && this.state.page < 1) {
                  this.First_search();
                } else {this.btnEnable("1");
                  this.setStateOfParent({
                    page: 1,
                  });
                }
              }}
            >
              d
            </div>
            {/* button 2 */}
            <div
              className=""
              id="2"
              onClick={() => {
                if (
                  (!this.state.page_0 || !this.state.page_1) &&
                  this.state.page < 2
                ) {
                  switch (this.state.page) {
                    case 0:
                      this.First_search();
                      break;
                    case 1:
                      this.Second_search();
                      break;
                  }
                } else {
                   this.btnEnable("2");
                  this.setStateOfParent({
                    page: 2,
                  });
                }
              }}
            >
              d
            </div>
            {/* button 3 */}
            <div
              id="3"
              onClick={() => {
                if (
                  (!this.state.page_0 ||
                    !this.state.page_1 ||
                    !this.state.page_2) &&
                  this.state.page < 3
                ) {
                  switch (this.state.page) {
                    case 0:
                      this.First_search();
                      break;
                    case 1:
                      this.Second_search();
                      break;
                    case 2:
                      this.Third_search();
                      break;
                  }
                } else {
                  this.btnEnable("3");
                  this.setStateOfParent({
                    page: 3,
                  });
                }
              }}
            >
              d
            </div>
            {/* button 4 */}
            <div
              id="4"
              onClick={() => {
                if (
                  (!this.state.page_0 ||
                    !this.state.page_1 ||
                    !this.state.page_2 ||
                    !this.state.page_3) &&
                  this.state.page < 4
                ) {
                  switch (this.state.page) {
                    case 0:
                      this.First_search();
                      break;
                    case 1:
                      this.Second_search();
                      break;
                    case 2:
                      this.Third_search();
                      break;
                    case 3:
                      this.Fourth_search();
                      break;
                  }
                } else {
                  this.btnEnable("4");
                  this.setStateOfParent({
                    page: 4,
                  });
                }
              }}
            >
              d
            </div>
            {/* nextBTN */}
            <div
              className="nextBtns"
              onClick={() => {
                if (eval("this.state.page_" + this.state.page)) {
                  this.btnEnable(""+(this.state.page+1))
                  this.setStateOfParent({
                    page: this.state.page + 1,
                  });
                } else {
                  switch (this.state.page) {
                    case 0:
                      this.First_search();
                      break;
                    case 1:
                      this.Second_search();
                      break;
                    case 2:
                      this.Third_search();
                      break;
                    case 3:
                      this.Fourth_search();
                      break;
                  }
                }
              }}
            >
              &#x27A4;
            </div>
          </div>
          {/* I HATE REACT PAGINATION */}
        </footer>
      </div>
    );
  }
}

//-         I know this part is unnecessary
//-    ( I had conceived the page structure differently)
//-  But I won't change it now becuase of law:
//-   If The Code Works, Don't Touch It ! :D
const Forms = () => (
  <>
    <Form />
  </>
);
export default Forms;
