import "./Footer.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">
        

      <p className="footer__text"> &copy; Budget Bloom. All Rights Reserved. Made with love by Joice. </p>

      <div className="socials">
          <a
            href="https://joiceron.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="socials__icon"
            aria-label="Portfolio"
          >
           <FiExternalLink size={20} />
          </a>
          <a
            href="https://github.com/joiceron"
            target="_blank"
            rel="noopener noreferrer"
            className="socials__icon"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/joiceron"
            target="_blank"
            rel="noopener noreferrer"
            className="socials__icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
    </footer>
  );
}
