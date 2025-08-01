import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoItemCard,
  ThumbnailImage,
  VideoItemDetails,
  VideoTitle,
  VideoStats,
  CustomLink,
} from './styledComponents'

const GamingVideoItemCard = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <VideoItemCard isDarkTheme={isDarkTheme}>
            <CustomLink to={`/videos/${id}`}>
              <ThumbnailImage
                src={thumbnailUrl}
                alt="video thumbnail"
                loading="lazy"
              />
              <VideoItemDetails>
                <VideoTitle isDarkTheme={isDarkTheme} data-testid="videoTitle">
                  {title}
                </VideoTitle>
                <VideoStats isDarkTheme={isDarkTheme}>{viewCount}</VideoStats>
              </VideoItemDetails>
            </CustomLink>
          </VideoItemCard>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingVideoItemCard
