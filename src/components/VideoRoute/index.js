import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNowStrict} from 'date-fns'

import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import Header from '../Header'
import NavigationSidebar from '../NavigationSidebar'
import LoaderView from '../Loader'
import FailureView from '../FailureView'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoDetailsContainer,
  VideoDetailsRouteContent,
  VideoItemDetails,
  VideoPlayer,
  VideoItemDataContainer,
  VideoStatsAndActionBtnsContainer,
  VideoTitle,
  VideoStatsContainer,
  VideoStats,
  DotSpan,
  InteractionBtnsContainer,
  InteractionBtn,
  InteractionLabel,
  Seperator,
  ChannelAndDescContainer,
  ChannelImageAndNameContainer,
  ChannelLogo,
  ChannelNameContainer,
  ChannelName,
  SubscriberCount,
  Description,
} from './styledComponents'

const apiUrlStatus = {
  initial: 'INITIAL',
  fetching: 'FETCHING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoRoute extends Component {
  state = {
    apiStatus: apiUrlStatus.initial,
    videoDetails: {},
  }

  componentDidMount() {
    this.fetchVideoDetails()
  }

  retry = () => {
    this.fetchVideoDetails()
  }

  getFormattedVideoDetails = details => ({
    id: details.id,
    title: details.title,
    videoUrl: details.video_url,
    thumbnailUrl: details.thumbnail_url,
    viewCount: details.view_count,
    publishedAt: details.published_at,
    description: details.description,
  })

  fetchVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({
      apiStatus: apiUrlStatus.fetching,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const videoDetails = fetchedData.video_details
      const {channel} = videoDetails
      const formattedVideoDetails = this.getFormattedVideoDetails(videoDetails)
      const formattedChannel = {
        name: channel.name,
        profileImageUrl: channel.profile_image_url,
        subscriberCount: channel.subscriber_count,
      }
      const newVideoDetails = {formattedChannel, ...formattedVideoDetails}
      this.setState({
        videoDetails: newVideoDetails,
        apiStatus: apiUrlStatus.success,
      })
    } else {
      this.setState({
        apiStatus: apiUrlStatus.failure,
      })
    }
  }

  renderVideoDetails = () => {
    const {videoDetails} = this.state
    const {title, viewCount, publishedAt} = videoDetails

    const formattedPublishedDate = formatDistanceToNowStrict(
      new Date(publishedAt),
      {addSuffix: true},
    )

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {
            isDarkTheme,
            addVideo,
            isVideoSaved,
            isVideoLiked,
            isVideoDisliked,
            addVideoReaction,
          } = value

          const isLiked = isVideoLiked(videoDetails)
          const isDisliked = isVideoDisliked(videoDetails)
          const isSaved = isVideoSaved(videoDetails)

          const onClickSaveBtn = () => {
            addVideo(videoDetails)
          }

          const onClickLikeBtn = () => {
            addVideoReaction(videoDetails, 'LIKE')
          }

          const onClickDislikeBtn = () => {
            addVideoReaction(videoDetails, 'DISLIKE')
          }

          return (
            <>
              <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
              <VideoStatsAndActionBtnsContainer>
                <VideoStatsContainer isDarkTheme={isDarkTheme}>
                  <VideoStats>{viewCount} views</VideoStats>
                  <DotSpan>.</DotSpan>
                  <VideoStats>{formattedPublishedDate}</VideoStats>
                </VideoStatsContainer>
                <InteractionBtnsContainer>
                  <InteractionBtn
                    isDarkTheme={isDarkTheme}
                    isActive={isLiked}
                    onClick={onClickLikeBtn}
                  >
                    <BiLike />
                    <InteractionLabel
                      isActive={isLiked}
                      isDarkTheme={isDarkTheme}
                    >
                      Like
                    </InteractionLabel>
                  </InteractionBtn>
                  <InteractionBtn
                    isDarkTheme={isDarkTheme}
                    isActive={isDisliked}
                    onClick={onClickDislikeBtn}
                  >
                    <BiDislike />
                    <InteractionLabel
                      isActive={isDisliked}
                      isDarkTheme={isDarkTheme}
                    >
                      Dislike
                    </InteractionLabel>
                  </InteractionBtn>
                  <InteractionBtn
                    isDarkTheme={isDarkTheme}
                    isActive={isSaved}
                    onClick={onClickSaveBtn}
                  >
                    <MdPlaylistAdd />
                    <InteractionLabel
                      isActive={isSaved}
                      isDarkTheme={isDarkTheme}
                    >
                      {isSaved ? 'Saved' : 'Save'}
                    </InteractionLabel>
                  </InteractionBtn>
                </InteractionBtnsContainer>
              </VideoStatsAndActionBtnsContainer>
              <Seperator isDarkTheme={isDarkTheme} />
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderChannelInfo = () => {
    const {videoDetails} = this.state
    const {formattedChannel, description} = videoDetails
    const {name, profileImageUrl, subscriberCount} = formattedChannel

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <ChannelAndDescContainer>
              <ChannelImageAndNameContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <ChannelNameContainer>
                  <ChannelName isDarkTheme={isDarkTheme}>{name}</ChannelName>
                  <SubscriberCount isDarkTheme={isDarkTheme}>
                    {subscriberCount} Subscribers
                  </SubscriberCount>
                  <Description isDarkTheme={isDarkTheme}>
                    {description}
                  </Description>
                </ChannelNameContainer>
              </ChannelImageAndNameContainer>
              <Description forMobileView isDarkTheme={isDarkTheme}>
                {description}
              </Description>
            </ChannelAndDescContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderVideosItemDetails = () => {
    const {videoDetails} = this.state
    const {videoUrl} = videoDetails

    return (
      <VideoItemDetails>
        <VideoPlayer>
          <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
        </VideoPlayer>
        <VideoItemDataContainer>
          {this.renderVideoDetails()}
          {this.renderChannelInfo()}
        </VideoItemDataContainer>
      </VideoItemDetails>
    )
  }

  renderFetchingView = () => <LoaderView />

  renderFailureView = () => <FailureView reload={this.retry} />

  renderVideoDetailsView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiUrlStatus.initial:
      case apiUrlStatus.fetching:
        return this.renderFetchingView()
      case apiUrlStatus.failure:
        return this.renderFailureView()
      case apiUrlStatus.success:
        return this.renderVideosItemDetails()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <VideoDetailsContainer
              isDarkTheme={isDarkTheme}
              data-testid="videoItemDetails"
            >
              <Header />
              <VideoDetailsRouteContent isDarkTheme={isDarkTheme}>
                <NavigationSidebar />
                {this.renderVideoDetailsView()}
              </VideoDetailsRouteContent>
            </VideoDetailsContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoRoute
