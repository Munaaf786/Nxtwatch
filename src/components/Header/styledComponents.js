import styled from 'styled-components'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

export const Navbar = styled.nav`
    width: 100vw;
    height: 10vh;
    background-color: ${props => (props.isDarkTheme ? '#231f20' : '#f1f5f9')};
    color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`

export const NavContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 6px 24px;
`

export const NavWebsiteLogo = styled.img`
    height: 60%;
    width: 180px;
    text-decoration: none;
`

export const MobileNavItemsContainer = styled.ul`
    display: flex;
    align-items: center;
    padding-left: 0;
    list-style-tyle: none;
    @media (min-width: 767px){
        display: none;
    }
`

export const NavItem = styled.li`
    list-style-type: none;
    margin-left: 12px;
    height: 100%;
    @media (min-width: 767px){
        margin-left: 16px;
    }
`

export const NavIconBtn = styled.button`
    background-color: transparent;
    color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
    border: none;
    cursor: pointer;
    outline: none;
    height: 40px;
    width: 40px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`

export const DesktopNavItemsContainer = styled.ul`
    display: none;
    padding-left: 0;
    list-style-tyle: none;
    @media (min-width: 767px){
        display: flex;
        align-items: center;
    }
`

export const Profile = styled.img`
    height: 40px;
`

export const LogoutBtn = styled.button`
    font-family: 'Roboto';
    font-size: 12px;
    font-weight: 400;
    background-color: transparent;
    color: ${props => (props.isDarkTheme ? '#f8fafc' : '#3b82f6')};
    border: 1px solid ${props => (props.isDarkTheme ? '#f8fafc' : '#3b82f6')};
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    height: 36px;
    width: 72px
`

export const StyledPopup = styled(Popup)`
    &-overlay {
        width: 100%,
        height: 100%,
        display: flex,
        flex-direction: column,
        justify-content: center,
        align-items: center,
        background-color: #00000050,
    }
    &-content {
        padding: 20px;
        height: 200px;
        width: 440px;
        background-color: ${props =>
          props.isDarkTheme ? '#231f20' : '#ffffff'};
        color: ${props => (props.isDarkTheme ? '#e2e8f0' : '#00306e')};
        border: none;
        border-radius: 10px;
    }
`

export const ModalContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-family: 'Roboto';
    padding: 0;
`

export const ModalDesc = styled.p`
    font-size: 18px;
    font-weight: 500;
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
`

export const ModalButton = styled.button`
    height: 54px;
    width: 144px;
    border-radius: 4px;
    text-align: center;
    background-color: transparent;
    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
`

export const CancelBtn = styled(ModalButton)`
    border: 1px solid #94a3b8;
    color: #94a3b8;
`

export const ConfirmBtn = styled(ModalButton)`
    border: none;
    background-color: #3b82f6;
    color: #ffffff;
`
