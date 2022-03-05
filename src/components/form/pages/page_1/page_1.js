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
    this.props.setStateOfParent(param);
  };
  optionSkills = () => {
    axios.get("https://bootcamp-2022.devtest.ge/api/skills").then((res) => {
      const skills = res.data;
      this.setState({ skills: skills });
    });
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
          onClick={this.optionSkills}
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
          {this.state.skills.map((skill) => (
            <option className="option" value={skill.title} key={skill.id}>
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

              if (
                this.props.state.skills.some(function (e) {
                  return val1 in e;
                })
              ) {
                error("skill", "You Can't add one Skill Twice!", "twice");
              } else if (val2 == 0) {
                error("expYear", "Please write Experience Duration", "zero");
              } else if (val1 == "") {
                error("skill", "Please Choose Skills", "no-skill");
              } else {
                document.getElementById("expYear").value = null;
                this.handleClick({ [val1]: val2 });
              }
            }}
            id="expBtn"
          >
            Add Programming Language
          </button>
        </div>

        {this.props.state.skills.map((skill) => (
          <div key={Object.keys(skill)[0]} className="exp-div">
            <p>{Object.keys(skill)[0]}</p>
            <p>
              Years of Experience:
              {
                this.props.state.skills.find(
                  (elem) => Object.keys(elem)[0] == Object.keys(skill)[0]
                )[Object.keys(skill)[0]]
              }
            </p>
            <span
              className="exe"
              onClick={() => {
                this.props.deleteSkillOfParent(skill);
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
