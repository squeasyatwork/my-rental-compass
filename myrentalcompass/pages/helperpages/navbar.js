import Link from "next/link";
import Image from "next/image";

const NavBar = ({ activePage }) => {
  const isMapPageActive = activePage === "Find where to live";
  return (
    <nav
      className={`relative top-0 left-0 h-20 w-full py-4 px-4 flex items-center justify-between bg-MapNavGray shadow-md z-50`}
    >
      <div className="flex justify-between w-full items-center">
        <div className="flex justify-center items-center">
          <Link href="/">
            <div className="flex ml-4 sm:ml-8 sm:left-4 items-center">
              <Image
                src="/mrc-logov3.png"
                alt="MRC Logo"
                width={140}
                height={140}
              />
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-between lg:space-x-16 md:space-x-10 sm:space-x-6">
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
        </div>
        <div className="flex items-center justify-between">
          <NavBarButton
            text="Find a suburb to live"
            special={true}
            href="/map"
            isActive={activePage === "Find where to live"}
          />
        </div>
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
