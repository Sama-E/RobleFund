import React from 'react'
import { motion } from 'framer-motion';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '@/types/types';

const childVariant = {
  hidden: {opacity:0, scale:0.9},
  visible: {opacity:1, scale:1}
}

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
}

const Location = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div 
      variants={childVariant}    
    >
      <div className="rounded-md border-2 border-gray-100 px-3 py-3">
        
        <p><h4 className="font-bold">{icon} {title}</h4></p>
        <p className="my-3">{description}</p>
        <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >
            <p>Learn More</p>
        </AnchorLink>
      </div>


    </motion.div>
  )
}

export default Location