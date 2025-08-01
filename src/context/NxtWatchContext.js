import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},

  savedVideos: [],
  addVideo: () => {},

  activeTab: 'home',
  changeTab: () => {},

  showAdBanner: true,
  removeBanner: () => {},

  likedVideos: [],
  isVideoLiked: () => {},

  dislikedVideos: [],
  isVideoDisliked: () => {},

  isVideoSaved: () => {},
  addVideoReaction: () => {},
})

export default NxtWatchContext
