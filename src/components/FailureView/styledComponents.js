import styled from 'styled-components'

export const FailurePage = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f4f4f4')};
  transition: background-color 0.3s ease-in;
  padding: 20px;
`

export const FailureResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease-in;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f4f4f4')};

  @media (min-width: 767px) {
    width: 80%;
  }
`

export const FailureImage = styled.img`
  width: 64%;
  max-width: 300px;
  margin-bottom: 16px;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin: 10px;

  transition: color 0.3s ease-in;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
`

export const FailureDesc = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  text-align: center;

  transition: color 0.3s ease-in;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#7e858e')};
`

export const FailureRetyBtn = styled.button`
  height: 40px;
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
