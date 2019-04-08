import React, { Component } from 'react'
import './App.css'
import Login from './components/Login'
import Favorites from './components/Favorites'
import Signout from './components/Signout'
import Create from './components/Create'
import Autocomplete from './components/Autocomplete'
import Plan from './components/Plan'
import { BrowserRouter, Route, Switch } from "react-router-dom"

class App extends Component {
  constructor(){
    super()
    this.state = {
      login: false,
      listings: [],
      favorites: [],
      iframe: false,
      hearted: false,
      query: '',
      results: [],
      favoritesPage: false
    }
  }

  async componentDidMount(){
    try {
      const api = await fetch('http://localhost:3001/')
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
    <Autocomplete listings={this.state.listings} /> : <Login login={this.login}/>
  }

  unFavorite = (e) => {
    fetch(`http://localhost:3001/favorites/${e.target}`, {
      method: 'DELETE'
    })
    .then(response => {response.json()})
    .then(data => data)
    let newFaves = [...this.state.favorites]
    let addFaves = newFaves.filter(fave => fave.id !== +e.target.id)
    this.setState({
      favorites: addFaves
    })
  }

  onFavorite = (e) => {
    const url = `http://localhost:3001/addFave`
    let favey = this.state.listings.filter(listing => listing.id === Number(e.target.id))
    console.log("id", favey)
    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(favey[0]),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
    let newFaves = [...this.state.favorites]
    newFaves.push({...favey, id: this.state.favorites.length})
    this.setState({
      favorites: newFaves
    })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/autocomplete" component={() => <Autocomplete onFavorite={this.onFavorite} listings={this.state.listings} hearted={this.state.hearted} />} exact />} />
            <Route path="/favorites" component={() => <Favorites unFavorite={this.unFavorite} favorites={this.state.favorites} hearted={this.state.hearted} />} />
            <Route path="/createuser" component={() => <Create />} />
            <Route path="/signout" component={() => <Signout />} />
            <Route path="/plan" component={() => <Plan />} />
            {this.searchPage()}
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
