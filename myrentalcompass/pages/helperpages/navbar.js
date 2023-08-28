import Link from "next/link";

const NavBar = ({ activePage }) => {
  return (
    <nav className="relative top-0 left-0 h-30 w-full px-2 py-4 bg-BackgroundWhite flex items-center justify-center">
      <Link href="/"> 
          <div className="absolute left-20 top-1 bottom-1 w-24"> 
              <img src="/mrc_logo.svg" alt="MRC Logo" className="w-full h-auto object-contain"/>
          </div>
      </Link>

      <div className="flex max-w-screen-lg w-full justify-between px-4 items-center">
        <NavBarButton text="Home" href="/" isActive={activePage === "Home"} />
        <NavBarButton
            text="Understand your rights"
            href="/rights"
            isActive={activePage === "Understand your rights"}
        />
        <NavBarButton
            text="What is liveability"
            href="/liveability"
            isActive={activePage === "What is liveability"}
        />
        <NavBarButton
            text="Other resources"
            href="/resources"
            isActive={activePage === "Other resources"}
        />
        <NavBarButton
            text="Find where to live"
            special={true}
            href="/map"
            isActive={activePage === "Find where to live"}
        />
      </div>
    </nav>
  );
};
const NavBarButton = ({ text, special, href, isActive }) => (
  <Link href={href}>
    <div
      className={`navbar-button ${special ? "call-action-button" : ""} ${
        isActive ? "navbar-button-active" : ""
      }`}
    >
      {text}
    </div>
  </Link>
);

export default NavBar;