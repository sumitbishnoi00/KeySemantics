import React from 'react'
import { CARD_DETAILS } from '../utils/helper'
import CardDetails from '../common/CardDetails'

const Details = () => {
  return (
    <section className="px-4 lg:pb-41  md:pb-20 pb-10 bg-cloud-white pt-15 md:pt-25 lg:pt-37">
      <div className="max-w-300 mx-auto w-full flex flex-col gap-37 max-md:gap-12">
        {CARD_DETAILS.map((item, index) => (
          <CardDetails
            key={index}
            heading={item.heading}
            points={item.points}
            image={item.image}
            reverse={item.reverse}
          />
        ))}
      </div>
    </section>
  )
}

export default Details