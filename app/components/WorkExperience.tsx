import React from 'react';
import { motion } from 'framer-motion';
import ExperienceIbge from './Experiences/ExperienceCardIbge';
import ExperienceArte from './Experiences/ExperienceCardArte';
import ExperienceCardCasnav from './Experiences/ExperienceCardCasnav';
import ExperienceCardEd3 from './Experiences/ExperienceCardEd3';
import ExperienceCardWooza from './Experiences/ExperienceCardWooza';
import ExperienceCardVtex from './Experiences/ExperienceCardVtex';

interface Image {
    _type: "Image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface Technology {
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Experience  {
    _type: "experience";
    order: number;
    company: string;
    companyImage: Image;
    dateStarted: Date;
    dateEnded: Date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}


function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center bg-[#161B22]'>


      
      <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>

      <div className="w-full flex space-x-5 overflow-x-scroll mt-4 pt-4 pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-track-white-400/20 scrollbar-thumb-[#FFFFFF]/50">
          
          <ExperienceCardEd3 />
          <ExperienceCardWooza />
          <ExperienceCardVtex />
          <ExperienceCardCasnav />
          <ExperienceIbge />
          <ExperienceArte />

      </div>

      
    </motion.div>
    
  )
}

export default Experience