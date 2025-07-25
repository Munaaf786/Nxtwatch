import Loader from 'react-loader-spinner'

import NxtWatchContext from '../../context/NxtWatchContext'

import {LoaderContainer} from './styledComponents'

const LoaderView = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <LoaderContainer data-testid="loader">
          <Loader
            type="ThreeDots"
            height="50"
            width="50"
            color={isDarkTheme ? '#ffffff' : '#000000'}
          />
        </LoaderContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default LoaderView
