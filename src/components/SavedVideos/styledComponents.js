import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  transition: background-color 0.3s ease-in;
`

export const SavedVideosContent = styled.div`
  display: flex;
  height: calc(100vh - 64px);
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  transition: background-color 0.3s ease-in;
`

export const SavedVideosPageContent = styled.div`
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

export const VideosList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style-type: none;
  padding-left: 0;
  padding: 20px;
  padding-right: 0;
  background-color: transparent;
  margin: 0;
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
  margin-bottom: 18px;
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
