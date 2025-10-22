import "./Footer.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__instructions">
        <span className="footer__instructions--bold">Intructions: </span>If you’re using local memory, simply insert a number and the entire row
        will auto-fill. To edit a single value, click “Fix” to enable variable
        cost mode and adjust individual inputs. Press “Calculate” to see totals
        or “Clear” to reset everything. Refreshing the page will load sample
        values unless you’re connected to the backend. If you downloaded the
        server and have the database from: 
        &nbsp; <a
        className="footer__instructions--link"
          target="_blank"
          href="https://github.com/joiceron/budget-bloom-server"
        >
          GitHub 
        </a>
        &nbsp; set up, your data will be saved. Just make sure “Demo with Server” is
        active. You can switch the number of visible months by clicking above,
        but doing so will reset any unsaved data.
      </p>
      <div className="footer__container">
        <p className="footer__text">
          &copy; Budget Bloom. All Rights Reserved. Made with love by Joice.
        </p>

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
      </div>
    </footer>
  );
}
