import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: ${props =>
    props.isDarkTheme === true ? '#212121' : '#ffffff'};
  color: ${props => (props.isDarkTheme === true ? '#ffffff' : '#64748b')};
  font-family: 'Roboto';
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const FormContainer = styled.form`
  background-color: ${props =>
    props.isDarkTheme === true ? '#000000' : '#ffffff'};
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 2px 10px 10px
    ${props => (props.isDarkTheme === true ? '#181818' : '#f4f4f4')};
  width: 90%;
  max-width: 380px;
`

export const WebsiteLogo = styled.img`
  width: 200px;
  height: 90%;
  margin-bottom: 20px;
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`

export const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
`

export const UserInput = styled.input`
  width: 100%;
  height: 36px;
  border: 1px solid ${props => (props.isDarkTheme ? '#ebebeb' : '#475569')};
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#616e7c')};
  background-color: transparent;
  padding: 10px 8px 8px 10px;
  margin-top: 4px;
`
export const ShowPasswordContainer = styled.div`
  width: 100%;
  display: flex;
  jusitfy-content: flex-start;
  align-items: center;
  margin-top: 10px;
`

export const Checkbox = styled.input`
  height: 18px;
  width: 18px;
  margin-right: 6px;
  cursor: pointer;
`

export const ShowPassword = styled.label`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
`

export const LoginButton = styled.button`
  height: 40px;
  width: 100%;
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
  margin-top: 20px;
`

export const SubmitError = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #ff0000;
  margin-top: 12px;
  align-self: flex-start;
`

export const PrefillMsg = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${props => (props.isDarkTheme === true ? '#ffffff' : '#64748b')};
  margin-top: 12px;
  align-self: flex-start;
`
