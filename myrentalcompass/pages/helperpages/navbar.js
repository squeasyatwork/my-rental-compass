import Link from "next/link";

const NavBar = ({ activePage }) => {
  const isMapPageActive = activePage === "Find where to live";
  return (
    <nav
      className={`relative top-0 left-0 h-20 w-full px-0 py-4 flex items-center justify-center mr-20 ${isMapPageActive ? "bg-MapNavGray" : "bg-BackgroundWhite"
        }`}
    >
      <div className="flex justify-center max-w-screen-xl mx-auto w-full px-2 items-center sm:px-4 sm:space-x-6 md:space-x-12 lg:space-x-20">
        <Link href="/">
          <div className="flex ml-4 sm:ml-8 sm:left-4 top-2 bottom-1 w-16">
            <img
              src="/mrc-logov2.svg"
              alt="MRC Logo"
              className="w-full h-auto object-contain"
            />
          </div>
        </Link>
        <NavBarButton text="Home" href="/" isActive={activePage === "Home"} />
        <NavBarButton
          text="What you need to do"
          href="/resources"
          isActive={activePage === "What you need to do"}
        />
        <NavBarButton
          text="What you need to know"
          href="/rights"
          isActive={activePage === "What you need to know"}
        />
        <NavBarButton
          text="What is liveability"
          href="/liveability"
          isActive={activePage === "What is liveability"}
        />
        <NavBarButton
          text="Find a suburb to live"
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
      className={`text-center navbar-button ${special ? "call-action-button" : ""} ${isActive ? "navbar-button-active" : ""
        }`}
    >
      {text}
    </div>
  </Link>
);

export default NavBar;
