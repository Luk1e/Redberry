import React from "react";

//css
import "./applications.css";
//axios
import axios from "axios";
//calendar image
import logo from "./calendar.png"

class Applications extends React.Component {
  //-                  STATE

  constructor(props) {
    super(props);
    this.state = {
      skills:[],
      applications: [],
    };
  }

  //functions
  getApplications = () => {
    axios
      .get(
        "https://bootcamp-2022.devtest.ge/api/applications?token=07fc0e11-8ffc-45c6-9777-eaed19646f2d"
      )
      .then((res) => {
        const applications = res.data;
        this.setState({
          ...this.state,
          applications: applications,
        });
      });
  };
  skillName(id) {

    let skill = [];
    setTimeout(() => { skill = this.state.skills.find((element) => element["id"] == id) }, 200)
     
    return skill["title"];
    
  }
  optionSkills = () => {
    axios.get("https://bootcamp-2022.devtest.ge/api/skills").then((res) => {
      const skills = res.data;
      this.setState({
        ...this.state,
        skills: skills,
      });
    })
  };
  componentDidMount() {
    this.getApplications();
    this.optionSkills();
  }

  render() {
    return (
      <main className="applications">
        <header>
          <h1>Submitted Applications</h1>
        </header>
        {this.state.applications.map((app) => (
          <section key={this.state.applications.indexOf(app)}>
            <header
              onClick={() => {
                if (
                  document.getElementById(this.state.applications.indexOf(app))
                    .style.display == "none" ||
                  document.getElementById(this.state.applications.indexOf(app))
                    .style.display == ""
                ) {
                  document.getElementById(
                    this.state.applications.indexOf(app)
                  ).style.display = "grid";

                  document.getElementById(
                    "h-" + this.state.applications.indexOf(app)
                  ).style.backgroundColor = "#F05039";
                  document.getElementById(
                    "arrow-" + this.state.applications.indexOf(app)
                  ).innerHTML = "&#8963;";
                  document.getElementById(
                    "arrow-" + this.state.applications.indexOf(app)
                  ).className = "up-arrow";
                } else {
                  document.getElementById(
                    this.state.applications.indexOf(app)
                  ).style.display = "none";

                  document.getElementById(
                    "h-" + this.state.applications.indexOf(app)
                  ).style.backgroundColor = "#fe3b1f";
                  document.getElementById(
                    "arrow-" + this.state.applications.indexOf(app)
                  ).innerHTML = "&#8964;";
                  document.getElementById(
                    "arrow-" + this.state.applications.indexOf(app)
                  ).className = "down-arrow";
                }
              }}
              id={"h-" + this.state.applications.indexOf(app)}
            >
              <h1>{this.state.applications.indexOf(app) + 1} </h1>
              <h1
                className="down-arrow"
                id={"arrow-" + this.state.applications.indexOf(app)}
              >
                &#8964;
              </h1>
            </header>
            <div className="content" id={this.state.applications.indexOf(app)}>
              {/* Personal-information */}
              <div className="personal-information">
                <header>
                  <h1>Personal Information</h1>
                </header>
                <div>
                  <h2>First Name</h2>
                  <h3>{app.first_name}</h3>
                </div>
                <div>
                  <h2>Last Name</h2>
                  <h3>{app.last_name}</h3>
                </div>
                <div>
                  <h2>E Mail</h2>
                  <h3>{app.email}</h3>
                </div>
                <div>
                  <h2>Phone</h2>
                  <h3>{app.phone}</h3>
                </div>
              </div>

              {/* Skillset */}

              <div className="skillset">
                <header>
                  <h1>Skillset</h1>
                </header>
                {app.skills.map((skill) => (
                  <div key={skill.id}>
                    <h2>{this.skillName(skill.id)}</h2>
                    <h2>Years of Experience:{skill.experience}</h2>
                  </div>
                ))}
              </div>

              {/* Covid-situation */}

              <div className="covid-situation">
                <header>
                  <h1>Covid Situation</h1>
                </header>
                <div>
                  <h2>how would you prefer to work?</h2>
                  <h3>
                    {app.work_preference == "from_office" ? (
                      <sup className="icon"> &#10686;</sup>
                    ) : (
                      <sup className="icon"> &#9675;</sup>
                    )}
                    From Sairme Office
                  </h3>
                  <h3>
                    {app.work_preference == "from_home" ? (
                      <sup className="icon"> &#10686;</sup>
                    ) : (
                      <sup className="icon"> &#9675;</sup>
                    )}
                    From Home
                  </h3>
                  <h3>
                    {app.work_preference == "hybrid" ? (
                      <sup className="icon"> &#10686;</sup>
                    ) : (
                      <sup className="icon"> &#9675;</sup>
                    )}
                    Hybrid
                  </h3>
                </div>
                <div>
                  <h2>Did you have covid 19?</h2>
                  <h3>
                    {app.had_covid == true ? (
                      <sup className="icon"> &#10686;</sup>
                    ) : (
                      <sup className="icon"> &#9675;</sup>
                    )}
                    Yes
                  </h3>
                  <h3>
                    {app.had_covid == false ? (
                      <sup className="icon"> &#10686;</sup>
                    ) : (
                      <sup className="icon"> &#9675;</sup>
                    )}
                    No
                  </h3>
                </div>
                <div>
                  <h2>When did you have covid 19?</h2>
                  <h4>
                    {app.had_covid_at}
                    <img src={logo} alt="logo"></img>
                  </h4>
                </div>
                <div>
                  <h2>Have you been vaccinated? </h2>
                  <h3>
                    {app.vaccinated == true ? (
                      <sup className="icon"> &#10686;</sup>
                    ) : (
                      <sup className="icon"> &#9675;</sup>
                    )}
                    Yes
                  </h3>
                  <h3>
                    {app.vaccinated == false ? (
                      <sup className="icon"> &#10686;</sup>
                    ) : (
                      <sup className="icon"> &#9675;</sup>
                    )}
                    No
                  </h3>
                </div>
                <div>
                  <h2>When did you get covid vaccine?</h2>
                  <h4>
                    {app.vaccinated_at} <img src={logo} alt="logo"></img>
                  </h4>
                </div>
              </div>

              {/* Insigts */}

              <div className="insigts">
                <header>
                  <h1>Insigts</h1>
                </header>
                <div>
                  <h2>
                    Would you attend Devtalks and maybe also organize your own?
                  </h2>
                  <h3>
                    {app.will_organize_devtalk == true ? (
                      <sup className="icon"> &#10686;</sup>
                    ) : (
                      <sup className="icon"> &#9675;</sup>
                    )}
                    Yes
                  </h3>
                  <h3>
                    {app.will_organize_devtalk == false ? (
                      <sup className="icon"> &#10686;</sup>
                    ) : (
                      <sup className="icon"> &#9675;</sup>
                    )}
                    No
                  </h3>
                </div>
                <div>
                  <h2>What would you speak about at Devtalk?</h2>
                  <h4>{app.devtalk_topic}</h4>
                </div>
                <div>
                  <h2>Tell us somthing special</h2>
                  <h4>{app.something_special}</h4>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
    );
  }
}

export default Applications;
