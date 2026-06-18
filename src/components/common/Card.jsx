import React from 'react'
import Para from './Para'

const Card = ({ image, content }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <img
                className="max-w-full h-auto"
                src={image}
                alt={content}
            />
            <Para paragraph={content} vari={"sec"} />
        
        </div>

    )
}

export default Card