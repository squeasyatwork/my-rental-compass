import Link from "next/link";

const NavBar = ({ activePage }) => {
  const isMapPageActive = activePage === "Find where to live";
  return (
    <nav
      className={`relative top-0 left-0 h-20 w-full px-2 py-4 flex items-center justify-center ${
        isMapPageActive ? "bg-MapNavGray" : "bg-BackgroundWhite"
      }`}
    >
      <Link href="/">
        <div className="flex ml-10 sm:left-20 top-2 bottom-1 w-16">
          <img
            src="/mrc_logo.svg"
            alt="MRC Logo"
            className="w-full h-auto object-contain"
          />
        </div>
      </Link>

      <div className="flex justify-center max-w-screen-xl mx-auto w-full px-4 sm:px-8 items-center space-x-20"> 
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
          href="/questionnaire"
          isActive={activePage === "Find where to live"}
        />
      </div>
    </nav>
  );
};

const NavBarButton = ({ text, special, href, isActive }) => (
  <Link href={href}>
    <div
      className={`navbar-button ${
        special ? "call-action-button" : ""
      } ${isActive ? "navbar-button-active" : ""}`}
    >
      {text}
    </div>
  </Link>
);

export default NavBar;
