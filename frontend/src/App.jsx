import { useState } from 'react'
import './App.css'
import Nav from './components/Nav';
import Main from './components/Main';
import Chat from './components/Chat';

function App() {
  const [standardId, setStandardId] = useState(0);
  const [toggleHistory, setToggleHistory] = useState(0);
  function handleDataFromChild(standardid) {
    setStandardId(standardid);
    setToggleHistory(0);
  }
  function handleToggle(toggleId){
    setToggleHistory(toggleId)
  }
  return (
    <div>
      <Nav sendDataToParent={handleDataFromChild} standardId={standardId} prevToggle={toggleHistory} handleToggle={handleToggle}/>
      {
        standardId === 0 ? (
          <Main sendDataToParent={handleDataFromChild} />
        ) : (
          <Chat standardId={standardId} handleToggle={toggleHistory}/>
        )
      }
      {
        console.log(toggleHistory)
      }
    </div>
  )
}

export default App;
