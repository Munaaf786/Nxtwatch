import styled from 'styled-components'

export const NavigationContainer = styled.div`
  width: 24%;
  max-width: 240px;
  height: calc(100vh-64px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#ffffff')};
  transition: background-color 0.3s ease-in;
  @media (max-width: 768px) {
    display: none;
  }
  @media (min-width: 992px) {
    width: 22%;
  }
  position: sticky;
  left: 0;
  box-shadow: ${props =>
    props.isDarkTheme ? '2px 0 6px #60606010' : '2px 0 6px 2px #00000010'};
`

export const ContactUsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding-left: 16px;
`

export const ContactUsPara = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 700;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
  transition: color 0.3s ease-in;
  margin-bottom: 16px;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

export const MediaAnchor = styled.a`
  margin-right: 10px;
`

export const MediaImage = styled.img`
  width: 32px;
  height: 32px;
`

export const NavigationContainerDesc = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#64748b')};
  transition: color 0.3s ease-in;
  margin-top: 8px;
`
