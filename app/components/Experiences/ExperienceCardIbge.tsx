/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion';


function ExperienceIbge() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-3 md:space-y-7 p-4 flex-shrink-0 w-[310px] md:w-[320px] xl:w-[500px] snap-center bg-[#292929] hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-500 overflow-hidden">
        <motion.img 
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            opacity: 1,
            y: 0
        }}
        viewport={{
            once: true,
        }}
        src={`/logos/ibge.jpeg`} 
        alt={`Company that I have worked: Wooza Ventures`} 
        className="w-24 h-24 rounded-full md:w-20 md:h-20 xl:w-[160px] xl:h-[160px] object-cover object-center"
        />
        <div className="md:px-10">
            <h4 className="text-3xl md:text-3xl font-light text-center">IBGE</h4>
            <p className="font-bold text-xl mt-1 text-center">FullStack Developer</p>

            <div className="flex space-x-2 my-2 md:items-center md:justify-center">        
                <img className="h-5 w-5 md:h-10 md:w-10 rounded-full" src="https://cdn.sanity.io/images/jj3dt7aq/production/822989ca6a02962f8e03f7650a786ca6cd106086-112x112.jpg" alt="HTML5" />
                <img className="h-5 w-5 md:h-10 md:w-10 rounded-full" src="https://cdn.sanity.io/images/jj3dt7aq/production/fecccca148ca8d9f3a1a8c6147400f9d53f43dc3-112x112.jpg" alt="CSS" />
                <img className="h-5 w-5 md:h-10 md:w-10 rounded-full" src="https://cdn.sanity.io/images/jj3dt7aq/production/b03cc5c154795a5e92463db78913d6465dfd87f7-720x720.png" alt="Javascript" />
                <img className="h-5 w-5 md:h-10 md:w-10 rounded-full" src="https://cdn.sanity.io/images/jj3dt7aq/production/be3c5dea74737e0e59f53a48c6fa863a4bdce030-112x112.jpg" alt="MySQL" />
            </div>


            <p className="uppercase text-sm font-semibold text-center py-2 text-gray-300">
                March 2009 - 
                March 2011
            </p>

            <ul className="list-disc space-y-2 ml-5 text-sm max-h-96 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
                <li>Implemented an online quiz (website) for the 2010 Brazilian census, which collected information from 30% of the population.</li>
                <li>Implemented Cross Browser XHTML/CSS and accessibility under W3C specs.</li>
                <li>Coded AJAX and PHP integration between forms, creating dynamic routes inside the form.</li>
                <li>Designed and tested UX/UI for all census 2010 products (Quiz, intranet portal, and emails).</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceIbge