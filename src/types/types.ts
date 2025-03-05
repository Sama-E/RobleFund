export enum SelectedPage {
  Home = "home",
  About = "about",
  Work = "work",
  Wells = "wells",
  ContactUs = "contactus",
  Donate = "donate",
}

export interface MissionType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface LocationType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}

export interface AmountType {
  amount: string;
}

//"?" in description makes it optional