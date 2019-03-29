import React, { Component } from 'react'
import './App.css'
import Login from './components/Login'
import Search from './components/Search'

class App extends Component {
  constructor(){
    super()
    this.state = {
      login: false
    }
  }

  login = () => {
    this.setState({
      login: !this.state.login
    })
  }

  searchPage = () => {
    return this.state.login ? 
    <Search /> : <Login login={this.login}/>
  }

  render() {
    return (
      <div className="App">
        {this.searchPage()}
      </div>
    )
  }
}

export default App
