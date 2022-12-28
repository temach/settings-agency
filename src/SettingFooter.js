import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SettingFooter() {
  const footerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 0',
  };

  const footerLeftStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    margin: '10px'
  };

  const footerRightStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'vertical',
    justifyContent: 'center',
    margin: '10px 0',
  };

  const footerRightLinkStyle = {
    textDecoration: 'none',
    margin: '0 10px'
  };

  const footerSocialStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const footerSocialLinkStyle = {
    textDecoration: 'none',
    margin: '0 10px'
  };

  return (
    <footer style={footerStyle}>
      <div style={footerLeftStyle}>
        <h5><h3>About</h3>This website is owned and operated by John Doe. All content on this website is for informational purposes only. We do not provide any warranties or guarantees about the accuracy, completeness, or reliability of the information on this website. Use of this website is at your own risk.</h5>
      </div>
      <div style={footerSocialStyle}>
        <a href="https://facebook.com" style={footerSocialLinkStyle}><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://twitter.com" style={footerSocialLinkStyle}><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://instagram.com" style={footerSocialLinkStyle}><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://youtube.com" style={footerSocialLinkStyle}><FontAwesomeIcon icon={faYoutube} /></a>
      </div>
    </footer>
  );
}

// <div style={footerRightStyle}>
//   <a href="/about" style={footerRightLinkStyle}>About Us</a> | <a href="/company" style={footerRightLinkStyle}>Company</a> | <a href="/terms" style={footerRightLinkStyle}>Terms of Use</a> | <a href="/privacy" style={footerRightLinkStyle}>Privacy Policy</a> | <a href="/contact" style={footerRightLinkStyle}>Contact Us</a>
// </div>

export default SettingFooter;
