import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {IoGameController} from 'react-icons/io5'
import {MdPlaylistAdd} from 'react-icons/md'

import {NavigationMenu, MenuTab, CustomLink, TabName} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const NavigationTabs = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, changeTab} = value

      const isActivePath = path => document.location.pathname === path

      const navMenuContent = [
        {
          id: 'home',
          path: '/',
          content: 'Home',
          icon: (
            <AiFillHome
              size={24}
              color={isActivePath('/') ? '#de1414' : '#737070'}
            />
          ),
        },
        {
          id: 'trending',
          path: '/trending',
          content: 'Trending',
          icon: (
            <HiFire
              size={24}
              color={isActivePath('/trending') ? '#de1414' : '#737070'}
            />
          ),
        },
        {
          id: 'gaming',
          path: '/gaming',
          content: 'Gaming',
          icon: (
            <IoGameController
              size={24}
              color={isActivePath('/gaming') ? '#de1414' : '#737070'}
            />
          ),
        },
        {
          id: 'saved-videos',
          path: '/saved-videos',
          content: 'Saved Videos',
          icon: (
            <MdPlaylistAdd
              size={24}
              color={isActivePath('/saved-videos') ? '#de1414' : '#737070'}
            />
          ),
        },
      ]

      return (
        <NavigationMenu>
          {navMenuContent.map(eachTab => (
            <MenuTab
              key={eachTab.id}
              isActiveTab={isActivePath(eachTab.path)}
              isDarkTheme={isDarkTheme}
              onClick={() => changeTab(eachTab.id)}
            >
              <CustomLink to={eachTab.path}>
                {eachTab.icon}
                <TabName
                  isDarkTheme={isDarkTheme}
                  isActiveTab={isActivePath(eachTab.path)}
                >
                  {eachTab.content}
                </TabName>
              </CustomLink>
            </MenuTab>
          ))}
        </NavigationMenu>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NavigationTabs
