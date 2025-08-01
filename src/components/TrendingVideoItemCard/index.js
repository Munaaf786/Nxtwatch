import {formatDistanceToNowStrict} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoItemCard,
  ThumbnailImage,
  VideoItemDetails,
  ChannelLogo,
  VideoDetailsContainer,
  ChannelInfo,
  VideoTitle,
  VideoStatsContainer,
  ChannelName,
  VideoStats,
  DotSpan,
  CustomLink,
} from './styledComponents'

const TrendingVideoItemCard = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    publishedAt,
    viewCount,
  } = videoDetails
  const formattedChannelData = {
    channelName: channel.name,
    profileImageUrl: channel.profile_image_url,
  }

  const formattedPublishedDate = formatDistanceToNowStrict(
    new Date(publishedAt),
    {addSuffix: true},
  )

  const linkItem = {
    'text-decoration': 'none',
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <VideoItemCard isDarkTheme={isDarkTheme}>
            <CustomLink to={`/videos/${id}`} className={linkItem}>
              <ThumbnailImage
                src={thumbnailUrl}
                alt="video thumbnail"
                loading="lazy"
              />
              <VideoItemDetails>
                <ChannelLogo
                  src={formattedChannelData.profileImageUrl}
                  alt="channel logo"
                />
                <VideoDetailsContainer isDarkTheme={isDarkTheme}>
                  <VideoTitle>{title}</VideoTitle>
                  <ChannelInfo>
                    <ChannelName isDarkTheme={isDarkTheme}>
                      {formattedChannelData.channelName}
                    </ChannelName>
                    <VideoStatsContainer isDarkTheme={isDarkTheme}>
                      <DotSpan forMobileView>.</DotSpan>
                      <VideoStats>{viewCount} views</VideoStats>
                      <DotSpan>.</DotSpan>
                      <VideoStats>{formattedPublishedDate}</VideoStats>
                    </VideoStatsContainer>
                  </ChannelInfo>
                </VideoDetailsContainer>
              </VideoItemDetails>
            </CustomLink>
          </VideoItemCard>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideoItemCard
