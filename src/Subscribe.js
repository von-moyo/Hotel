import React from "react"

export default function Subscribe(){
  return(
    <div id="box5">
      <h1 class="box2head1" id="box5name">Special Hotel Deals and Offers</h1>
      <p class="box2headp" id="email">Enter your email address to receive secret hotel deals</p>
      <div class="mailbar">
        <input type="text" placeholder="Enter your email address" id="mail" />
          <button class="subbtn">Subscribe</button>
      </div>
    </div>
  )
}