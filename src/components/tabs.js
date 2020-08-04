import React, { Component } from "react"

import "./everything.css"

import TabsContainer from "./tabs-component/tabs-container"

// FaInfoCircle
import { FaBeer, FaInfoCircle, FaProjectDiagram } from "react-icons/fa"

export default class Tabs extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false, click: "about" }
  }

  handleClick(e) {
    const clicked = e.target.id

    this.setState(state => ({
      isOpen: !state.isOpen,
      click: clicked,
    }))
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row-ust">
            <div
              id="about"
              role="button"
              onClick={e => this.handleClick(e)}
              onKeyDown={e => this.handleClick(e)}
            >
              <FaInfoCircle id="about" className="f-3x" />
              <p id="about">About</p>
            </div>
            <hr className="ust-hr" />
            <div
              id="projects"
              role="button"
              onClick={e => this.handleClick(e)}
              onKeyDown={e => this.handleClick(e)}
            >
              <FaProjectDiagram id="projects" className="f-3x" />
              <p id="projects">Projects</p>
            </div>
          </div>
          <hr className="w-75" />
          <TabsContainer tabId={this.state.click} />
        </div>
      </>
    )
  }
}
