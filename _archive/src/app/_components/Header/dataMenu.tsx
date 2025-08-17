export interface IMenuItem {
  name: string;
  url: string;
  isActive?: boolean;
}

const dataMenu: IMenuItem[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Process",
    url: "/process",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Projects",
    url: "/projects",
  },
  {
    name: "Blog",
    url: "aurelianspodarec.co.uk/blog",
  },
]

export default dataMenu;
