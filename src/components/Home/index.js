import {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'

import Header from '../Header'

class Home extends Component {
  state = {
    activeTab: '',
  }

  render() {
    return <Header />
  }
}

export default Home
