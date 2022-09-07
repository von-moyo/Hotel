import React from "react"
import background3 from './images/image3.jpg'
import background2 from './images/image2.jpg'
import background1 from './images/image1.jpg'
import background5 from './images/image5.jpg'

export default function HotelDeals() {
  return (
    <div className="box3">

      <div className="cards">
        <div className="card">
          <div className="sticker">
            <p className="stick">Up to <b>15%</b> off </p>
            <div className="slant"></div>
          </div>
          <div className="cardimage" style={{ backgroundImage: `url(${background1})` }}></div>
          <div className="cardtext">
            <div className="ncard">Swiss International Beland Hotel</div>
            <div className="carddesc">New Owerri, Imo</div>
          </div>
        </div>
        <div className="card">
          <div className="sticker">
            <p className="stick">Up to <b>15%</b> off </p>
            <div className="slant"></div>
          </div>
          <div className="cardimage" style={{ backgroundImage: `url(${background3})` }}></div>
          <div className="cardtext">
            <div className="ncard">Georgetown Hotel</div>
            <div className="carddesc">Ikeja, Lagos</div>
          </div>
        </div>
        <div className="card">
          <div className="sticker">
            <p className="stick">Up to <b>10%</b> off </p>
            <div className="slant"></div>
          </div>
          <div className="cardimage" style={{ backgroundImage: `url(${background2})` }}></div>
          <div className="cardtext">
            <div className="ncard">Shortlet Haven Enugu</div>
            <div className="carddesc">Enugu, Enugu</div>
          </div>

        </div>
        <div className="card">
          <div className="sticker">
            <p className="stick">Up to <b>12%</b> off </p>
            <div className="slant"></div>
          </div>
          <div className="cardimage" style={{ backgroundImage: `url(${background1})` }}></div>
          <div className="cardtext">
            <div className="ncard">Mercure The Moorhouse Ikoyi</div>
            <div className="carddesc">Ikoyi, Lagos</div>
          </div>
        </div>
        <div className="card">
          <div className="sticker">
            <p className="stick">Up to <b>25%</b> off </p>
            <div className="slant"></div>
          </div>
          <div className="cardimage" style={{ backgroundImage: `url(${background3})` }}></div>
          <div className="cardtext" id="tr">
            <div className="ncard">BW Starfire Hotel</div>
            <div className="carddesc" id="lw">Ikeja, Lagos</div>
          </div>
        </div>
        <div className="card">
          <div className="sticker">
            <p className="stick">Up to <b>10%</b> off </p>
            <div className="slant"></div>
          </div>
          <div className="cardimage" style={{ backgroundImage: `url(${background5})` }}></div>
          <div className="cardtext">
            <div className="ncard">Royal Cedars Hotels and Apartments</div>
            <div className="carddesc">Ibadan, Oyo</div>
          </div>
        </div>
      </div>

    </div >
  )
}