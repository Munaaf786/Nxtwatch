import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {BiSun} from 'react-icons/bi'
import {BsMoon} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  Navbar,
  NavContent,
  NavWebsiteLogo,
  MobileNavItemsContainer,
  DesktopNavItemsContainer,
  NavItem,
  NavIconBtn,
  Profile,
  LogoutBtn,
  StyledPopup,
  ModalContainer,
  ModalDesc,
  ButtonsContainer,
  CancelBtn,
  ConfirmBtn,
} from './styledComponents'

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      console.log('Hello Ji')

      const logoutConfirmed = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const logoutConfirmation = close => (
        <ModalContainer isDarkTheme={isDarkTheme}>
          <ModalDesc>Are you sure, you want to logout?</ModalDesc>
          <ButtonsContainer>
            <CancelBtn type="button" onClick={close}>
              Cancel
            </CancelBtn>
            <ConfirmBtn type="button" onClick={logoutConfirmed}>
              Confirm
            </ConfirmBtn>
          </ButtonsContainer>
        </ModalContainer>
      )

      const renderPopUp = triggerBtn => (
        <StyledPopup modal trigger={triggerBtn} isDarkTheme={isDarkTheme}>
          {close => logoutConfirmation(close)}
        </StyledPopup>
      )

      const renderMobileNavItemsContainer = () => (
        <MobileNavItemsContainer>
          <NavItem>
            <NavIconBtn type="button" onClick={toggleTheme} data-testid="theme">
              {isDarkTheme ? (
                <BiSun color="#ffffff" size={30} />
              ) : (
                <BsMoon size={30} />
              )}
            </NavIconBtn>
          </NavItem>
          <NavItem>
            <NavIconBtn type="button" isDarkTheme={isDarkTheme}>
              <GiHamburgerMenu size={30} />
            </NavIconBtn>
          </NavItem>
          <NavItem>
            {renderPopUp(
              <NavIconBtn type="button" isDarkTheme={isDarkTheme}>
                <FiLogOut size={30} />
              </NavIconBtn>,
            )}
          </NavItem>
        </MobileNavItemsContainer>
      )

      const renderDesktopNavItemsContainer = () => (
        <DesktopNavItemsContainer>
          <NavItem>
            <NavIconBtn
              type="button"
              onClick={toggleTheme}
              data-testid="theme"
              ThemeBtn
            >
              {isDarkTheme ? (
                <BiSun color="#ffffff" size={35} />
              ) : (
                <BsMoon size={35} />
              )}
            </NavIconBtn>
          </NavItem>
          <NavItem>
            <NavIconBtn type="button">
              <Profile
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </NavIconBtn>
          </NavItem>
          <NavItem>
            {renderPopUp(
              <LogoutBtn type="button" isDarkTheme={isDarkTheme}>
                Logout
              </LogoutBtn>,
            )}
          </NavItem>
        </DesktopNavItemsContainer>
      )

      return (
        <Navbar isDarkTheme={isDarkTheme}>
          <NavContent>
            <Link to="/">
              <NavWebsiteLogo
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            {renderMobileNavItemsContainer()}
            {renderDesktopNavItemsContainer()}
          </NavContent>
        </Navbar>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
