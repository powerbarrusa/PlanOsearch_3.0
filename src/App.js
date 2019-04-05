import React, { Component } from 'react'
import './App.css'
import Login from './components/Login'
import Search from './components/Search'
import Favorites from './components/Favorites'
import Signout from './components/Signout'
import Create from './components/Create'
import Plans from './components/Plans'
import { BrowserRouter, Route, Switch } from "react-router-dom"
// import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      login: false,
      listings: [],
      favorites: [],
      iframe: false,
      query: '',
      favoritesPage: false
    }
  }

  async componentDidMount(){
    try {
      const api = await fetch('http://localhost:3001')
      const faveApi = await fetch('http://localhost:3001/favorites')
      const awaitApi = await api.json()
      const awaitApiFave = await faveApi.json()
      const favorites = awaitApiFave.map(favorite => {
        return favorite
      })
      const listings = awaitApi.map(listing => {
        return listing
      })
      this.setState({
        listings: listings,
        favorites: favorites
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
            <Route path="/search" component={() => <Search listings={this.state.listings} />} exact />
            <Route path="/favorites" component={() => <Favorites favorites={this.state.favorites} />} />
            <Route path="/plans" component={() => <Plans listings={this.state.listings} />} />
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
