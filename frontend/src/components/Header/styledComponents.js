import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #0a4f70;
  color: #fff;
`

export const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
`

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`

export const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`
