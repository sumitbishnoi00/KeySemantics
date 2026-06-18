import React from 'react'
import Heading from '../common/Heading'
import Card from '../common/Card'
import { CARD_DATA } from '../utils/helper'

const Cards = () => {
    return (
        <section className="px-4  bg-white pt-24 max-lg:py-16 max-md:py-12">
            <div className="max-w-256.5 w-full mx-auto text-center ">
                <Heading heading={"How does KeySemantics work?"} vari={"sec"} />
                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-24 max-lg:gap-12 max-sm:gap-8 mt-14 max-md:mt-10">
                    {CARD_DATA.map((item, index) => (
                       <Card key={index} image={item.image} content={item.content} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cards