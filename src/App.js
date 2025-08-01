import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'

import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import LoginRoute from './components/LoginRoute'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoRoute from './components/VideoRoute'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    showAdBanner: true,
    activeTab: 'home',
    savedVideos: [],
    likedVideos: [],
    dislikedVideos: [],
  }

  componentDidMount() {
    const allPaths = {
      '/': 'home',
      '/trending': 'trending',
      '/gaming': 'gaming',
      '/saved-videos': 'saved-videos',
    }

    const tabId = allPaths[document.location.pathname] || 'home'

    const savedVideos = JSON.parse(localStorage.getItem('savedVideos')) || []
    const likedVideos = JSON.parse(localStorage.getItem('likedVideos')) || []
    const dislikedVideos =
      JSON.parse(localStorage.getItem('dislikedVideos')) || []

    this.setState({activeTab: tabId, savedVideos, likedVideos, dislikedVideos})
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  changeTab = activeTab => {
    this.setState({activeTab})
  }

  removeBanner = () => {
    this.setState({showAdBanner: false})
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = this.getVideoIndex(video, savedVideos)
    if (index === -1) {
      const updated = [...savedVideos, video]
      this.setState({savedVideos: updated}, () => {
        localStorage.setItem('savedVideos', JSON.stringify(updated))
      })
    } else {
      savedVideos.splice(index, 1)
      const updated = [...savedVideos]
      this.setState({savedVideos: updated}, () => {
        localStorage.setItem('savedVideos', JSON.stringify(updated))
      })
    }
  }

  getVideoIndex = (video, list) => {
    const {id} = video
    const index = list.findIndex(eachVideo => eachVideo.id === id)
    return index
  }

  checkForVideoPresence = (video, list) => {
    const index = this.getVideoIndex(video, list)
    if (index !== -1) {
      return true
    }
    return false
  }

  isVideoLiked = video => {
    const {likedVideos} = this.state
    return this.checkForVideoPresence(video, likedVideos)
  }

  isVideoDisliked = video => {
    const {dislikedVideos} = this.state
    return this.checkForVideoPresence(video, dislikedVideos)
  }

  isVideoSaved = video => {
    const {savedVideos} = this.state
    return this.checkForVideoPresence(video, savedVideos)
  }

  removeVideoFromList = (video, list) => {
    const index = this.getVideoIndex(video, list)
    if (index !== -1) {
      list.splice(index, 1)
    }
  }

  addVideoReaction = (video, reaction) => {
    this.setState(prevState => {
      const isLiked = this.isVideoLiked(video)
      const isDisliked = this.isVideoDisliked(video)

      let updatedLikes = [...prevState.likedVideos]
      let updatedDislikes = [...prevState.dislikedVideos]

      if (reaction === 'LIKE') {
        if (isDisliked) {
          updatedDislikes = updatedDislikes.filter(
            eachVideo => eachVideo.id !== video.id,
          )
        }
        if (!isLiked) {
          updatedLikes.push(video)
        }
      }

      if (reaction === 'DISLIKE') {
        if (isLiked) {
          updatedLikes = updatedLikes.filter(
            eachVideo => eachVideo.id !== video.id,
          )
        }
        if (!isDisliked) {
          updatedDislikes.push(video)
        }
      }

      localStorage.setItem('likedVideos', JSON.stringify(updatedLikes))
      localStorage.setItem('dislikedVideos', JSON.stringify(updatedDislikes))

      return {
        likedVideos: updatedLikes,
        dislikedVideos: updatedDislikes,
      }
    })
  }

  render() {
    const {activeTab, isDarkTheme, savedVideos, showAdBanner} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          activeTab,
          isDarkTheme,
          savedVideos,
          showAdBanner,
          changeTab: this.changeTab,
          toggleTheme: this.toggleTheme,
          addVideo: this.addVideo,
          removeBanner: this.removeBanner,
          isVideoSaved: this.isVideoSaved,
          isVideoLiked: this.isVideoLiked,
          isVideoDisliked: this.isVideoDisliked,
          addVideoReaction: this.addVideoReaction,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={VideoRoute} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
