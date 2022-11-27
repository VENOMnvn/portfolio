import './Card.css';


const Card = (data) => {
  return (<div className='cardCont'>
      <article className='card'>
        <div className="card_publication">
            <img src={data.img} alt="" srcset="" />
            <div>
                <span className="card_author">
                    <i className="ri-user-line"></i>
                </span>
                <span className="card_date">
                    <i className="ri-calendar-line"></i>
                </span>
            </div>
        </div>
        <div className="card_info">
            <h2 className="card_title">
             {data.data.title}
            </h2>
            <span className="card_subtitle">
            {data.data.sub}
            </span>
            <p className="card_description">
            {data.data.des}
            </p>
            <a href={data.data.link} className='card_cta'>
                <button className='showProject'>Show Project</button>
            </a>
        </div>
      </article>


    </div>
  )
}

export default Card
