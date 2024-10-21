import React from 'react';
import './css/Card.css'
const Card = ({item}) => {
    let {urlToImage,title,description,author,url} = item
    if(title.length>50){
        title = title.substr(0,47)+"...";
    }
    if(description.length>90){
        description = description.substr(0,87)+"...";
    }
  return (
    <div>
        <div className="card-body">
            <div className="img-cont">
                <img src={urlToImage} alt={title} />
            </div>
            <div className="desc">
                <h5 className="title">{title}</h5>
                <span className="author">{author}</span>
                <p className="text">{description}</p>
                <a href={url} className="button-btn" target='_blank' >Know More</a>
            </div>
        </div>
    </div>
  )
}

export default Card
