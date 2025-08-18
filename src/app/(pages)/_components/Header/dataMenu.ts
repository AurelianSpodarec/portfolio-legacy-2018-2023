import { WebsiteRoutes } from "@/routes";

export interface IMenuItem {
  name: string;
  link: WebsiteRoutes
}

const dataMenu: IMenuItem[] = [
  {
    name: "Services",
    link: WebsiteRoutes.SERVICES
  },
  {
    name: "About",
    link: WebsiteRoutes.ABOUT
  },
  {
    name: "Projects",
    link: WebsiteRoutes.WORK
  },
  {
    name: "Get In Touch",
    link: WebsiteRoutes.CONTACT
  }
]

export default dataMenu