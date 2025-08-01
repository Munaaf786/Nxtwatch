import {
  FailurePage,
  FailureResultContainer,
  FailureImage,
  FailureHeading,
  FailureDesc,
  FailureRetyBtn,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const FailureView = props => {
  const {reload} = props
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <FailurePage isDarkTheme={isDarkTheme}>
            <FailureResultContainer isDarkTheme={isDarkTheme}>
              <FailureImage
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                }
                alt="failure view"
              />
              <FailureHeading isDarkTheme={isDarkTheme} title>
                Oops! Something Went Wrong
              </FailureHeading>
              <FailureDesc isDarkTheme={isDarkTheme}>
                We are having some trouble to complete your request.
                <br />
                Please try again.
              </FailureDesc>
              <FailureRetyBtn type="button" onClick={reload}>
                Retry
              </FailureRetyBtn>
            </FailureResultContainer>
          </FailurePage>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
