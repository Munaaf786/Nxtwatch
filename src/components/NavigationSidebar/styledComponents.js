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
  @media (max-width: 768px) {
    display: none;
  }
`

export const ContactUsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding-lett: 16px;
`

export const ContactUsPara = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 700;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
  margin-bottom: 20px;
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
  width: 40px;
  height: 40px;
`

export const NavigationContainerDesc = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#64748b')};
`
