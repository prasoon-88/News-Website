import React from 'react'

const Card = ({news}) => {
  return (
    <div className="card">
    <a href={news.url}>
        <div className="car-header">
            <img src={news.image} alt="news-img" id="news-img" />
        </div>
        <div className="card-content">
            <h3 className='news-tittle' id='news-tittle'>{news.title}</h3>
            <h6 className='news-source' id='news-souce'>{news.publishedAt}</h6>
            <p className='news-description'>{news.content}</p>
        </div>
    </a>
</div>
  )
}

export default Card