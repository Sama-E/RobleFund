// import { JSX } from "react";

export enum SelectedPage {
  Home = "home",
  Mission = "mission",
  Wells = "wells",
  Works = "works",
  ContactUs = "contactus",
  Donate = "donate",
}

export interface MissionType {
  // icon: JSX.Element;
  title: string;
  description: string;
}

export interface LocationType {
  // icon: JSX.Element;
  title: string;
  description: string;
}

export interface WorkType {
  name: string;
  description?: string;
  image: string;
}

export interface AmountType {
  amount: string;
}

//"?" in description makes it optional