import NxtWatchContext from '../../context/NxtWatchContext'
import NavigationTabs from '../NavigationTabs'

import {
  NavigationContainer,
  ContactUsSection,
  ContactUsPara,
  SocialMediaContainer,
  MediaAnchor,
  MediaImage,
  NavigationContainerDesc,
} from './styledComponents'

const NavigationSidebar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <NavigationContainer isDarkTheme={isDarkTheme}>
          <NavigationTabs />
          <ContactUsSection>
            <ContactUsPara isDarkTheme={isDarkTheme}>CONTACT US</ContactUsPara>
            <SocialMediaContainer>
              <MediaAnchor href="#">
                <MediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </MediaAnchor>
              <MediaAnchor href="#">
                <MediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </MediaAnchor>
              <MediaAnchor href="#">
                <MediaImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </MediaAnchor>
            </SocialMediaContainer>
            <NavigationContainerDesc isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </NavigationContainerDesc>
          </ContactUsSection>
        </NavigationContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NavigationSidebar
