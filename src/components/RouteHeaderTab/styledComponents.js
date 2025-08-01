import styled from 'styled-components'

export const TrendingHeaderTab = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f1f1f1')};
  transition: background-color 0.3s ease-in;
  padding: 16px;
`

export const TrendingTabIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  height: 48px;
  width: 48px;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#e2e8f0')};
  transition: background-color 0.3s ease-in;
  margin-right: 10px;
`

export const TrendingTabTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  margin: 12px 0;
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#1e293b')};
`
