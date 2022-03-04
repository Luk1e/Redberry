import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import { useNavigate } from "react-router-dom";
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
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      fname: null,
      lname: null,
      email: null,
      phone: null,
      skills: {},
    };
  }

//set form first page parameters
  setStateOfParent = (newState) => {
    this.setState({ ...this.state, ...newState });
  };
//set skills from second page
  setSkillOfParent = (newSkill) => {
    this.setState({
      ...this.state,
      skills: {
        ...this.state.skills,
          ...newSkill
      }
    });
  };
// delete skills from second page
  deleteSkillOfParent = (newskill) => {
    let  skills = this.state.skills;
    delete skills[newskill];
   this.setState({
      ...this.state,
            skills
      })
}
  render() {
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
            setStateOfParent={this.setSkillOfParent}
            deleteSkillOfParent={this.deleteSkillOfParent}
          />
        );
        break;
      case 2:
        var Component = <Page_2 />;
        break;
      case 3:
        var Component = <Page_3 />;
        break;
      case 4:
        var Component = <Page_4 />;
        break;
    }

    const changePage = ({ selected }) => {
      this.setState({
        page: selected,
      });
    };

    return (
      <div className="main">
        <main> {Component}</main>
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
        <footer>
          <ReactPaginate
            nextLabel="&#x27A4;"
            previousLabel="&#x27A4;"
            pageCount={5}
            onClick={(selected) => {
              if (selected.isPrevious && selected.selected == 0) {
                window.location.replace(
                  window.location.protocol +
                    "//" +
                    window.location.host +
                    "/Redberry"
                );
              }
            }}
            onPageChange={changePage}
            containerClassName={"pagBtns"}
            previousClassName={"prevBtns"}
            nextClassName={"nextBtns"}
          />
        </footer>
      </div>
    );
  }
}

const Forms = () => (
  <>
    <Form />
  </>
);
export default Forms;
