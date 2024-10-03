import "./vehicle.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Vehicle = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/131937/42-bobber-right-front-three-quarter-13.jpeg?isig=0",
    },
    {
      src: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/131937/42-bobber-right-side-view-4.jpeg?isig=0",
    },
    {
      src: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/132917/jawa-42-bobber-left-front-three-quarter38.jpeg?isig=0&wm=2&q=80",
    },
    {
      src: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/131937/42-bobber-right-side-view-4.jpeg?isig=0",
    },
    {
      src: "https://i.ytimg.com/vi/n8s9UqaBr5U/maxresdefault.jpg",
    },
    {
      src: "https://imgd.aeplcdn.com/476x268/n/cw/ec/131937/42-bobber-gear-shift-indicator.jpeg?isig=0&q=80",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="vehicleContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="vehicleWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="vehicleTitle">Motorcycle-Java 42 Bobber</h1>
          <div className="vehicleAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>New Sama Road,Vadodara,290024</span>
          </div>
          <span className="vehicleDistance">
            Excellent location – 500m from you
          </span>
          <span className="vehicleRentHighlight">
          Book a ride over 5 hours on this vehicle to get an free hour!
          </span>
          <div className="vehicleImages">
            {photos.map((photo, i) => (
              <div className="vehicleImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="vehicleImg"
                />
              </div>
            ))}
          </div>
          <div className="vehicleDetails">
            <div className="vehicleDetailsTexts">
              <h1 className="vehicleTitle">Java Bobber- Ride The Winds</h1>
              <p className="vehicleDesc">
              The Java Bobber is a sleek, retro-inspired cruiser perfect for riders seeking a blend of style and performance. 
              With a 334cc engine, 30 horsepower, and a 6-speed manual transmission, this bike delivers a smooth yet powerful ride.
              Whether you're cruising city streets or taking long weekend rides, the Java Bobber promises comfort, control, and head-turning aesthetics. 
              Ideal for solo rides or quick getaways, it offers a classic riding experience with modern reliability.
              </p>
            </div>
            <div className="vehicleDetailsRent">
              <h1>Perfect for a city day's Ride</h1>
              <span>
              In an excellent condition with rentReview of whopping 8.9 from the riders so far!
              </span>
              <h2>
                <b>₹200</b> (per Hour)
              </h2>
              <button>Reserve or Rent Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Vehicle;