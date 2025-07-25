import {Component} from 'react'
import Cookies from 'js-cookie'
// import {Redirect, Link} from 'react-router-dom'

import {MdClose} from 'react-icons/md'
import {BiSearchAlt2} from 'react-icons/bi'

import Header from '../Header'
import NavigationSidebar from '../NavigationSidebar'
import HomeVideoItemCard from '../HomeVideoItemCard'
import LoaderView from '../Loader'
import FailureView from '../FailureView'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HomeContainer,
  HomeContent,
  HomeVideosContent,
  VideosContainer,
  PremiumBanner,
  BannerLogoContainer,
  WebsiteLogo,
  CloseBtn,
  PremiumBannerDesc,
  GetItNowBtn,
  SearchBarContainer,
  SearchInput,
  SearchBtn,
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

class Home extends Component {
  state = {
    apiStatus: apiUrlStatus.initial,
    searchInput: '',
    videosList: [],
  }

  componentDidMount() {
    this.fetchVideos()
  }

  fetchVideos = async () => {
    this.setState({
      apiStatus: apiUrlStatus.fetching,
    })
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)
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

  renderPremiumBanner = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {removeBanner} = value
        const onRemoveBanner = () => removeBanner()
        return (
          <PremiumBanner data-testid="banner">
            <BannerLogoContainer>
              <WebsiteLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
              <CloseBtn
                type="button"
                data-testid="close"
                onClick={onRemoveBanner}
              >
                <MdClose />
              </CloseBtn>
            </BannerLogoContainer>
            <PremiumBannerDesc>
              Buy Nxt Watch Premium prepaid plans with UPI
            </PremiumBannerDesc>
            <GetItNowBtn>GET IT NOW</GetItNowBtn>
          </PremiumBanner>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  renderSearchBar = () => {
    const {searchInput} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <SearchBarContainer>
              <SearchInput
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
                isDarkTheme={isDarkTheme}
                onKeyDown={e => {
                  if (e.key === 'Enter') this.fetchVideos()
                }}
              />
              <SearchBtn
                type="button"
                data-testid="searchButton"
                onClick={this.fetchVideos}
                isDarkTheme={isDarkTheme}
              >
                <BiSearchAlt2 />
              </SearchBtn>
            </SearchBarContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  retry = () => {
    this.fetchVideos()
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

  renderAllVideos = () => {
    const {videosList} = this.state

    return (
      <VideosList>
        {videosList.map(eachVideo => (
          <HomeVideoItemCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </VideosList>
    )
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <>
        {videosList.length > 0
          ? this.renderAllVideos()
          : this.renderNoVideosView()}
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
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme, showAdBanner} = value
          return (
            <HomeContainer isDarkTheme={isDarkTheme} data-testid="home">
              <Header />
              <HomeContent>
                <NavigationSidebar />
                <HomeVideosContent>
                  {showAdBanner && this.renderPremiumBanner()}
                  <VideosContainer isDarkTheme={isDarkTheme}>
                    {this.renderSearchBar()}
                    {this.renderVideos()}
                  </VideosContainer>
                </HomeVideosContent>
              </HomeContent>
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
