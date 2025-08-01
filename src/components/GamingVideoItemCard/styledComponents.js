import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoItemCard = styled.li`
  list-style-type: none;
  margin: 0 8px 16px 8px;
  background-color: transparent;
  border-radius: 10px;
  width: 45%;

  @media screen and (max-width: 330px) {
    width: 90%;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    width: 30%;
  }

  @media screen and (min-width: 901px) and (max-width: 1100px) {
    width: 28%;
  }

  @media screen and (min-width: 1100px) {
    width: 18%;
  }
`

export const CustomLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  color: inherit;
`

export const ThumbnailImage = styled.img`
  width: 100%;
  border-radius: 10px;
`

export const VideoItemDetails = styled.div`
  padding: 4px;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  margin: 8px 0;
  margin-right: 8px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  transition: color 0.3s ease-in;
`
// &::after {
//   content: ' ${props => props.viewCount}';
//   font-size: 14px;
//   color: #64748b;
// }

export const VideoStats = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin: 0;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
  transition: color 0.3s ease-in;
`
