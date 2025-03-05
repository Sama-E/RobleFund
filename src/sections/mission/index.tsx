import React from 'react'
import { motion } from 'framer-motion';
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineWaterDrop } from "react-icons/md";

import { MissionType, SelectedPage } from '@/types/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import Missions from './Missions';
import HText from '@/components/HText';

const missions: Array<MissionType> = [
  {
      icon: <MdOutlineWaterDrop className="h-6 w-6" />,
      title: "Support Access to Water",
      description:
          "We develop sustainable water infrastructure, including boreholes, distribution systems, and sanitation facilities, to ensure reliable access, promote health, and support long-term community growth."
  },
  {
      icon: <HiOutlineUserGroup className="h-6 w-6" />,
      title: "Empower Communities",
      description:
          "Our mission empowers communities with knowledge and tools to manage water, boost agriculture, and achieve self-reliance through training, leadership, and sustainable, community-driven initiatives."
  },
  {
      icon: <MdOutlineHealthAndSafety className="h-6 w-6" />,
      title: "Promote Health and Sanitation",
      description:
          "Access to clean water prevents waterborne diseases like diarrhea, typhoid, and malaria. We advocate for water, sanitation, and hygiene solutions to improve health and reduce illnesses."
  },
];

const container = {
  hidden: {},
  visible: {
      transistion: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Mission = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <>     
      <section id="mission" className="mx-auto w-5/6 pt-24 pb-32">
        <motion.div 
          className="mt-5 items-center justify-around gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          // variants={container}
        >

          <motion.div className="px-5 py-16">
            <HText>
              <span className="text-primary-500">Our </span>Mission:
            </HText>
            <p className="my-3">

            Our mission at the Roble Foundation is to address water scarcity in the Sanag Region by providing sustainable solutions that empower communities, enhance health, and support long-term development. We are committed to creating a future where every individual has access to clean, safe water and the tools to thrive.
            </p>
          </motion.div>
        
          {isAboveMediumScreens ? (
          <div className="inline-block h-[350px] min-h-[1em] w-0.5 self-stretch bg-gray-400"></div>
          ) :
          (
            <hr className="my-6 h-0.5 border-t-0 bg-gray-400" />
          )}

          <motion.div className="px-5 py-16">
            <HText>
              <span className="text-primary-500">Our </span>Vision:
            </HText>
            <p className="my-3">
              We envision a future where no one in the Sanag Region suffers from a lack of clean and safe water. Our goal is to eliminate the daily struggles caused by water scarcity through sustainable water infrastructure and community empowerment. With reliable access to clean water, we aim to improve health outcomes, enhance educational opportunities, boost agricultural productivity, and reduce poverty. By fostering social and economic growth, we strive to create thriving, self-reliant communities and a future marked by resilience, dignity, and prosperity for all.
            </p>
          </motion.div>
        </motion.div>
      </section>

        <section id="about" className="mx-auto m-h-full w-3/4 py-2">
          <motion.div 
            className="mt-2 items-center justify-between gap-2 md:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            // variants={container}
          >
            {missions.map((project: MissionType) => (
              <Missions 
                key={project.title}
                icon={project.icon}
                title={project.title}
                description={project.description}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </motion.div>
        </section>

    </>
  )
}

export default Mission