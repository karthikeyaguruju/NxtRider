import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import img from "../images/logo.png";
import CommonSection from '../components/UI/CommonSection'
import car from '../images/cars.jpg'
import cars from '../images/cars1.jpg'


import "../styles/about.css";

const Home = () => {
  return (
    <DefaultLayout>
        <CommonSection/>
        
        
    <div className='About'>
      <h1 className="section__title"><li style={{color:'Green'}}>Welcome to NxtRider</li></h1>
      <h5>
      welcome to nxtrider 
"EnJOY THE CAR  RENT SERVICES AT EVERY WHERE" <br></br>
Here we offer best cars for various purposes like picnics , daily purpose,trips etc
 Here you can get  cars for affordable prices <br></br>
 here we can provide cars for where every you want to go in the city
Cars with new  futures and latest  updates will<br></br> be available here
our goal is to provde the car rent service with affordable prices and  latest cars
        </h5>
      <div className='images'>
        <img src={car} alt='' />
        <img src={cars} alt='' />
        
      </div>
      ********************************************************************************************************************************************************************************************************
      <h4>
      We are not an option, we are a choice
We're #1 choice of so many peoples,<br></br> because we're the solution of India's intra-city commuting problems.<br></br> With assured safety, we also provide economically priced rides.
What makes us different?<br></br>
Our cars can dodge the traffic during peak hours and get <br></br>you to the destination in a jiffy! So when you think travel, think NxtRider.
       
      </h4>
    </div>
    <button className="btn become__driver-btn mt-4">
            <a
            
          
          href="/"
        ><img
        src={img}
        className="img-fluid"
        style={{ height: "80px", width: "80px" }}
        alt="logo"
      />
        <h3> <li style={{color:'Red'}}>Click Here Get The Ride</li></h3>
        </a>
            
          </button>        
    
    </DefaultLayout>
    
  )
}
export default Home