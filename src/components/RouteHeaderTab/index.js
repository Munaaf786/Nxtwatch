import NxtWatchContext from '../../context/NxtWatchContext'

import {
  TrendingHeaderTab,
  TrendingTabIconContainer,
  TrendingTabTitle,
} from './styledComponents'

const RouteHeaderTab = props => {
  const {icon: Icon, headerText} = props
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <TrendingHeaderTab isDarkTheme={isDarkTheme}>
            <TrendingTabIconContainer isDarkTheme={isDarkTheme}>
              <Icon size={24} color="red" />
            </TrendingTabIconContainer>
            <TrendingTabTitle isDarkTheme={isDarkTheme}>
              {headerText}
            </TrendingTabTitle>
          </TrendingHeaderTab>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default RouteHeaderTab
