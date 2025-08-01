import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  AppContainer,
  FormContainer,
  WebsiteLogo,
  InputContainer,
  Label,
  UserInput,
  Checkbox,
  ShowPasswordContainer,
  ShowPassword,
  LoginButton,
  PrefillMsg,
  SubmitError,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

class LoginRoute extends Component {
  state = {
    username: 'rahul',
    password: 'rahul@2021',
    errorMsg: '',
    showPassword: false,
    showSubmitError: false,
  }

  onChangeHandler = event => {
    this.setState({[event.target.id]: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Label htmlFor="username" isDarkTheme={isDarkTheme}>
                USERNAME
              </Label>
              <UserInput
                type="text"
                id="username"
                onChange={this.onChangeHandler}
                value={username}
                placeholder="Username"
                isDarkTheme={isDarkTheme}
              />
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword === true ? 'text' : 'password'
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Label htmlFor="password" isDarkTheme={isDarkTheme}>
                PASSWORD
              </Label>
              <UserInput
                type={inputType}
                id="password"
                onChange={this.onChangeHandler}
                value={password}
                placeholder="Password"
                isDarkTheme={isDarkTheme}
              />
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderCheckbox = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <>
            <Checkbox
              type="checkbox"
              id="checkbox"
              onChange={this.onShowPassword}
              isDarkTheme={isDarkTheme}
            />
            <ShowPassword htmlFor="checkbox" isDarkTheme={isDarkTheme}>
              Show Password
            </ShowPassword>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showSubmitError: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <AppContainer isDarkTheme={isDarkTheme}>
              <FormContainer
                onSubmit={this.submitForm}
                isDarkTheme={isDarkTheme}
              >
                <WebsiteLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <InputContainer>{this.renderUsernameField()}</InputContainer>
                <InputContainer>{this.renderPasswordField()}</InputContainer>
                <ShowPasswordContainer>
                  {this.renderCheckbox()}
                </ShowPasswordContainer>
                <LoginButton type="submit">Login</LoginButton>
                <PrefillMsg isDarkTheme={isDarkTheme}>
                  Login and explore with pre-filled credentials
                </PrefillMsg>
                {showSubmitError && <SubmitError>*{errorMsg}</SubmitError>}
              </FormContainer>
            </AppContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginRoute
