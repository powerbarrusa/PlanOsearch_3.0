import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './Suggestions'
import StickyNav from './StickyNav'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const { API_KEY } = process.env
const API_URL = 'http://localhost:3001'

class Autocomplete extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
      .then(({ data }) => {
        this.setState({
          results: data
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 5) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
      <div>
        <StickyNav />
        <h1 className="headers">
          Search
        </h1>
        <InputGroup className="mb-3 inputgroup">
          <FormControl
            placeholder="Search for a listing..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
            className="inputfield"
          />
          <InputGroup.Append>
            <Button className="button" variant="outline-secondary">SEARCH</Button>
          </InputGroup.Append>
        </InputGroup>
        <Suggestions results={this.state.results} />
      </div>
    )
  }
}

export default Autocomplete