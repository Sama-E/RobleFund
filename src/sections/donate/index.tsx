import React from 'react'
import { motion } from 'framer-motion';

import { SelectedPage } from '@/types/types';
import HText from '@/components/HText';
// import image4 from "@assets/4 - Comunidad de Sincaro.jpg"
import image4 from "@/assets/4 - Comunidad de Sincaro.jpg"


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Donate = ( { setSelectedPage }: Props) => {
  const buttonStyles = `w-[60px] h-[50px] p-2 border-[1px] border-gray-400 bg-white rounded-md border-gray-400 bg-secondary-500 hover:bg-primary-500 hover:text-white`

  return (
    <section id="donate" className="mx-auto pt-24 pb-32">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-3/5 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Donate)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 pt-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="w-[90%] md-:w-[300px] mx-auto p-4 rounded-2xl border-gray-400 border-[1px] bg-white text-black shadow-md">
              <HText>
              <span className="text-primary-500"> . Donate . </span>
              </HText>
              <div className="flex items-center justify-center gap-8 py-4">
                <button className={buttonStyles}>$5</button>
                <button className={buttonStyles}>$10</button>
                <button className={buttonStyles}>$50</button>
                <button className={buttonStyles}>$100</button>
              </div>
              <div className="items-center justify-center gap-8 py-4">
                <p className="text-right">
                <input type="number" 
                  name="amount"
                  id="amount"
                  placeholder="Amount"
                  max={100}
                  className="w-3/5 border mt-5 mr-5 px-4 py-2 rounded-lg"
                />
                </p>
                <p className="text-right">
                <input type="text" 
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="w-3/5 border mt-5 mr-5 px-4 py-2 rounded-lg"
                />
                </p>
                <p className="text-right">
                <input type="email" 
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-3/5 border mt-5 mr-5 px-4 py-2 rounded-lg"
                />
                </p>
                <div className="flex items-center justify-center gap-8 py-4">
                <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                DONATE
              </button>
              </div>
              </div>
            </div>

          </motion.div>
        </div>
          <motion.div
            className="relative mt-16 basis-4/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
          >
            <div>
              <img 
                className="w-full rounded-2xl"
                alt="contact-us-page-graphic"
                src={image4}
              />
            </div>
          </motion.div>
      </motion.div>
    </section>
  )
}

export default Donate