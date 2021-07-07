import React from 'react'
import CardList from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
      this.state = {
        monsters: [],
        searchField: ""
      }
  }
  
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  render() {
    let { monsters, searchField } = this.state
    monsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className = "App"> 
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder = "Search monster"
          handleChange = {e => this.setState({ searchField: e.target.value })}
        />
        <CardList 
          monsters = {monsters} 
        />
      </div>
    )
  }
}

export default App;
