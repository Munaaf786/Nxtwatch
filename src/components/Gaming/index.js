import {Component} from 'react'
import Cookies from 'js-cookie'

import {IoGameController} from 'react-icons/io5'

import Header from '../Header'
import NavigationSidebar from '../NavigationSidebar'
import GamingVideoItemCard from '../GamingVideoItemCard'
import LoaderView from '../Loader'
import FailureView from '../FailureView'
import RouteHeaderTab from '../RouteHeaderTab'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  GamingContainer,
  GamingContent,
  GamingVideosContent,
  VideosList,
  NoVideosContainer,
  NoVideosImg,
  NoVideosHeading,
  NoVideosDesc,
  NoVideosBtn,
} from './styledComponents'

const apiUrlStatus = {
  initial: 'INITIAL',
  fetching: 'FETCHING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    apiStatus: apiUrlStatus.initial,
    videosList: [],
  }

  componentDidMount() {
    this.fetchGamingVideos()
  }

  fetchGamingVideos = async () => {
    this.setState({
      apiStatus: apiUrlStatus.fetching,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const {videos} = fetchedData
      const formattedVideos = videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        videosList: formattedVideos,
        apiStatus: apiUrlStatus.success,
      })
    } else {
      this.setState({
        apiStatus: apiUrlStatus.failure,
      })
    }
  }

  retry = () => {
    this.fetchGamingVideos()
  }

  renderNoVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <NoVideosContainer>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading isDarkTheme={isDarkTheme}>
              No Search results found
            </NoVideosHeading>
            <NoVideosDesc isDarkTheme={isDarkTheme}>
              Try different key words or remove search filter
            </NoVideosDesc>
            <NoVideosBtn type="button" onClick={this.retry}>
              Retry
            </NoVideosBtn>
          </NoVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFetchingView = () => <LoaderView />

  renderFailureView = () => <FailureView reload={this.retry} />

  renderGamingVideos = () => {
    const {videosList} = this.state

    return (
      <>
        {videosList.length > 0 ? (
          <VideosList>
            {videosList.map(eachVideo => (
              <GamingVideoItemCard
                key={eachVideo.id}
                videoDetails={eachVideo}
              />
            ))}
          </VideosList>
        ) : (
          this.renderNoVideosView()
        )}
      </>
    )
  }

  renderVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiUrlStatus.fetching:
        return this.renderFetchingView()
      case apiUrlStatus.failure:
        return this.renderFailureView()
      case apiUrlStatus.success:
        return (
          <>
            <RouteHeaderTab icon={IoGameController} headerText="Gaming" />
            {this.renderGamingVideos()}
          </>
        )
      default:
        return null
    }
  }

  renderGamingPageContainer = () => (
    <GamingVideosContent>{this.renderVideos()}</GamingVideosContent>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <GamingContainer isDarkTheme={isDarkTheme} data-testid="gaming">
              <Header />
              <GamingContent isDarkTheme={isDarkTheme}>
                <NavigationSidebar />
                {this.renderGamingPageContainer()}
              </GamingContent>
            </GamingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
