import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'

import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import LoginRoute from './components/LoginRoute'
// import TrendingRoute from './components/TrendingRoute'
// import GamingRoute from './components/GamingRoute'
// import SavedVideosRoute from './components/SavedVideosRoute'
// import NotFound from './components/NotFound'

//           <ProtectedRoute exact path="/trending" component={TrendingRoute} />
//           <ProtectedRoute exact path="/gaming" component={GamingRoute} />
//           <ProtectedRoute
//             exact
//             path="/saved-videos"
//             component={SavedVideosRoute}
//           />
//           <Route path="/not-found" component={NotFound} />
//           <Redirect to="/not-found" />

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideos: [],
    activeTab: 'Home',
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  changeTab = activeTab => {
    this.setState({activeTab})
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({
        savedVideos: [...savedVideos, video],
      })
    } else {
      savedVideos.splice(index, 1)
      this.setState({
        savedVideos,
      })
    }
  }

  render() {
    const {activeTab, isDarkTheme, savedVideos} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          activeTab,
          isDarkTheme,
          savedVideos,
          changeTab: this.changeTab,
          toggleTheme: this.toggleTheme,
          addVideo: this.addVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
