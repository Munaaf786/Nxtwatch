import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const CustomLink = styled(Link)`
  width: 100%;
  max-height: 320px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`

export const VideoItemCard = styled.li`
  list-style-type: none;
  width: 96%;
  margin: 0 18px 20px 0;
  background-color: Transparent;
  border-radius: 10px;
  height: 100%;
  display: flex;
  flex-direction: row;
`

export const ThumbnailImage = styled.img`
  height: 240px;
  width: 100%;
  border-radius: 10px;
  transition: all 0.3s ease-in;

  @media (min-width: 576px) {
    width: 56%;
    max-width: 360px;
    height: 200px;
  }
`

export const VideoItemDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`

export const ChannelLogo = styled.img`
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  margin: 10px 12px 0 10px;

  @media (min-width: 576px) {
    display: none;
  }
`

export const ChannelInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;

  @media (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const VideoDetailsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  transition: color 0.3s ease-in;
  padding-left: 8px;

  @media (min-width: 576px) {
    padding-left: 16px;
  }
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin: 8px 0;
  margin-right: 8px;
`

export const ChannelName = styled.p`
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  margin: 0;
  transition: color 0.3s ease-in;

  @media (min-width: 576px) {
    margin-bottom: 8px;
  }
`

export const VideoStatsContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
  transition: color 0.3s ease-in;
`

export const VideoStats = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin: 0;
`

export const DotSpan = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  line-height: 0.25;
  margin: 0 6px 18px 6px;

  @media (min-width: 576px) {
    display: ${props => (props.forMobileView ? 'none' : 'block')};
  }
`
