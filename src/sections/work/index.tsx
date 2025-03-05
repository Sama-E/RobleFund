import React from 'react'
import { motion } from 'framer-motion';

import { SelectedPage, WorkType } from '@/types/types';
import HText from '@/components/HText';
import Work from './Work';

import image1 from "@/assets/1 - Ali Shire Omar.jpg";
import image2 from "@/assets/2 - Saed Abdi Duale.jpg";
import image3 from "@/assets/3 - Maryam Hussein.jpg";
import image4 from "@/assets/4 - Comunidad de Sincaro.jpg";

const works: Array<WorkType> = [
  {
    name: "Health Crises",
    description: "Clean water is crucial for preventing diseases in Sanag Region, saving lives and reducing health crises.",
    image: image1,
  },
  {
    name: "Economic Impact",
    description: "Water scarcity limits economic opportunities, forces long walks for unreliable sources, hinders education, employment, agriculture, and income generation.",
    image: image2,
  },
  {
    name: "Environmental Strain",
    description: "Overuse and mismanagement of water resources strain the environment, threatening agriculture, food security, and biodiversity without sustainable solutions.",
    image: image3,
  },
  {
    name: "The Importance of Action",
    description: "Water sustains health, drives development, and nurtures the environment; addressing scarcity fosters thriving communities, improved health, and opportunities.",
    image: image4,
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Works = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="works"
      className="mx-auto w-5/6 pt-24 pb-32"
    >

      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Works)}
      >
        <motion.div
          className="w-4/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
          }}  
        >
          <div className="w-4/5 mt-10">
            <HText>Our Work: Why Water Matters
            </HText>
            <ul>
              <li className="py-3">
              Water is the essence of life, playing an indispensable role in both biological and social systems. It is the foundation of human survival and well-being, enabling critical bodily functions such as nutrient absorption, waste removal, and temperature regulation.
              </li>
              <li className="py-3">
              Beyond its physiological importance, water is vital for maintaining ecosystems, supporting biodiversity, fostering plant growth, and ensuring agricultural productivity.
              </li>
              <li className="py-3">
              However, for communities in the Sanag Region, the scarcity of clean and reliable water creates severe challenges that ripple through every aspect of life.
              </li>
            </ul>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {works.map((item: WorkType, index) => (
              <Work 
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
    </motion.div>

  </section>
  )
}

export default Works