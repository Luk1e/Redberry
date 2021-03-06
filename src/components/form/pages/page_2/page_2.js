import React, { Component } from "react";

//css
import "./page_2.css";
class Page_2 extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = (param) => {
    this.props.setStateOfParent({
      ...param,
      page_2:
        document.querySelector('input[name="work"]:checked') != null &&
        document.querySelector('input[name="covid-contact"]:checked') != null &&
        document.querySelector('input[name="vaccinated"]:checked') != null &&
        (document.querySelector('input[name="covid-contact"]:checked').value ==
        "true"
          ? document.getElementById("covid-start").value != ""
          : true) &&
        (document.querySelector('input[name="vaccinated"]:checked').value ==
        "true"
          ? document.getElementById("vaccine-last").value != ""
          : true),
    });
  };
  render() {
    return (
      <section className="main-2">
        <header>
          <h1>Covid Stuff</h1>
        </header>
        {/* work from */}
        <fieldset className="radios N1" id="work-field">
          <h1>how would you prefer to work??</h1>

          <div>
            <label htmlFor="office">
              <input
                type="radio"
                name="work"
                id="office"
                value="from_office"
                checked={
                  this.props.state.work_preference == "from_office"
                    ? true
                    : false
                }
                onClick={() => {
                  if (
                    document.contains(document.getElementById("work-error"))
                  ) {
                    document.getElementById("work-error").remove();
                  }
                }}
                onChange={() =>
                  this.handleClick({
                    work_preference: document.querySelector(
                      'input[name="work"]:checked'
                    ).value,
                  })
                }
              />
              From Sairme Office
            </label>
          </div>

          <div>
            <label htmlFor="home">
              <input
                type="radio"
                name="work"
                id="home"
                value="from_home"
                checked={
                  this.props.state.work_preference == "from_home" ? true : false
                }
                onClick={() => {
                  if (
                    document.contains(document.getElementById("work-error"))
                  ) {
                    document.getElementById("work-error").remove();
                  }
                }}
                onChange={() =>
                  this.handleClick({
                    work_preference: document.querySelector(
                      'input[name="work"]:checked'
                    ).value,
                  })
                }
              />
              From Home
            </label>
          </div>

          <div>
            <label htmlFor="hybrid">
              <input
                type="radio"
                id="hybrid"
                name="work"
                value="hybrid"
                checked={
                  this.props.state.work_preference == "hybrid" ? true : false
                }
                onClick={() => {
                  if (
                    document.contains(document.getElementById("work-error"))
                  ) {
                    document.getElementById("work-error").remove();
                  }
                }}
                onChange={() =>
                  this.handleClick({
                    work_preference: document.querySelector(
                      'input[name="work"]:checked'
                    ).value,
                  })
                }
              />
              Hybrid
            </label>
          </div>
        </fieldset>

        {/* covid contact */}

        <fieldset className="radios N2" id="covid-contact-field">
          <h1>Did you contact covid 19? :(</h1>

          <div>
            <label htmlFor="covid-yes">
              <input
                type="radio"
                name="covid-contact"
                id="covid-yes"
                value="true"
                checked={this.props.state.had_covid == "true" ? true : false}
                onChange={() =>
                  this.handleClick({
                    had_covid: document.querySelector(
                      'input[name="covid-contact"]:checked'
                    ).value,
                  })
                }
                onClick={() => {
                  
                     if (
                       document.contains(
                         document.getElementById("had_covid-error")
                       )
                     ) {
                       document.getElementById("had_covid-error").remove();
                     }
                
                  document.getElementById("aidi").style.display = "flex";
                }}
              />
              Yes
            </label>
          </div>

          <div>
            <label htmlFor="covid-no">
              <input
                type="radio"
                name="covid-contact"
                id="covid-no"
                value="false"
                onClick={() => {
                  if (
                    document.contains(
                      document.getElementById("had_covid-error")
                    )
                  ) {
                    document.getElementById("had_covid-error").remove();
                  }
                   if (
                     document.contains(
                       document.getElementById("had_covid_at-error")
                     )
                   ) {
                     document.getElementById("had_covid_at-error").remove();
                   }
                  document.getElementById("aidi").style.display = "none";
                }}
                checked={this.props.state.had_covid == "false" ? true : false}
                onChange={() =>
                  this.handleClick({
                    had_covid: document.querySelector(
                      'input[name="covid-contact"]:checked'
                    ).value,
                  })
                }
              />
              No
            </label>
          </div>
        </fieldset>
        {/* covid time */}

        <fieldset
          id="aidi"
          className="radios N3"
          style={
            this.props.state.had_covid == "true"
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          <h1>When?</h1>
          <input
            name="covid-yes"
            id="covid-start"
            placeholder="Date"
            type="text"
            defaultValue={this.props.state.had_covid_at}
            onChange={() => {
              if (
                document.contains(document.getElementById("had_covid_at-error"))
              ) {
                document.getElementById("had_covid_at-error").remove();
              }
              this.handleClick({
                had_covid_at: document.getElementById("covid-start").value,
              })
            }}
            
            onFocus={() => {
              document.getElementById("covid-start").type = "date";
            }}
            onBlur={() => {
              document.getElementById("covid-start").type = "text";
            }}
          />
        </fieldset>

        {/* vaccinated*/}
        <fieldset className="radios N2" id="vaccinated-field">
          <h1>Have you been vaccinated?</h1>

          <div>
            <label htmlFor="vaccinated-yes">
              <input
                type="radio"
                name="vaccinated"
                id="vaccinated-yes"
                value={true}
                checked={this.props.state.vaccinated == "true" ? true : false}
                onChange={() =>
                  this.handleClick({
                    vaccinated: document.querySelector(
                      'input[name="vaccinated"]:checked'
                    ).value,
                  })
                }
                onClick={() => {
                  if (
                    document.contains(
                      document.getElementById("vaccinated-error")
                    )
                  ) {
                    document.getElementById("vaccinated-error").remove();
                  }
                  document.getElementById("aidi-1").style.display = "flex";
                }}
              />
              Yes
            </label>
          </div>

          <div>
            <label htmlFor="vaccinated-no">
              <input
                type="radio"
                name="vaccinated"
                id="vaccinated-no"
                value={false}
                onClick={() => {
                  if (
                    document.contains(
                      document.getElementById("vaccinated-error")
                    )
                  ) {
                    document.getElementById("vaccinated-error").remove();
                  }
                   if (
                document.contains(
                  document.getElementById("vaccinated_at-error")
                )
              ) {
                document.getElementById("vaccinated_at-error").remove();
              };
                  document.getElementById("aidi-1").style.display = "none";
                }}
                checked={this.props.state.vaccinated == "false" ? true : false}
                onChange={() =>
                  this.handleClick({
                    vaccinated: document.querySelector(
                      'input[name="vaccinated"]:checked'
                    ).value,
                  })
                }
              />
              No
            </label>
          </div>
        </fieldset>
        {/* vacinated at */}
        <fieldset
          id="aidi-1"
          className="radios N3"
          style={
            this.props.state.vaccinated == "true"
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          <h1>When did you get your last covid vaccine?</h1>
          <input
            name="covid-yes"
            id="vaccine-last"
            placeholder="Date"
            type="text"
            defaultValue={this.props.state.vaccinated_at}
            onChange={() => {
              if (
                document.contains(
                  document.getElementById("vaccinated_at-error")
                )
              ) {
                document.getElementById("vaccinated_at-error").remove();
              };
              this.handleClick({
                vaccinated_at: document.getElementById("vaccine-last").value,
              })
            }
            }
            onFocus={() => {
              document.getElementById("vaccine-last").type = "date";
            }}
            onBlur={() => {
              document.getElementById("vaccine-last").type = "text";
            }}
          />
        </fieldset>
      </section>
    );
  }
}
export default Page_2;
