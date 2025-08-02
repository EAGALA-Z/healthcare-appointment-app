import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: #0a4f70;
  color: #fff;
  text-align: center;
  padding: 20px 10px;
  margin-top: 40px;
`

export const FooterText = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 8px;
`

export const IconLink = styled.a`
  color: #ffffff;
  font-size: 18px;
  transition: color 0.3s ease;

  &:hover {
    color: #38bdf8; /* Light blue on hover */
  }
`
