import React, { Component } from 'react'
import CardList from './components/CardList/CardList.component'
import './App.css';
import SearchBox from './components/CardList/SearchBox/SearchBox.component';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchValue:''
    }
  }

  componentDidMount() {
    this.getMonsters()
  }

  getMonsters() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => this.setState({ monsters }))
      .catch(error => console.log({ error }))
  }

  onValueChange=()=>{
    const {monsters, searchValue} = this.state
    if(searchValue) {
      const FilteredMonsters = monsters.filter(monster=>
        monster.name.toLowerCase().includes(searchValue.toLowerCase())
      )
      this.setState({monsters: FilteredMonsters})
    }else {
      this.getMonsters()
    }
  }

  render() {
    const { monsters } = this.state
    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder={'Search for a monster..'} 
          onValueChange={(e)=> this.setState({searchValue: e.target.value},()=>{
            this.onValueChange(this.state.searchValue)
          })}/>
        <CardList monsters={monsters} />
      </div>
    )
  }
}
