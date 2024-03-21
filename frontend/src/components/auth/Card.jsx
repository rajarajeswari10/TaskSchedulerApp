import React from 'react';

const Card = (props) => {
 const { icon,title, content } = props;

 return (
    <div className='homecard'>
      <div className="card-content">
        <div className="card-icon">
            <img src={icon} alt="card image" style={{ width: '24px', height: '24px', objectFit: 'cover' }}/>
        </div>
        <p id='title-style'>{title}</p>
        <p id='content-style'>{content}</p>
        
      </div>
    </div>
 );
}

export default Card;