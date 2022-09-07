import React from "react"
import background8 from './images/image8.jpg'
import background9 from './images/image9.jpg'
import background10 from './images/image10.jpg'
import background11 from './images/image11.jpg'
import background12 from './images/image12.jpg'
import background13 from './images/image13.jpg'


export default function Cities() {
  return (
    <div className="box4">
      <div className="boxx" style={{backgroundImage: `url(${background8})`}}>
        <div className="overlay1" id="ovl"></div>
        <p className="boxxnumber">3,326</p>
        <p className="boxxname">Lagos Hotels</p>
        <div className="boxdarker">
          <button className="boxbutton">Book Hotels in Lagos</button>
        </div>
      </div>
      <div className="boxx" style={{backgroundImage: `url(${background9})`}}>
        <div className="overlay1" id="ovl"></div>
        <p className="boxxnumber">1,129</p>
        <p className="boxxname">Abuja Hotels</p>
        <div className="boxdarker">
          <button className="boxbutton">Book Hotels in Abuja</button>
        </div>
      </div>
      <div className="boxx" style={{backgroundImage: `url(${background10})`}}>
        <div className="overlay1" id="ovl"></div>
        <p className="boxxnumber">277</p>
        <p className="boxxname">Calabar Hotels</p>
        <div className="boxdarker">
          <button className="boxbutton">Book Hotels in Calabar</button>
        </div>
      </div>
      <div className="boxx" style={{backgroundImage: `url(${background11})`}}>
        <div className="overlay1" id="ovl"></div>
        <p className="boxxnumber">379</p>
        <p className="boxxname">Port Harcourt Hotels</p>
        <div className="boxdarker">
          <button className="boxbutton">Book Hotels in PortHarcourt</button>
        </div>
      </div>
      <div className="boxx" style={{backgroundImage: `url(${background12})`}}>
        <div className="overlay1" id="ovl"></div>
        <p className="boxxnumber">179</p>
        <p className="boxxname">Owerri Hotels</p>
        <div className="boxdarker">
          <button className="boxbutton">Book Hotels in Owerri</button>
        </div>
      </div>
      <div className="boxx" style={{backgroundImage: `url(${background13})`}}>
        <div className="overlay1" id="ovl"></div>
        <p className="boxxnumber">196</p>
        <p className="boxxname">Uyo Hotels</p>
        <div className="boxdarker">
          <button className="boxbutton">Book Hotels in Uyo</button>
        </div>
      </div>
    </div>
  )
}