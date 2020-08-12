import React from "react"

const Footer = props => {
  return (
    <div id="footer">
      <div className="row">
        <div className="column">
          <p id="cp">&copy; {props.name}</p>
          <p id="by-gatsby">
            Copyright 2020 - All rights reserved{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/eminvergil"
            >
              Emin Vergil
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
