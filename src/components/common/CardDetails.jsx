import React from 'react'
import Heading from './Heading'
import Para from './Para'
import Button from './Button'

const CardDetails = ({ heading, points, image, reverse = false }) => {
    return (
        <div
            className={`flex ${reverse ? "xl:flex-row-reverse" : "xl:flex-row"
                } flex-col gap-12  items-center`}
        >
            <div className="max-w-138 w-full max-xl:text-left">
                <Heading heading={heading} vari="sec" />

                <ul className="list-disc pl-5 space-y-2 mt-2 text-left">
                    {points.map((item, index) => (
                        <li key={index}>
                            <Para paragraph={item} vari="sec" />
                        </li>
                    ))}
                </ul>

                <Button btn="Get a demo" vari="pri" />
            </div>

            <div className="w-full max-w-150">
                <img
                    className="w-full h-auto object-contain"
                    src={image}
                    alt={heading}
                />
            </div>
        </div>
    )
}

export default CardDetails