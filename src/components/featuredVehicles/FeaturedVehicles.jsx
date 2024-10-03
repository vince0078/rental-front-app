import "./featuredVehicles.css"

const FeaturedVehicles = () => {
  return (
    <div className="fv">
    <div className="fvItem">
      <img src="https://economictimes.indiatimes.com/thumb/height-450,width-600,imgsize-372935,msid-60211304/triumph-motorcycles-launches-new-street-scrambler-for-rs-8-10-lakh.jpg?from=mdr"
       alt="" 
       className="fvImg" />
      <span className="fvName">Triumph Scrambler 600</span>
      <span className="fvType">Sport Motorcycle</span>
      <span className="fvRent">Starting from 25$</span>
      <div className="fvRating">
        <button>9.2</button>
        <span>Excellent</span>
      </div>
      </div>  
       
    <div className="fvItem">

      <img src="https://bikes.motobank.co.uk/fp/51310/royal-enfield-himalayan-e5-ex-demo-2023-granite_786270.jpg"
       alt="" 
       className="fvImg" />
      <span className="fvName">RE Himalayan450</span>
      <span className="fvType">Sport Motorcycle</span>
      <span className="fvRent">Starting from 18$</span>
      <div className="fvRating">
        <button>8.3</button>
        <span>Great</span>
      </div>
       

    </div>  
    <div className="fvItem">

      <img src="https://ssmotocorp.com/cdn/shop/files/IMG_2459.jpg?v=1705475675&width=1920"
       alt="" 
       className="fvImg" />
      <span className="fvName">RE ContinetalGT 650</span>
      <span className="fvType">Sport Motorcycle</span>
      <span className="fvRent">Starting from 90$</span>
      <div className="fvRating">
        <button>7.9</button>
        <span>Good</span>
      </div>
       

    </div>
    <div className="fvItem">

      <img src="https://cdn.zeebiz.com/hindi/sites/default/files/2024/04/09/174903-jawa.png?im=FitAndFill=(1200,900)"
       alt="" 
       className="fvImg" />
      <span className="fvName">JAVA Bobber</span>
      <span className="fvType">Sport Motorcycle</span>
      <span className="fvRent">Starting from 20$</span>
      <div className="fvRating">
        <button>8.9</button>
        <span>Excellent</span>
      </div>
       

    </div> 

    </div>
    
    
    
    
  );
};

export default FeaturedVehicles