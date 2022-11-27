import './FlipButton.css';

const FlipButton = (data) => {

  return <> 
  <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <div className="circle-flip">
         <img src={data.icon} alt="" className='flipImage'/>
      </div>
    </div>
    <div className="flip-card-back">
      <h1>{data.name}</h1>
    </div>
  </div>
</div>
</>  
  
}

export default FlipButton
