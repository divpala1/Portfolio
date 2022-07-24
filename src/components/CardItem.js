import React from 'react'

function CardItem(props) {
    return (
        <>
            <li className='card-item'>
                <div className='card-item-link'>
                        <figure className='card-item-pic'>
                            <img src={props.src} alt="Card" className='card-item-image' />
                        </figure>
                    <div className="middle">
                        {props.intro}
                    </div>
                    <div className='card-item-desc'>
                        <h5 className='card-item-text'>{props.title}</h5>
                    </div>
                </div>
            </li>
        </>
    )
}

export default CardItem;