import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  transition: background-color 0.3s ease-in;
`

export const VideoDetailsRouteContent = styled.div`
  display: flex;
  height: calc(100vh - 64px);
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  transition: background-color 0.3s ease-in;
`

export const VideoItemDetails = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  flex-grow: 1;
  @media (min-width: 768px) {
    width: 80%;
  }
  padding: 20px;
`

export const VideoPlayer = styled.div`
  width: 100%;
  max-width: 1024px;
  aspect-ratio: 16 / 9;
  margin-bottom: 8px;
`

export const VideoItemDataContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  transition: color 0.3s ease-in;
  margin: 12px 0;

  @media (min-width: 767px) {
    font-size: 20px;
  }
`

export const VideoStatsAndActionBtnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 1024px;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
  font-size: 14px;
  margin: 0;

  @media (min-width: 767px) {
    font-size: 16px;
  }
`

export const DotSpan = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  line-height: 0.25;
  margin: 0 6px 18px 6px;
`

export const InteractionBtnsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const InteractionBtn = styled.button`
  max-width: 100px;
  height: 44px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: ${props => (props.isActive ? '500' : '400')};
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 12px;
  padding: 0;
  color: ${props => {
    if (props.isActive === true) {
      return '#2563eb'
    }
    return props.isDarkTheme ? '#94a3b8' : '#64748b' //  props.isDarkTheme ? '#94a3b8' :
  }};
  transition: color 0.3s ease-in;

  @media (min-width: 767px) {
    font-size: 18px;
  }
`

export const InteractionLabel = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  margin-left: 6px;
  @media (min-width: 767px) {
    font-size: 16px;
  }
  color: ${props => {
    if (props.isActive === true) {
      return '#2563eb'
    }
    return props.isDarkTheme ? '#94a3b8' : '#64748b' //  props.isDarkTheme ? '#94a3b8' :
  }};
`

export const Seperator = styled.hr`
  width: 100%;
  border-top: 1px solid ${props => (props.isDarkTheme ? '#909090' : '#94a3b8')};
  transition: all 0.3s ease-in;
  margin: 16px 0;

  @media (min-width: 767px) {
    margin: 24px 0;
  }
`

export const ChannelAndDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
`

export const ChannelImageAndNameContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
`

export const ChannelLogo = styled.img`
  height: 44px;
  width: 44px;
  border: none;
  border-radius: 50%;
  margin-right: 24px;
`
export const ChannelNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  color: ${props => (props.isDarkTheme ? '#f4f4f4' : '#0f0f0f')};
  transition: color 0.3s ease-in;
`

export const SubscriberCount = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin: 12px 0;
  color: ${props => (props.isDarkTheme ? '#94a3b8' : '#64748b')};
  transition: color 0.3s ease-in;
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 8px;
  color: ${props => (props.isDarkTheme ? '#f4f4f4' : '#616e7c')};
  transition: color 0.3s ease-in;

  display: ${props => (props.forMobileView ? 'block' : 'none')};

  @media (min-width: 767px) {
    display: ${props => (props.forMobileView ? 'none' : 'block')};
  }
`
