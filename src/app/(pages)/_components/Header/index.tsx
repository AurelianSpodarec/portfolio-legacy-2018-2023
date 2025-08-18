import HeaderDesktop from "./Desktop";
import HeaderMobile from "./Mobile";

function WebHeader() {
  return (
    <header className="bg-[#262626] text-white">
      <HeaderDesktop />
      <HeaderMobile />
    </header>
  );
}

export default WebHeader
