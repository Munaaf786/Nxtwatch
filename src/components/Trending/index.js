import {Component} from 'react'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import NavigationSidebar from '../NavigationSidebar'
import TrendingVideoItemCard from '../TrendingVideoItemCard'
import LoaderView from '../Loader'
import FailureView from '../FailureView'
import RouteHeaderTab from '../RouteHeaderTab'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  TrendingContainer,
  TrendingContent,
  TrendingVideosContent,
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

class Trending extends Component {
  state = {
    apiStatus: apiUrlStatus.initial,
    videosList: [],
  }

  componentDidMount() {
    this.fetchTrendingVideos()
  }

  fetchTrendingVideos = async () => {
    this.setState({
      apiStatus: apiUrlStatus.fetching,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        channel: eachVideo.channel,
        publishedAt: eachVideo.published_at,
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
    this.fetchTrendingVideos()
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

  renderTrendingVideos = () => {
    const {videosList} = this.state

    return (
      <>
        {videosList.length > 0 ? (
          <VideosList>
            {videosList.map(eachVideo => (
              <TrendingVideoItemCard
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
            <RouteHeaderTab icon={HiFire} headerText="Trending" />
            {this.renderTrendingVideos()}
          </>
        )
      default:
        return null
    }
  }

  renderTrendingPageContainer = () => (
    <TrendingVideosContent>{this.renderVideos()}</TrendingVideosContent>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <TrendingContainer isDarkTheme={isDarkTheme} data-testid="trending">
              <Header />
              <TrendingContent isDarkTheme={isDarkTheme}>
                <NavigationSidebar />
                {this.renderTrendingPageContainer()}
              </TrendingContent>
            </TrendingContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
