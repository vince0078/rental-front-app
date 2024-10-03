import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faCar, faCarAlt, faChargingStation, faClock, faMotorcycle, faPerson, faVanShuttle } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { enGB } from 'date-fns/locale';
import {format} from "date-fns"
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const [destination,setDestination] = useState();
  const [openDate,setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date (),
      key: 'selection',
    },
  ]);
  const [openOptions,setOpenOptions] = useState(false)
  const [options,setOptions] = useState({
    adult:1,
    children:0,
    cargo:1
  });

const navigate = useNavigate()

const  handleOption =(name, operation) =>{
  setOptions((prev) => {
    return{
       ...prev, 
       [name]: operation === "i" ? options[name] +1 : options[name] -1,
    };
  });
};
const handleSearch = ()=>{
  navigate("/vehicles", {state:{ destination, date, options }})

}

  return (
    <div className="header">
      <div className={ type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faCar} />
            <span>FindADrive</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faMotorcycle} />
            <span>FindAnAdventure</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faChargingStation} />
            <span>GoEco</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCarAlt} />
            <span>Find Lux</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faVanShuttle} />
            <span>Long Drives</span>
            </div>        
          </div>
         { type !== "list" &&
          <> 
         <h1 className="headerTitle">Dont own a vehicle? No worries,we got you covered.</h1>
          <p className="headerDesc">Your first Ride is on us - Sign up to get the free ride of your first 10KM, treat to join our family
          </p>
          <button className="headerBtn">Sign In/Register</button>
          <div className="headerSearch">
            <div className="headerSearchItem">
             <FontAwesomeIcon icon={faCar} className="headerIcon"/>
             <input type="text" 
             placeholder="Where are you headed ?" 
             className="headerSearchInput"
             onChange={e=>setDestination(e.target.value)}
             />
            </div>
            <div className="headerSearchItem">
             <FontAwesomeIcon icon={faClock} className="headerIcon"/>
             <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,"MM/dd/yyyy")} 
             to ${format(date[0].startDate,"MM/dd/yyyy")}`} </span>
             {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                locale={enGB}
                className="date"
             />}
             
            </div>
            <div className="headerSearchItem">
             <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
             <span onClick={() =>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult - ${options.children} children - ${options.cargo} cargo`} </span>
             {openOptions && <div className="options">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCounter"> 
                <button 
                disabled={options.adult <=1}
                className="optionCounterButton" 
                onClick={()=>handleOption("adult","d")}>-</button>
                <span className="optionCounterNumber">{options.adult}</span>
                <button 
                className="optionCounterButton" 
                onClick={()=>handleOption("adult","i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter"> 
                <button 
                disabled={options.children <=1}
                className="optionCounterButton" 
                onClick={()=>handleOption("children","d")}>-</button>
                <span className="optionCounterNumber">{options.children}</span>
                <button 
                className="optionCounterButton" 
                onClick={()=>handleOption("children","i")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">cargo(Ltrs)</span>
                <div className="optionCounter"> 
                <button 
                disabled={options.cargo <=1}
                className="optionCounterButton" 
                onClick={()=>handleOption("cargo","d")}>-</button>
                <span className="optionCounterNumber">{options.cargo}</span>
                <button 
                className="optionCounterButton" 
                onClick={()=>handleOption("cargo","i")}>+</button>
                </div>
              </div>
             </div>}
            </div>
            <div className="headerSearchItem">
              <button className="headerBtn" onClick={handleSearch}>Search</button>
            </div>
          </div></>}  
      </div>
    </div>
  )
}

export default Header