import React, { Component } from 'react'
import './App.css'
import Login from './components/Login'
import Search from './components/Search'

class App extends Component {
  constructor(){
    super()
    this.state = {
      login: false,
      listings: ''
    }
  }

  async componentDidMount(){
    try {
      const api = await fetch('http://localhost:3001')
      const awaitApi = await api.json()
      const listings = awaitApi.map(listing => {
        return listing
      })
      this.setState({
        listings: listings
      })
    } catch (error) {
      console.log(error)
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
