/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion';

export interface Project {
    title: string;
    _type: "skill";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}

export interface Technology {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

interface Image {
    _type: "Image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

function Projects() {

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
    
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            
                <div className="w-screen flex-shrink-0 flex flex-col space-y-4 items-center justify-center p-10 md:p-44 h-screen">
                    <motion.img
                        initial={{ y: -300, opacity:0 }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity:1, y:0 }}
                        viewport={{ once: true }}
                        src={`https://cdn.sanity.io/images/jj3dt7aq/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png`} 
                        alt={`Project: nome`}
                    />

                    <div className="space-y-4 px-0 md:px-8 max-w-6xl">
                        <h4 className="text-3xl font-semibold text-center">
                            <span className="underline decoration-[#F7AB0A]/50"></span> 1/4: Netflix
                        </h4>

                        <div className="flex items-center space-x-2 justify-center">
                            <img src="https://cdn.sanity.io/images/jj3dt7aq/production/1e9b03a2f6f5dd82b77e24718bd0e91a85ee2d33-112x112.jpg" alt="ReactJs" className="w-6 h-6 md:w-12 md:h-12 rounded-full" />
                            <img src="https://cdn.sanity.io/images/jj3dt7aq/production/fecccca148ca8d9f3a1a8c6147400f9d53f43dc3-112x112.jpg" alt="CSS" className="w-6 h-6 md:w-12 md:h-12 rounded-full" />
                            <img src="https://cdn.sanity.io/images/jj3dt7aq/production/2cd5b2c23f33495ba8da3deecef07421420fd199-112x112.jpg" alt="Tailwind CSS" className="w-6 h-6 md:w-12 md:h-12 rounded-full" />
                            <img src="https://cdn.sanity.io/images/jj3dt7aq/production/b03cc5c154795a5e92463db78913d6465dfd87f7-720x720.png" alt="Javascript" className="w-6 h-6 md:w-12 md:h-12 rounded-full" />
                            <img src="https://cdn.sanity.io/images/jj3dt7aq/production/ab24b36d7596c221793dbf5ca5e7393e92a18465-112x112.jpg" alt="NodeJS" className="w-6 h-6 md:w-12 md:h-12 rounded-full" />
                        </div>

                        <p className="text-sm text-center md:text-lg md:text-left">React JS, Redux, Firebase, Responsive Design,</p>
                        <a href="#" className="flex flex-col text-sm text-center text-[#A955f7]/100 hover:text-[#A955f7]/80">Netflix clone</a>
                    </div>
                </div>




                <div className="w-screen flex-shrink-0 flex flex-col space-y-4 items-center justify-center p-10 md:p-44 h-screen">
                    <motion.img
                        initial={{ y: -300, opacity:0 }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity:1, y:0 }}
                        viewport={{ once: true }}
                        src={`https://cdn.sanity.io/images/jj3dt7aq/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png`} 
                        alt={`Project: nome`}
                    />

                    <div className="space-y-4 px-0 md:px-8 max-w-6xl">
                        <h4 className="text-3xl font-semibold text-center">
                            <span className="underline decoration-[#F7AB0A]/50"></span> 1/4: Netflix
                        </h4>

                        <div className="flex items-center space-x-2 justify-center">
                            <img src="https://cdn.sanity.io/images/jj3dt7aq/production/1e9b03a2f6f5dd82b77e24718bd0e91a85ee2d33-112x112.jpg" alt="ReactJs" className="w-6 h-6 md:w-12 md:h-12 rounded-full" />
                            <img src="https://cdn.sanity.io/images/jj3dt7aq/production/fecccca148ca8d9f3a1a8c6147400f9d53f43dc3-112x112.jpg" alt="CSS" className="w-6 h-6 md:w-12 md:h-12 rounded-full" />
                            <img src="https://cdn.sanity.io/images/jj3dt7aq/production/2cd5b2c23f33495ba8da3deecef07421420fd199-112x112.jpg" alt="Tailwind CSS" className="w-6 h-6 md:w-12 md:h-12 rounded-full" />
                            <img src="https://cdn.sanity.io/images/jj3dt7aq/production/b03cc5c154795a5e92463db78913d6465dfd87f7-720x720.png" alt="Javascript" className="w-6 h-6 md:w-12 md:h-12 rounded-full" />
                            <img src="https://cdn.sanity.io/images/jj3dt7aq/production/ab24b36d7596c221793dbf5ca5e7393e92a18465-112x112.jpg" alt="NodeJS" className="w-6 h-6 md:w-12 md:h-12 rounded-full" />
                        </div>

                        <p className="text-sm text-center md:text-lg md:text-left">React JS, Redux, Firebase, Responsive Design,</p>
                        <a href="#" className="flex flex-col text-sm text-center text-[#A955f7]/100 hover:text-[#A955f7]/80">Netflix clone</a>
                    </div>
                </div>






                <div className="w-screen flex-shrink-0 flex flex-col space-y-4 items-center justify-center p-10 md:p-44 h-screen">
                    <motion.img
                        initial={{ y: -300, opacity:0 }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity:1, y:0 }}
                        viewport={{ once: true }}
                        src={`https://cdn.sanity.io/images/jj3dt7aq/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png`} 
                        alt={`Project: nome`}
                    />

                    <div className="space-y-4 px-0 md:px-8 max-w-6xl">
                        <h4 className="text-3xl font-semibold text-center">
                            <span className="underline decoration-[#F7AB0A]/50"></span> 1/4: Netflix
                        </h4>

                        <div className="flex items-center space-x-2 justify-center">
                            <img src="https://cdn.sanity.io/images/jj3dt7aq/production/1e9b03a2f6f5dd82b77e24718bd0e91a85ee2d33-112x112.jpg" alt="ReactJs" className="w-6 h-6 md:w-12 md:h-12 rounded-full" />
                            <img src="https://cdn.sanity.io/images/jj3dt7aq/production/fecccca148ca8d9f3a1a8c6147400f9d53f43dc3-112x112.jpg" alt="CSS" className="w-6 h-6 md:w-12 md:h-12 rounded-full" />
                            <img src="https://cdn.sanity.io/images/jj3dt7aq/production/2cd5b2c23f33495ba8da3deecef07421420fd199-112x112.jpg" alt="Tailwind CSS" className="w-6 h-6 md:w-12 md:h-12 rounded-full" />
                            <img src="https://cdn.sanity.io/images/jj3dt7aq/production/b03cc5c154795a5e92463db78913d6465dfd87f7-720x720.png" alt="Javascript" className="w-6 h-6 md:w-12 md:h-12 rounded-full" />
                            <img src="https://cdn.sanity.io/images/jj3dt7aq/production/ab24b36d7596c221793dbf5ca5e7393e92a18465-112x112.jpg" alt="NodeJS" className="w-6 h-6 md:w-12 md:h-12 rounded-full" />
                        </div>

                        <p className="text-sm text-center md:text-lg md:text-left">React JS, Redux, Firebase, Responsive Design,</p>
                        <a href="#" className="flex flex-col text-sm text-center text-[#A955f7]/100 hover:text-[#A955f7]/80">Netflix clone</a>
                    </div>
                </div>
                

                
        </div>

        <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
        </div>
    </motion.div>
  )
}

export default Projects