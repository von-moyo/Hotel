import React from "react"
import image14 from './images/image14.png'
import gplay from './images/gplay.png'

export default function GetApp(){
  return(
    <div class="box9">

      <img src={image14} class="imgbox9" />
        <div class="box9desc">
          <h1 class="box9txt1">Get the Hotels.ng app</h1>
          <h2 class="box9txt2">Download the hotels.ng app and book a hotel instantly</h2>
          <h3 class="box9txt3">Book your hotel instantly with our Android App</h3>
          <img src={gplay} class="gplayimg" />
        </div>

    </div>
  )
}