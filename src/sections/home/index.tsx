import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

import { SelectedPage } from "@/types/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/components/Buttons/ActionButton";
import Drought from "@/assets/5 - Somaliland.jpg"
import Mission from "../mission";

// import OxFam from "@/assets/OxfamGreen.png";
// import STC from "@/assets/SaveTheChildren.png";
// import ADB from "@/assets/ADB.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return ( 
      <section id="home" className="mx-auto pt-24 pb-32">
        {/* IMAGE AND MAIN HEADER */}
        <motion.div
          className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          {/* MAIN HEADER */}
          <div className="z-10 pt-20 mt-32 md:basis-3/5">
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

              <div className="relative">
                <h1 className={`flex text-5xl font-extrabold text-black`}>
                  The Roble Foundation
                </h1>
                <h2 className={`flex justify-center text-3xl font-medium text-black`}>
                  Find. Built. Nourish.
                </h2>
              </div>
              <p className="mt-8 text-lg text-black">
                The Roble Foundation is a non-profit organization dedicated to tackling the critical issue of water scarcity in the Sanag Region of Somaliland. Clean and safe water is essential for health, agriculture, and economic stability. Yet, for many communities in this region, accessing water is a daily struggle that profoundly affects their quality of life and opportunities for growth.
              </p>
            </motion.div>

            {/* ACTIONS */}
            <motion.div
              className="mt-8 flex items-center gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
              }}
            >
              <ActionButton setSelectedPage={setSelectedPage}>
                Donate Now
              </ActionButton>
              <AnchorLink
                className="text-sm font-extrabold text-black underline hover:text-gray-500"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`#${SelectedPage.ContactUs}`}
              >
                <p>Learn More</p>
              </AnchorLink>
            </motion.div>
          </div>

          {/* IMAGE */}
          <div
            className="flex basis-4/5 justify-center md:z-10
                md:ml-40 md:mt-16 md:justify-items-end"
          >
            <img alt="drought" src={Drought} className="rounded-3xl shadow-2xl" />
          </div>
        </motion.div>
    </section>
    );
};

export default Home;