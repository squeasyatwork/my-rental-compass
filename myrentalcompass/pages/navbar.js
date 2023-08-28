import Link from "next/link";

const NavBar = ({ activePage }) => {
  return (
    <nav className="fixed top-0 left-0 h-30 w-screen px-2 py-4 bg-BackgroundWhite flex items-center justify-center" style={{zIndex: 9}}>
      <div className="flex max-w-screen-lg w-full justify-between px-4 items-center">
        {/* Placeholder for the icon */}
        <div className="w-8 h-8 bg-gray-400 rounded mr-4"></div>

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
