import React from "react"

import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa"

export default function Info() {
  return (
    <div>
      <div className="col">
        <div className="row">
          <h1 className="isim">Emin Vergil</h1>
          <div className="contact">
            <ul>
              <li>
                <a href="#">
                  <FaTwitter className="f-2x" />
                </a>
                <a href="#">
                  <FaGithub className="f-2x" />
                </a>
                <a href="#">
                  <FaLinkedin className="f-2x" />
                </a>
                <a href="#">
                  <FaStackOverflow className="f-2x" />
                </a>
              </li>
            </ul>
            <p>eminvergil@yahoo.com</p>
          </div>
        </div>
        <hr className="w-25" />
        <div className="h4-container">
          <h4>
            I'm a passionate software developer living in Adana, Turkey. I am
            currenty working on my game, side projects. I love being part of
            development of web technologies. I build things on my GitHub profile
            (<a href="#">here</a>). I love React and .Net Core.
          </h4>
        </div>
        <div className="btn-container">
          <button>Resume</button>
        </div>
      </div>
    </div>
  )
}
