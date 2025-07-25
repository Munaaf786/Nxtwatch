import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const CustomLink = styled(Link)`
  text-decoration: none;
`

export const VideoItemCard = styled.li`
  list-style-type: none;
  width: 96%;
  max-width: 320px;
  margin: 0 18px 18px 0;
  background-color: transparent;
  border-radius: 10px;

  @media (min-width: 576px) {
    width: 280px;
  }
  @media (min-width: 992px) {
    width: 320px;
  }
`

export const ThumbnailImage = styled.img`
  height: 180px;
  width: 100%;
  border-radius: 10px;
  transition: all 0.3s ease-in;
  :hover {
    border-radius: 0;
  }

  @media (min-width: 576px) {
    height: 164px;
  }
  @media (min-width: 767px) {
    height: 180px;
  }
`

export const VideoItemDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ChannelLogo = styled.img`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  margin: 10px 12px 0 0;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  transition: color 0.3s ease-in;
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
  font-size: 14px;
  margin: 0;
  transition: color 0.3s ease-in;
`

export const VideoStatsContainer = styled.div`
  width: 90%;
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
  font-size: 32px;
  line-height: 0.25;
  margin: 0 6px 22px 6px;
`
