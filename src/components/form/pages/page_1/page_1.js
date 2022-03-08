import React, { Component } from "react";
import axios from "axios";
//css
import "./page_1.css";
// error (explanation see in ./../error)
import error from "./../error";
class Page_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      skills: [], //list of all skills
    };
  }
  handleClick = (param) => {
    this.props.setSkillOfParent(
      {
        ...param,
      },
      {
        page_1:
          Object.keys(document.getElementsByClassName("error")).length === 0,
      }
    );
  };

  render() {
    return (
      <section className="main-1">
        <header>
          <h1>Tell us about your skills</h1>
        </header>

        {/* skills */}

        <select
          id="skill"
          onClick={() => {
            document.getElementById("disabled").disabled = "true";
          }}
          onChange={() => {
            if (document.contains(document.getElementById("twice"))) {
              document.getElementById("twice").remove();
            }
          }}
          className="select"
        >
          <option id="disabled" className="option" value="">
            Skills
          </option>
          {this.props.state.skill_names.map((skill) => (
            <option
              className="option"
              value={[skill.id, skill.title]}
              key={skill.id}
            >
              {skill.title}
            </option>
          ))}
        </select>

        {/* experience years */}
        <input
          type="text"
          id="expYear"
          maxLength={2}
          placeholder="Experience Duration in Years"
          onChange={() => {
            let value = document.getElementById("expYear").value;
            value = value
              .replace(/\s/g, "")
              .replace(/[^0-9.]/g, "")
              .replace(/(\..*)\./g, "$1");

            document.getElementById("expYear").value = value;

            if (document.contains(document.getElementById("zero"))) {
              document.getElementById("zero").remove();
            }
          }}
        />

        {/* exp adder */}

        <div className="skillBtn">
          <button
            onClick={() => {
              if (document.contains(document.getElementById("twice"))) {
                document.getElementById("twice").remove();
              }
              if (document.contains(document.getElementById("zero"))) {
                document.getElementById("zero").remove();
              }
              if (document.contains(document.getElementById("no-skill"))) {
                document.getElementById("no-skill").remove();
              }
              let val1 = document.getElementById("skill").value;
              let val2 = document.getElementById("expYear").value;

              let id = val1.substring(0, val1.indexOf(","));
              let title = val1.substring(val1.indexOf(",") + 1, val1.length);
              //val1 is string
              if (
                this.props.state.skills.some(function (e) {
                  return id == e["id"];
                })
              ) {
                error("skill", "You Can't add one Skill Twice!", "twice");
              } else if (val2 == 0) {
                error("expYear", "Please write Experience Duration", "zero");
              } else if (title == "") {
                error("skill", "Please Choose Skills", "no-skill");
              } else {
                document.getElementById("expYear").value = null;
                this.handleClick({ id: id, title: title, experience: val2 });
              }
            }}
            id="expBtn"
          >
            Add Programming Language
          </button>
        </div>

        {this.props.state.skills.map((skill) => (
          <div key={skill.id} className="exp-div">
            <p>{skill.title}</p>
            <p>
              Years of Experience:
              {skill.experience}
            </p>
            <span
              className="exe"
              onClick={() => {
                this.props.deleteSkillOfParent(skill, {
                  page_1: Object.keys(this.props.state.skills).length > 1,
                });
              }}
            >
              &#8861;
            </span>
          </div>
        ))}
      </section>
    );
  }
}

export default Page_1;
