import {HeaderContainer, Logo, NavLinks, NavLink} from './styledComponents'
import {Link} from 'react-router-dom'

const Header = () => (
  <HeaderContainer>
    <Logo>HealthCare+</Logo>
    <NavLinks>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/alldoctors">Doctors</NavLink>
    </NavLinks>
  </HeaderContainer>
)

export default Header
