import './App.css';
import {CardiList} from './Components/card-list/card-list.js';
import  {Component} from 'react';
import {SerchBox} from './Components/serch-box/serch-box.js';
class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      serchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}));
  }
  render(){
    const {monsters, serchField} =  this.state;
    const filteredMonster = monsters.filter(monsters =>
       monsters.name.toLowerCase().includes(serchField.toLocaleLowerCase()))
      return (
        <div className="App">
          <SerchBox
           placeholder=' Serch Monsters' 
           handleChange = {
            e=> this.setState({serchField: e.target.value})
            }

          />
          <CardiList monsters ={filteredMonster}>
          </CardiList>
        </div>
      );
    }
  }
  
export default App;
