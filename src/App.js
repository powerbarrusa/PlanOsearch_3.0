import React, { Component } from 'react'
import './App.css'
import Login from './components/Login'
import Search from './components/Search'
import Favorites from './components/Favorites'
import Navbar from './components/Navbar'
import Signout from './components/Signout'
import Create from './components/Create'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
// import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      login: false,
      listings: [],
      iframe: false,
      query: '',
      favoritesPage: false,
      favorites: []
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

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  login = () => {
    this.setState({
      login: !this.state.login
    })
  }

  searchPage = () => {
    return this.state.login ? 
    <Search listings={this.state.listings} /> : <Login login={this.login}/>
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/search" component={() => <Search listings={this.state.listings}/>} exact />
            <Route path="/favorites" component={() => <Favorites />} />
            <Route path="/createuser" component={() => <Create />} />
            <Route path="/signout" component={() => <Signout />} />
            {this.searchPage()}
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
