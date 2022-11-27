import Card from './Card';
import './Projects.css'; 
import img1 from './Assests/Project-1.jpg';
import img2 from './Assests/Project-2.jpg';
import img3 from './Assests/Project-3.jpg';
import { useEffect, useRef } from 'react';
const Projects = () => {
 

 let PrjoectData = [
  {
   title : "Crypto Crusher",
   sub : "React JS App For Showing CryptoCurrency Live Data",
   des : "Use Of AXIOS API , Router , Loader ,",
   link : "https://crypto-crusher-venom.netlify.app/"
  },
  {
    title : "Venom Estore",
    sub  : "E-Store Website entirely made up of HTML CSS JS",
    des : "Functioing cart with use of local Storage , scroll Effect , without Any Insipiration",
    link:"https://venomnvn.github.io/venomestore.github.io/"

  },
  {
    title : "Fore-Weather",
    sub : "Weather App Made by ReactJS with Pullution Data",
    des : "Search feature , Search by either Pincode or Location Name , router , UseContext API",
    link:"https://fore-weather-venom.netlify.app/"
  }
]



  return (<div className='Projects' id='Projects' >
      <div className="title"> Projects </div>
      <div className="sub-title">Work I have Done</div>
      <Card img={img1} data={PrjoectData[0]}></Card>
      <Card img={img2} data={PrjoectData[2]}></Card>
      <Card img={img3} data={PrjoectData[1]}></Card>
    </div>
  )
}

export default Projects


