import styled, {keyframes} from 'styled-components'

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`

export const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  padding: 16px 8px;
  animation: ${slideIn} 0.5s forwards;
  transition: all 0.3s ease-in-out;

  &.slide-out {
    animation: ${slideOut} 0.5s forwards;
  }

  @media (min-width: 767px) {
    display: none;
  }
`

export const CloseBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const CloseBtn = styled.button`
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  transition: all 0.3s ease-in-out;
  border: none;
  cursor: pointer;
`
