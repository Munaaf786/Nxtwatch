import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavigationMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
  margin-top: 0;
  width: 100%;
  padding: 8px;
`

export const MenuTab = styled.li`
  list-style-type: none;
  width: 100%;
  height: 44px;
  transition: background-color 0.3s ease-in;
  padding-left: 8px;
  background-color: ${props => {
    if (props.isDarkTheme) {
      if (props.isActiveTab === true) {
        return '#606060'
      }
    }
    if (props.isActiveTab === true) {
      return '#e2e8f0'
    }
    return 'transparent'
  }};
  :hover ${props => props.isActiveTab} {
    background-color: ${props =>
      props.isDarkTheme && !props.isActiveTab ? '#60606080' : '#e2e8f080'};
  }
  margin-bottom: 8px;
  border-radius: 8px;
`

export const CustomLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const TabName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: ${props => (props.isActiveTab === true ? 500 : 400)};
  margin: 0;
  margin-left: 10px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  transition: all 0.3s ease-in;
`
