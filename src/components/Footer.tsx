import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
      <a href="mailto:shakshirathore1003@gmail.com" target="_blank" rel="noreferrer">
  <span style={{ fontSize: "32px", display: "inline-block", cursor: "pointer" }}>📧</span>
</a>
 <a href="https://www.linkedin.com/in/shak-shi/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by Shakshi with 💜</p>
    </footer>
  );
}

export default Footer;

