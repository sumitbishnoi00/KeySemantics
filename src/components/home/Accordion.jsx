import React, { useState } from 'react'
import Para from '../common/Para'
import Heading from '../common/Heading'
import { ACCODION_DATA } from '../utils/helper';
import Icons from "../common/Icons";
import Button from '../common/Button'


const Accordion = () => {

    const [openIndex, setOpenIndex] = useState(2);

  const toggelAccodion = (index) => {
    setOpenIndex(index);
  };
    return (
        <section className="bg-cloud-white px-4 md:pt-115.5 pt-100 -mt-82.75">
            <div className="max-w-308 mx-auto flex xl:flex-row flex-col max-xl:items-center gap-12">
                <div>
                    <img
                        className="max-w-150 w-full object-cover object-center h-auto "
                        src="/assets/desiner.webp"
                        alt="desiner"
                    />
                </div>
                <div className="max-w-138">
                    <Heading heading={"Key Q&A"} vari={"sec"} />
                    <ul className="list-disc pl-5 space-y-2 pt-2">
                        <li>
                            <Para
                                paragraph={
                                    "Let customers discover your content using AI-generated questions and answers"
                                }
                                vari={"ter"}
                            />
                        </li>
                        <li>
                            <Para
                                paragraph={
                                    "Seamlessly integrated into the Semantic Search experience"
                                }
                                vari={"ter"}
                            />
                        </li>
                        <li>
                            <Para paragraph={"LLM-powered Question Answering"} vari={"ter"} />
                        </li>
                    </ul>
                    <div className="mt-4">
                        {ACCODION_DATA.map((section, index) => (
                            <div
                                key={index}
                                className={`border-b border-light-gray ${index === 0 ? "border-t" : ""
                                    }`}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <div
                                    className="flex justify-between w-full py-4 cursor-pointer"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <h3 className="font-medium text-[18px] w-full leading-[175%] tracking-[-1%] text-Deep-nav ">
                                        {section.heading}
                                    </h3>
                                    <span
                                        className={` transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                                    >
                                        <Icons icon="aero" />
                                    </span>
                                </div>
                                <div
                                    className={`grid transition-all duration-500 ease-in-out ${openIndex === index
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className='overflow-hidden'>
                                        <div className="pb-4">
                                            <Para paragraph={section.para} vari={"sec"} />

                                            <div className="flex sm:flex-row flex-col items-center gap-4">
                                                <img
                                                    className="max-w-67 h-37.5"
                                                    src={section.image1}
                                                    alt="water image"
                                                />
                                                <img
                                                    className="max-w-67 h-37.5"
                                                    src={section.image2}
                                                    alt="water image"
                                                />
                                            </div>

                                            <Para paragraph={section.desc} vari={"sec"} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6">
                        <Button btn={"Get a demo"} vari={"pri"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accordion