import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://cdn.bigboytoyz.com/new-version/products/product/whatsapp-image-2024-05-21-at-19.08.10-1.jpeg" 
             alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>SUV-s</h1>
          <h2>124 Available Options</h2>  
        </div>  
      </div>   
      <div className="featuredItem">
        <img src="https://cdn.bigboytoyz.com/new-version/products/product/audi-a8l-6-of-43.jpg" 
             alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Sedans</h1>
          <h2>224 Available Options</h2>  
        </div>  
      </div>  
      <div className="featuredItem">
        <img src="https://cdn.bigboytoyz.com/new-version/products/FTR-2019-1.jpg" 
             alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Motorcycles</h1>
          <h2>127 Available Options</h2>  
        </div>  
      </div>  
    </div>
  );
};

export default Featured