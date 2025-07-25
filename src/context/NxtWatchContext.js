import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideos: [],
  addVideo: () => {},
  activeTab: 'Home',
  changeTab: () => {},
  showAdBanner: true,
  removeBanner: () => {},
})

export default NxtWatchContext
