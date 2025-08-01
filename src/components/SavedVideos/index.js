import {MdPlaylistAdd} from 'react-icons/md'

import Header from '../Header'
import NavigationSidebar from '../NavigationSidebar'
import SavedVideoItemCard from '../SavedVideoItemCard'
import RouteHeaderTab from '../RouteHeaderTab'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SavedVideosContainer,
  SavedVideosContent,
  SavedVideosPageContent,
  VideosList,
  NoVideosContainer,
  NoVideosImg,
  NoVideosHeading,
  NoVideosDesc,
} from './styledComponents'

const SavedVideos = () => {
  const renderNoVideosView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <NoVideosContainer>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoVideosHeading isDarkTheme={isDarkTheme}>
              No saved videos found
            </NoVideosHeading>
            <NoVideosDesc isDarkTheme={isDarkTheme}>
              You can save your videos while watching them
            </NoVideosDesc>
          </NoVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  const renderSavedVideos = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {savedVideos} = value
        return (
          <VideosList>
            {savedVideos.map(eachVideo => (
              <SavedVideoItemCard key={eachVideo.id} videoDetails={eachVideo} />
            ))}
          </VideosList>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  const renderVideos = () => (
    <SavedVideosPageContent>
      <RouteHeaderTab icon={MdPlaylistAdd} headerText="Saved Videos" />
      {renderSavedVideos()}
    </SavedVideosPageContent>
  )

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {savedVideos, isDarkTheme} = value
        return (
          <SavedVideosContainer
            isDarkTheme={isDarkTheme}
            data-testid="savedVideos"
          >
            <Header />
            <SavedVideosContent isDarkTheme={isDarkTheme}>
              <NavigationSidebar />
              {savedVideos.length > 0 ? renderVideos() : renderNoVideosView()}
            </SavedVideosContent>
          </SavedVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SavedVideos
