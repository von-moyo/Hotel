import React from "react"
import call from "./images/call.jpg"

export default function SubscribeAgain(){
  return(
    <div class="box10">

      <div class="box10-1">

        <div class="padlockdiv"><img src={call} class="padlockimage"/></div>
        <div class="box10-mailtxt">
          <p class="box10txt1">Enter your email address to unlock hotel deals</p>
          <p class="box10txt2">Sign up to start receiving exclusive offers</p>
        </div>
      </div>
      <div class="box10-2">
        <input type="text" id="mailregister" placeholder="Enter your email address" />
          <button class="unlockbutton">Unlock</button>
      </div>

    </div>

  )
}