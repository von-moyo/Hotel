import React from "react"
import bbcLogo from './images/bbc-logo.png'
import forbes from './images/forbes.svg'
import newsweek from './images/newsweek.svg'
import webafrica from './images/webafrica.svg'

export default function Features(){
  return(
    <div class="box6">
      <h1 class="box2head1" id="box6head">We've been featured in</h1>
      <div class="line" id="linebox6"></div>
      <div class="box6images">
        <img src={bbcLogo} class="img" id="img61"/>
          <img src={forbes} class="img"/>
            <img src={newsweek} class="img" id="img6"/>
              <img src={webafrica} class="img" id="imgwebafrica"/>
      </div>
    </div>
  )
}