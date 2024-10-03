import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src="https://images.carandbike.com/wms/Bak_cc2d6d4a61.jpg"
       alt="" 
       className="siImg"
      />
      
      <div className="siDesc">
         <h1 className="siTitle">Java Bobber</h1>
         <span className="siDistance">Available in Los Angeles, CA</span>
         <span className="siTaxiOp">Free doorstep delivery</span>
         <span className="siSubtitle">
           Cruiser • 6-speed manual transmission
         </span>
         <span className="siFeatures">
           2 seats • 334cc engine • 30 hp • 5,000 miles
         </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
           You can cancel anytime, so lock in this ride now!
        </span>
      

      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="isDetailTexts">
          <span className="siRent">₹200</span>
          <span className="siTaxOp">Includes Texts and fees</span>
          <button className="siCheckButton">See Availability</button>
        </div>
      </div>
    </div>
  )
 }

export default SearchItem