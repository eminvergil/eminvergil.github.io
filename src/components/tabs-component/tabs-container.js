import React from "react"

import Info from "./info"
import Projects from "./projects"

export default function TabsContainer({ tabId }) {
  switch (tabId) {
    case "about":
      return (
        <div>
          <Info />
        </div>
      )
    case "projects":
      return (
        <div>
          <Projects />
        </div>
      )
    default:
      return <div>tabs container</div>
  }
}
