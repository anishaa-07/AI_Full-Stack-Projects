import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>MovieVerse</h2>

      <p>
        Discover movies, explore stories, and experience cinema in a whole new
        way.
      </p>

      <div className="footer-icons">
        <FaGithub />
        <FaInstagram />
        <FaLinkedin />
      </div>

      <span>© 2026 MovieVerse • Crafted with ❤️ using React</span>
    </footer>
  );
};

export default Footer;