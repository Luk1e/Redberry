import React, { Component } from "react";

//error
import error from"./../error"
//css
import "./page_3.css";
class Page_3 extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = (param) => {
    this.props.setStateOfParent({
      ...param,
      page_3:
        document.querySelector('input[name="dev-talks"]:checked') != null &&
        (document.querySelector('input[name="dev-talks"]:checked').value ==
        "true"
          ? document.getElementById("devtalks").value != null
          : true)  &&
        document.getElementById("spectalks").value != null &&
         document.getElementById("spectalks").value != ""  &&
        Object.keys(document.getElementsByClassName("error")).length === 0,
    });
  };
  render() {
    return (
      <section className="main-3">
        <header>
          <h1>What about you?</h1>
        </header>

        {/* devtalks */}

        <fieldset className="radios N2 N5 " id="will_organize_devtalk-field">
          <h1>Would you attend Devtalks and maybe also organize your own? (</h1>

          <div>
            <label htmlFor="talks-yes">
              <input
                type="radio"
                name="dev-talks"
                id="talks-yes"
                value="true"
                checked={
                  this.props.state.will_organize_devtalk == "true"
                    ? true
                    : false
                }
                onClick={() => {
                  if (
                    document.contains(
                      document.getElementById("will_organize_devtalk-error")
                    )
                  ) {
                    document
                      .getElementById("will_organize_devtalk-error")
                      .remove();
                  }
                  document.getElementById("aidi-dev").style.display = "flex";
                }}
                onChange={() =>
                  this.handleClick({
                    will_organize_devtalk: document.querySelector(
                      'input[name="dev-talks"]:checked'
                    ).value,
                  })
                }
              />
              Yes
            </label>
          </div>

          <div>
            <label htmlFor="talks-no">
              <input
                type="radio"
                name="dev-talks"
                id="talks-no"
                value="false"
                checked={
                  this.props.state.will_organize_devtalk == "false"
                    ? true
                    : false
                }
                onClick={() => {
                  if (document.contains(document.getElementById("ertalks"))) {
                    document.getElementById("ertalks").remove();
                  }
                  if (
                    document.contains(
                      document.getElementById("will_organize_devtalk-error")
                    )
                  ) {
                    document
                      .getElementById("will_organize_devtalk-error")
                      .remove();
                  }
                  document.getElementById("aidi-dev").style.display = "none";
                }}
                onChange={() =>
                  this.handleClick({
                    will_organize_devtalk: document.querySelector(
                      'input[name="dev-talks"]:checked'
                    ).value,
                  })
                }
              />
              No
            </label>
          </div>
        </fieldset>

        {/* devtalk topic */}
        <fieldset
          className="radios N2 N4"
          id="aidi-dev"
          style={
            this.props.state.will_organize_devtalk == "true"
              ? { display: "flex" }
              : { display: "none" }
          }
        >
          <h1>What would you speak about at Devtalk?</h1>
          <div>
            <textarea
              id="devtalks"
              rows="5"
              cols="30"
              placeholder="I would..."
              defaultValue={this.props.state.devtalk_topic}
              onChange={() => {
                if (document.contains(document.getElementById("ertalks"))) {
                  document.getElementById("ertalks").remove();
                }
                if (document.getElementById("devtalks").value.length == 0) {
                  error("devtalks", "This Field is Required", "ertalks");
                }
                this.handleClick({
                  devtalk_topic: document.getElementById("devtalks").value,
                });
              }}
            />
          </div>
        </fieldset>
        {/* something special */}

        <fieldset className="radios N2 N4">
          <h1>Tell us something special</h1>
          <div>
            <textarea
              id="spectalks"
              rows="5"
              cols="30"
              placeholder="I..."
              defaultValue={this.props.state.something_special}
              onChange={() => {
                if (document.contains(document.getElementById("erspectalks"))) {
                  document.getElementById("erspectalks").remove();
                }
                if (document.getElementById("spectalks").value.length == 0) {
                  error("spectalks", "This Field is Required", "erspectalks");
                }
                this.handleClick({
                  something_special: document.getElementById("spectalks").value,
                });
              }}
            />
          </div>
        </fieldset>
      </section>
    );
  }

}

export default Page_3;
