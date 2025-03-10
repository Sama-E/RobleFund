import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/types/types";
import Link from "./Link";
import ActionButton from "../Buttons/ActionButton";


type Props = {
isTopOfPage: boolean;
selectedPage: SelectedPage;
setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
const flexBetween = "flex items-center justify-between";
const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
return (
  <nav>
    <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* LEFT-SIDE */}
          <h1 className={`text-xl font-mono font-semibold`}>
            The Roble Foundation
          </h1>

          {/* RIGHT-SIDE */}
          {/* DESKTOP MENU */}
          {isAboveMediumScreens ? (
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-med`}>
              <Link 
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
              />
              <Link 
                  page="Mission"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage} 
              />
              <Link 
                  page="Wells"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
              />
              <Link 
                  page="Works" 
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
              />
              <Link 
                  page="Contact Us" 
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
              />
            </div>
              <div className={`${flexBetween} gap-8`}>
                <ActionButton setSelectedPage = {setSelectedPage}>
                    DONATE
                </ActionButton>
              </div>
          </div>
          ) : (
          <button 
              className="rounded-full bg-gray-400 p-2"
              onClick={() => setIsMenuToggled
                  (!isMenuToggled)
              }
          >
              <Bars3Icon className="h-6 w-6 text-white" />
          </button>
          )}
        </div>
      </div>
  </div>
  
  {/* MOBILE MENU MODAL */}
  {!isAboveMediumScreens && isMenuToggled && (
      <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <XMarkIcon className="h-6 w-6 text-gray-400" />
              </button>
          </div>
          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link 
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link 
              page="About Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage} 
            />
            <Link 
              page="Our Work"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link 
              page="Drilling Wells" 
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link 
              page="Contact Us" 
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
      </div>
  )}
</nav>
)
}

export default Navbar