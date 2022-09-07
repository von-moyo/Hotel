import React from "react"
import logo from "./logo copy.svg"
import whatsapp from "./images/whatsapp.png"
import call from "./images/call.jpg"
import naira from "./images/naira.svg"
import person from "./images/person.svg"
import phone from "./images/phone-icon.svg"
import nairaI from "./images/naira.svg"

export default function Header() {
  return (
    <div className="headerbar">
      <img src={logo} className="logo" />
      <div className="h">
        <div className="vl"><img className="whatsapp" src={whatsapp} /> </div>
        <div className="c">
          <img className="call" src={call} />
          <div className="cb">
            <span className="callbutton"> You can tell us to book your hotel</span>
            <span className="digits"> +234 700 880 8800 <span className="caret" ></span> </span>
          </div>
        </div>
        <div className="n">
          <img className="naira" src={naira} />
          <span className="v7ns" style={{paddingLeft: '4px' }}>₦ <span id="ncaret" className="caret"></span> </span>
        </div>
        <img className="person" src={person} />
        <span className="persontext"> Account <span className="caret" id="pcaret"></span> </span>
      </div>
      <div className="h2">
        <div className="hbox1">
          <img className="phoneicon" src={phone} />
          <span className="call-us">Call us</span> <span className="caret" id="cucaret" ></span>
        </div>
        <div className="hbox2">
          <img className="nairaimg" src={nairaI} />
          <span className="v7ns" style={{paddingLeft: '4px' }}>₦ <span id="nncaret" className="caret"></span> </span>
        </div>
        <div>
          <button id="navbar-toggle" type="button" className="menu">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
      </div>
    </div>
  )
}