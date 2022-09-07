import React from "react"
import background from "./images/image7.jpg"


export default function Banner() {
  return (
    <div className="boxA">

      <div className="i2" style={{ backgroundImage: `url(${background})` }}>
        <div className="overlay1"></div>
        <h1 className="f1">Find and book hotels in  Nigeria.</h1>
        <h2 className="f2">Search through 13,012 hotels in Nigeria</h2>
      </div>
      <div className="searchbar">
        <div className="searchb">

          <input type="text" placeholder="Search for a city or particular or hotel" name="search" className="textbox1" />
        </div>
        <div className="datebar">
          <input type="text" placeholder="Mon, 24 Jan - Tue , 25th Jan" name="search" className="textbox1" />
        </div>
        <button className="searchbarbutton">
          Find Hotels
        </button>
      </div>

    </div>
  )
}