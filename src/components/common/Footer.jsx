import React from 'react'
import Heading from './Heading'
import Para from './Para'
import Button from './Button'

const Footer = () => {

    const currentYear = new Date().getFullYear();
    return (
        <footer className="px-4 bg-Deep-nav -z-20  ">
            <div className="max-w-300 mx-auto flex items-center justify-center flex-col relative  ">
                <img
                    className="absolute lg:w-34.25 lg:h-95.5 md:w-30 md:h-90 sm:w-22 w-20 top-0 left-0 "
                    src="/assets/bg-footer-top.png"
                    alt="bg-footer-top"
                />
                <div className="text-center lg:mt-24 md:mt-20 sm:mt-14 mt-8  z-20">
                    <Heading heading={"How does KeySemantics work?"} vari={"ter"} />
                    <Para
                        paragraph={
                            "Request a demo for your team and let us show you how KeySemantics can help your company"
                        }
                        vari={"qua"}
                    />
                </div>
                <form className="max-w-[320px] w-full gap-2 flex flex-col lg:mt-16 md:mt-12 sm:mt-8 mt-6  z-20">
                    <input
                        className="px-5 py-4 rounded-[48px] w-full font-normal text-[14px] leading-[143%] outline-none bg-light-blue text-light-purpl "
                        type="text"
                        required
                        placeholder="Name"
                    />
                    <input
                        className="px-5 py-4 rounded-[48px] w-full font-normal text-[14px] leading-[143%] outline-none bg-light-blue text-light-purpl "
                        type="Email"
                        required
                        placeholder="Email"
                    />
                    <input
                        className="px-5 py-4 rounded-[48px] w-full font-normal text-[14px] leading-[143%] outline-none bg-light-blue text-light-purpl "
                        type="text"
                        required
                        placeholder="Company"
                    />
                    <input
                        className="px-5 py-4 rounded-[48px] w-full font-normal text-[14px] leading-[143%] outline-none bg-light-blue text-light-purpl "
                        type="text"
                        placeholder="Phone (optional)"
                    />
                </form>
                <div className="flex flex-col justify-center items-center z-20 text-center">
                    <Para
                        paragraph={
                            "By submitting my contact information I agree to the KeySemantics Privacy Policy"
                        }
                        vari={"qui"}
                    />
                    <Button btn={"Request a demo"} vari={"ter"} />
                </div>
                <img
                    className="absolute lg:w-34.25 lg:h-95.5 md:w-30 md:h-90 sm:w-22 w-20  bottom-0 right-0"
                    src="/assets/bg-footer-bottom.png"
                    alt="bg-footer-bottom"
                />
            </div>
            <div className="bg-royal-midnight -mx-4 py-6 px-4">
                <div className="max-w-300 mx-auto flex flex-row max-md:flex-col max-md:gap-2 max-md:text-center justify-between">
                    <Para
                        paragraph={`© ${currentYear} KeySemantics GmbH | Ramsenburgweg 24, 9100 Herisau, Switzerland`}
                        vari={"sen"}
                    />
                    <Para paragraph={"info@keysemantics.ch"} vari={"sen"} />
                </div>
            </div>
        </footer>
    )
}

export default Footer