import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { SelectedPage } from '@/types/types';

type Props = {
  children: React.ReactNode;
  setSelectedPage:(value:SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-gray-500 text-white px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.Donate)}
      href={`#${SelectedPage.Donate}`}
  >
      {children}
    </AnchorLink>
  )
}

export default ActionButton