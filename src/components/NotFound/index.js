import Header from '../Header'
import NavigationSidebar from '../NavigationSidebar'

import {
  NotFoundPage,
  NotFoundContent,
  NotFoundResultContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDesc,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <NotFoundPage>
          <Header />
          <NotFoundContent>
            <NavigationSidebar />
            <NotFoundResultContainer isDarkTheme={isDarkTheme}>
              <NotFoundImage
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundHeading isDarkTheme={isDarkTheme} title>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDesc isDarkTheme={isDarkTheme}>
                We are sorry, the page you requested could not be found.
              </NotFoundDesc>
            </NotFoundResultContainer>
          </NotFoundContent>
        </NotFoundPage>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
