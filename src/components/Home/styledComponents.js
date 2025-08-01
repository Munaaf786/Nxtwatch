import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  transition: background-color 0.3s ease-in;
`

export const HomeContent = styled.div`
  display: flex;
  height: calc(100vh - 64px);
  width: 100%;
`

export const HomeVideosContent = styled.div`
  width: 100%;
  overflow-y: auto;
  scrollbar-gutter: stable;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-grow: 1;
  }
`

export const VideosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f4f4f4')};
  transition: background-color 0.3s ease-in;
  padding: 20px;
  padding-right: 0;
`

export const PremiumBanner = styled.div`
  width: 100%;
  height: 240px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 32px;

  @media (min-width: 767px) {
    height: 260px;
  }
`

export const BannerLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const WebsiteLogo = styled.img`
  height: 36px;
  width: 160px;

  @media (min-width: 767px) {
    height: 40px;
    width: 180px;
  }
`

export const CloseBtn = styled.button`
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-self: flex-start;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 24px;
`

export const PremiumBannerDesc = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #000000;
  max-width: 400px;

  @media (min-width: 767px) {
    font-size: 22px;
  }
`

export const GetItNowBtn = styled.button`
  height: 40px;
  width: 120px;
  border: 1px solid #000000;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  border-radius: 6px;
  transition: all 0.3s ease-in;
  :hover {
    background-color: #181818;
    color: #ffffff;
    transform: translateY(-5px);
    cursor: pointer;
  }

  @media (min-width: 767px) {
    height: 44px;
    width: 140px;
    font-size: 18px;
  }
`

export const SearchBarContainer = styled.div`
  width: 100%;
  max-width: 560px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  margin-right: 16px;
  border: 1px solid #94a3b8;
  border-radius: 8px;
  outline: none;
`

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 0 12px;
  height: 100%;
  width: 100%;

  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#1e293b')};
  background-color: ${props => (props.isDarkTheme ? '#18181890' : '#ffffff90')};
  transition: background-color 0.3s ease-in;

  outline: none;
  border: none;
  border-right: 1px solid #94a3b8;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  font-family: 'Roboto';
  font-size: 16px;

  :focus,
  :hover {
    background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  }
`

export const SearchBtn = styled.button`
  height: 100%;
  width: 80px;

  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#f4f4f4')};
  transition: background-color 0.3s ease-in;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-left: 1px solid #94a3b8;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  font-size: 18px;
  cursor: pointer;
  outline: none;
`

export const VideosList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0;

  @media (min-width: 576px) {
    justify-content: flex-start;
  }
`

export const NoVideosContainer = styled.div`
  width: 100%;
  height: calc(100vh-64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`

export const NoVideosImg = styled.img`
  width: 100%;
  max-width: 440px;
`

export const NoVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 10px;

  transition: color 0.3s ease-in;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
`

export const NoVideosDesc = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;

  transition: color 0.3s ease-in;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
`

export const NoVideosBtn = styled.button`
  height: 48px;
  width: 100px;

  border: none;
  border-radius: 4px;
  background-color: #4f47e6;
  color: #ffffff;

  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
  margin-top: 12px;

  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in;

  :hover {
    background-color: #6c5eff;
    transform: translateY(-5px);
  }
`
