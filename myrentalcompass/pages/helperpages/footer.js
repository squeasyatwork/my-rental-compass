import Link from "next/link";

function Footer() {
    return (
      <footer className="bg-FooterButtonYellow text-NavTextGray py-4 text-center">
        <div className="flex justify-center items-center">
          <p className="mr-2">
            © {new Date().getFullYear()} SuperFivers.
          </p>
          <Link href="/privacy">
            <button className="underline hover:text-ButtonHoverYellow">
              Read Our Privacy Policy
            </button>
          </Link>
        </div>
        
      </footer>
    );
  }
  export default Footer;