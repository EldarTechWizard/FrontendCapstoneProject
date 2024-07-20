import Header from "./components/layout/Header";
import Main from "./components/pages/Home/index";
import Footer from "./components/layout/Footer";
import UnderConstruction from "./components/pages/UnderConstrucion/index";
import ConfirmedBooking from "./components/pages/Bookings/ConfirmedBooking";
import Booking from "./components/pages/Bookings/index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<UnderConstruction />} />
        <Route path="/Menu" element={<UnderConstruction />} />
        <Route path="/Reservations" element={<Booking />} />
        <Route path="/Order-online" element={<UnderConstruction />} />
        <Route path="/Login" element={<UnderConstruction />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </div>
  );
}

/*


*/

export default App;
