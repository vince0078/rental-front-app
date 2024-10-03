import "./vehiclesList.css"

const VehiclesList = () => {
  return (
    
      <div className="vList">
      <div className="vListItem">
        <img src="https://images.carandbike.com/bike-images/large/vespa/sxl/vespa-sxl.jpg?v=9" 
        alt="" className="vListImg" />
        <div className="vListTitles"> 
          <h1>Motor Scooter</h1>
          <h2>245 Motor Schooter</h2>
        </div>
      </div>
      <div className="vListItem">
        <img src="https://bd.gaadicdn.com/processedimages/royal-enfield/meteor/source/meteor6030d40bd776d.jpg" 
        alt="" className="vListImg" />
        <div className="vListTitles"> 
          <h1>Motor Cycles</h1>
          <h2>245 Motor Cyclesr</h2>
        </div>
      </div>
      <div className="vListItem">
        <img src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Camry/10926/1708690549497/rear-left-view-121.jpg" 
        alt="" className="vListImg" />
        <div className="vListTitles"> 
          <h1>Cars</h1>
          <h2>245 Cars</h2>
        </div>
      </div>
      <div className="vListItem">
        <img src="https://minivanhiredelhi.com/uploads/24964_slider2.jpg" 
        alt="" className="vListImg" />
        <div className="vListTitles"> 
          <h1>Mini Van</h1>
          <h2>245 Mini Van</h2>
        </div>
      </div>
      <div className="vListItem">
        <img src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Hilux/10924/1691990326111/front-left-side-47.jpg" 
        alt="" className="vListImg" />
        <div className="vListTitles"> 
          <h1>Truck</h1>
          <h2>245 Truck</h2>
        </div>
      </div>
    </div>
    
  );
};

export default VehiclesList