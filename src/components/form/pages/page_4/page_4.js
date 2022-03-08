import React, { Component } from "react";

//css
import "./page_4.css";

class Page_4 extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = (param) => {
    this.props.setStateOfParent(param);
  };
  createPost() {
    document.getElementById("thanks").style.display = "flex";
    setTimeout(() => {
      window.location.replace(
        window.location.protocol + "//" + window.location.host + "/Redberry"
      );
    }, 3000);
    let new_skills = this.props.state.skills;
    new_skills.forEach((object) => {
      delete object["title"];
    });
    let data = {
      token: "a0cc00c4-a28f-4a5f-98b3-a5cbec6c6abf",
      first_name: this.props.state.first_name,
      last_name: this.props.state.last_name,
      email: this.props.state.email,

      ...(this.props.state.phone != null &&
        this.props.state.phone.length == 17 && {
          phone: this.props.state.phone,
        }),

      skills: new_skills,
      work_preference: this.props.state.work_preference,
      had_covid: this.props.state.had_covid.toLowerCase() === "true",
      ...(this.props.state.had_covid_at != null &&
        this.props.state.had_covid_at != "" && {
          had_covid_at: this.props.state.had_covid_at,
        }),

      vaccinated: this.props.state.vaccinated.toLowerCase() === "true",
      ...(this.props.state.vaccinated_at != null &&
        this.props.state.vaccinated_at != "" && {
          vaccinated_at: this.props.state.vaccinated_at,
        }),
      will_organize_devtalk:
        this.props.state.will_organize_devtalk.toLowerCase() === "true",
      ...(this.props.state.will_organize_devtalk.toLowerCase() === "true" && {
        devtalk_topic: this.props.state.devtalk_topic,
      }),
      something_special: this.props.state.something_special,
    };
    return fetch("https://bootcamp-2022.devtest.ge/api/application", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response;
        } else {
          console.log("Somthing happened wrong");
        }
      })
      .catch((err) => err);
  }
  render() {
    return (
      <section className="main-4">
        <button
          onClick={() => {
            this.createPost();
          }}
        >
          Submit
        </button>
        <h1
          onClick={() => {
            this.handleClick({
              page: 3,
            });
          }}
          className="back"
        >
          go back
        </h1>

        <div id="thanks">Thanks for Joining 😊</div>
      </section>
    );
  }
}
export default Page_4;
