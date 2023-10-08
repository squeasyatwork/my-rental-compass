function Footer({ footer_text = "All rights reserved" }) {
  return (
    <footer className="bg-FooterButtonYellow text-NavTextGray py-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} SuperFivers. {footer_text}
      </p>
    </footer>
  );
}
export default Footer;