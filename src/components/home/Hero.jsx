import React from 'react'
import Button from '../common/Button'
import Para from '../common/Para'
import Heading from '../common/Heading'

const Hero = () => {
    return (
        <section className="bg-cloud-white relative overflow-hidden px-4  ">
            <div className="absolute pointer-events-none -top-80 -left-11 w-126 h-126 rounded-full bg-sky-cyan opacity-30 blur-[451.7px]"></div>
            <div className=" absolute pointer-events-none top-19.5 left-89.75  rounded-full w-125.75 h-125.75 bg-dusty-purple opacity-20 blur-[451.7px] "></div>
            <div className=" absolute pointer-events-none top-196 left-245.25 w-156.75 h-156.75 rounded-full bg-light-red opacity-20 blur-[403.8px]"></div>
            <div className=" absolute pointer-events-none top-99.5 left-340 w-103.5 h-103.5 rounded-full bg-light-yellow opacity-20 blur-[364.9px]"></div>

            <div className="max-w-300 mx-auto lg:pt-11.75 md:pt-8 sm:mt-6 mt-5 xl:min-h-225 lg:min-h-200 md:min-h-160 min-h-120  bg-[url('/assets/hero-bg.png')] lg:bg-size-[400px_750px] md:bg-size-[auto_500px] sm:bg-size-[auto_400px] bg-size-[300px_300px] bg-no-repeat bg-bottom">
                <div className="flex flex-row justify-between items-center">
                    <img
                        className="md:w-62 md:h-10 sm:w-55 sm:h-9 w-40 h-7 "
                        src="/assets/keysemantics-logo.webp"
                        alt="keysemantics-logo"
                    />
                    <Button btn={"Request a demo"} vari={"pri"} />
                </div>
                <div className="max-w-300 flex flex-col items-center lg:mt-50 md:mt-25 sm:mt-20 mt-15">
                    <Heading heading={`AI-Powered Search as a Service`} vari={`pri`} />
                    <Para
                        paragraph={`Unlock your content with KeySemantics.`}
                        vari={"pri"}
                    />
                    <Button btn={"Get started"} vari={`sec`} />
                </div>
            </div>
        </section>
    )
}

export default Hero