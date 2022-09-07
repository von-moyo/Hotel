import React from "react"

export default function Destination() {
  return (
    <div className="box2row">
      <div className="rowbox1">
        <a className="hotelname" href="https://hotels.ng/hotels-in-lagos">
          <div className="bbox">
            <p className="rowbox1name">Hotels in Lagos</p>
            <p className="rowbox1desc">3,328 hotels</p>
          </div>
        </a>
      </div>

      <div className="rowbox1">
        <a className="hotelname" href="https://hotels.ng/hotels-in-lagos">
          <div className="bbox">
            <p className="rowbox1name">Hotels in Abuja</p>
            <p className="rowbox1desc">1,130 hotels</p>
          </div>
        </a>
      </div>

      <div className="rowbox1">
        <a className="hotelname" href="https://hotels.ng/hotels-in-lagos">
          <div className="bbox">
            <p className="rowbox1name">Hotels in <br/>{window.innerWidth > 830 ? "PH" : "Port Harcourt"}</p>
            <p className="rowbox1desc">379 hotels</p>
          </div>
        </a>
      </div>

      <div className="rowbox1">
        <a className="hotelname" href="https://hotels.ng/hotels-in-lagos">
          <div className="bbox">
            <p className="rowbox1name">Hotels in Kaduna</p>
            <p className="rowbox1desc">331 hotels</p>
          </div>
        </a>
      </div>

      <div className="rowbox1">
        <a className="hotelname" href="https://hotels.ng/hotels-in-lagos">
          <div className="bbox">
            <p className="rowbox1name">Hotels in <br /> Uyo</p>
            <p className="rowbox1desc">196 hotels</p>
          </div>
        </a>
      </div>

      <div className="rowbox1">
        <a className="hotelname" href="https://hotels.ng/hotels-in-lagos">
          <div className="bbox">
            <p className="rowbox1name">Hotels in Ibadan</p>
            <p className="rowbox1desc">436 hotels</p>
          </div>
        </a>
      </div>
    </div>
  )
}