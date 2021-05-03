import React from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header'
import Character from './components/Character'

const App = () => {
  const [character, setCharacter] = useState([]);
  const [currentCharId, setCurrentCharId] = useState(null);

  const openDetails = id => {
    setCurrentCharId(id)
  }

  const closeDetails = () => {
    setCurrentCharId(null)
  }
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(result => setCharacter(result.data))
    .catch(err => console.log(err))
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character/>
      <Header/>
    </div>
  );
}

export default App;
