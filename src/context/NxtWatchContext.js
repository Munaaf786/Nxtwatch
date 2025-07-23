import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'Home',
  changeTab: () => {},
  toggleTheme: () => {},
  addVideo: () => {},
})

export default NxtWatchContext
