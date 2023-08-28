function Footer() {
    return (
      <footer className="bg-FooterButtonYellow text-NavTextGray py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} SuperFivers. All rights reserved.
        </p>
      </footer>
    );
  }
  export default Footer;