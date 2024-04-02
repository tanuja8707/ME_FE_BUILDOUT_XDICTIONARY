import logo from './logo.svg';
import './App.css';
import React , { useState } from 'react';

const customDictionary = 
   [{ word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
   ];

function App() {
  const [inputText,setInputText] = useState("");
  const [definition,setDefinition] = useState("");
  const [showResult,setShowResult] = useState("");

  const handleSearch = () => {

    const foundWord = customDictionary.find((item)=> (item.word.toLowerCase() || item.word) === inputText.toLowerCase() );
     if(!foundWord){
       return setDefinition('Word not found in the dictionary.')
     }
     console.log(foundWord,"foundWord")
     setDefinition(foundWord.meaning);
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder='Search for a word...' />
        <button onClick={handleSearch}>Search</button>
        <div>
        <strong>Definition: </strong>
            {definition && (
              <div>
                <p>{definition}</p>
              </div>
            )}
        
        </div>
    </div>
  );
}

export default App;
