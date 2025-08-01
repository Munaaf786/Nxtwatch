import {Component} from 'react'
import {MdClose} from 'react-icons/md'

import NavigationTabs from '../NavigationTabs'

import {
  MobileMenuContainer,
  CloseBtnContainer,
  CloseBtn,
} from './styledComponents'

class MobileNavigationMenu extends Component {
  state = {
    isClosing: false,
  }

  handleClose = () => {
    this.setState({isClosing: true})
    setTimeout(() => {
      const {onClose} = this.props
      onClose()
    }, 400)
  }

  render() {
    const {isDarkTheme} = this.props
    const {isClosing} = this.state

    return (
      <MobileMenuContainer
        isDarkTheme={isDarkTheme}
        className={isClosing ? 'slide-out' : ''}
      >
        <CloseBtnContainer>
          <CloseBtn
            type="button"
            onClick={this.handleClose}
            isDarkTheme={isDarkTheme}
          >
            <MdClose size={24} />
          </CloseBtn>
        </CloseBtnContainer>
        <NavigationTabs />
      </MobileMenuContainer>
    )
  }
}

export default MobileNavigationMenu
