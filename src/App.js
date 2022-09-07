import './App.css';
import Header from './Header'
import Banner from './Banner'
import Destination from './Destination'
import HotelDeals from './HotelDeals'
import Cities from './Cities'
import Booking from './Booking'
import Subscribe from './Subscribe'
import Features from './Features'
import MoreBooking from './MoreBooking'
import GetApp from './GetApp'
import SubscribeAgain from './SubscribeAgain' 
import IndexSection from './IndexSection'
import Footer from './Footer'
import AltFooter from './AltFooter'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <h1 className="box2head1">Suggested Destinations in Nigeria</h1>
      <p className="box2headp">Below are the most popular travel destinations in Nigeria</p>
      <div className="line"></div>
      <Destination />
      <h1 className="box2head1">Today's Top Hotel Deals</h1>
      <p className="box2headp">A selection of the best hotel deals, only available today</p>
      <div className="line"></div>
      <HotelDeals />
      <h1 className="box2head1">Popular cities with Hotels.ng travellers</h1>
      <p className="box2headp">See the top destinations people are traveling to</p>
      <div className="line" id="line2"></div>
      <Cities />
      <h1 className="box2head1" id="states-grid-name">Which City Do You Want To Book A Hotel ?</h1>
      <p className="box2headp" id="states-grid-name">7201 hotels in 1,837 cities / towns in Nigeria</p>
      <div className="line" id="states-grid-name"></div>
      <Booking />
      <Subscribe />
      <Features />
      <MoreBooking />
      <GetApp />
      <SubscribeAgain />
      <IndexSection />
      <Footer />
      <AltFooter />
    </div>
  );
}

export default App;
