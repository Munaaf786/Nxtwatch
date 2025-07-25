import styled from 'styled-components'

export const NotFoundPage = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f4f4f4')};
  transition: background-color 0.3s ease-in;
`

export const NotFoundContent = styled.div`
  display: flex;
  height: calc(100vh - 64px);
  width: 100%;
`

export const NotFoundResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f4f4f4')};

  @media (min-width: 767px) {
    width: 80%;
    flex-grow: 1;
  }
`

export const NotFoundImage = styled.img`
  width: 80%;
  max-width: 300px;
`

export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  text-align: center;

  transition: color 0.3s ease-in;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
`

export const NotFoundDesc = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;

  transition: color 0.3s ease-in;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#475569')};
`
