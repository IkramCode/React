import React from 'react'
import {FaStar} from 'react-icons/fa'
import { useState } from 'react'
import './style.css'

export function StarRating({noOfStars = 5} ) {
    
    const [hover , sethover] = useState(0)
    const [rating , setRating] = useState(0)



    function onClickHnadler (getCurrentIndex) {
        setRating(getCurrentIndex);
    }

    function mouseMoveHnadler (getCurrentIndex) {
        sethover(getCurrentIndex);

    }

    function mouseLeaveHandler () {
        sethover(rating);

    }

    return  <div className='star-rating'>
    {
            [...Array(noOfStars)].map(( _ ,  index) => {
            index +=1
        
    
    return <FaStar
        key={index}
        className={index <= (hover || rating) ? 'active' : 'inactive'}
        onClick={() => onClickHnadler(index)}
        onMouseMove={() => mouseMoveHnadler(index)}
        onMouseLeave={() => mouseLeaveHandler()}
        size={40}
        />
    })
}
    </div>
}
