import Featured from "../../components/featured/Featured";
import FeaturedVehicles from "../../components/featuredVehicles/FeaturedVehicles";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import VehiclesList from "../../components/vehiclesList/VehiclesList";

import "./home.css"
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by vehicle type</h1>
        <VehiclesList/>
        <h1 className="homeTitle">Hell of a Ride!</h1>
        <FeaturedVehicles/>
        <MailList/>
        <Footer/>
        
      </div>
    </div>
  );
};

export default Home