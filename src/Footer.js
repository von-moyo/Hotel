import React from "react"
import twitter from './images/twitter.svg'
import image15 from './images/image15.png'
import image16 from './images/image16.png'

export default function Footer(){
  return(
    <div class="box12">
      <div class="footericons">
        <p class="footer1">Copyright © 2022 Hotel Booking Limited All Rights Reserved</p>
        <img src={twitter} class="twitter"/>
          <img src=""/>
            <img src=""/>
            </div>

            <div class="footer2">
              <p class="footer1">Certified by: </p>
              <img src={image15} class="footer2img" id="f1"/>
                <img src={image16} class="footer2img"/>
                </div>

            </div>
  )
}