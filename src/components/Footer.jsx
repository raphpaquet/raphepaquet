import "./Footer.scss";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="follow">
        <a
          href="https://github.com/raphpaquet"
          target="_blank"
          rel="noreferrer"
          style={{ marginRight: "1rem" }}
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/raphellepaquet"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <div className="made-of">Made with 🖤, React, HTML & SASS</div>
      <div className="rights">
        @ 2021 Raphaëlle Paquet | All Rights Reserved.
      </div>
    </footer>
  );
}
