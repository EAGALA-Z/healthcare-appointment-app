import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
import {FooterContainer, FooterText, SocialIcons, IconLink} from './styledComponents'

const Footer = () => (
  <FooterContainer>
    <FooterText>© 2025 HealthCare+. All Rights Reserved.</FooterText>
    <SocialIcons>
      <IconLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
      </IconLink>
      <IconLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </IconLink>
      <IconLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </IconLink>
    </SocialIcons>
  </FooterContainer>
)

export default Footer
