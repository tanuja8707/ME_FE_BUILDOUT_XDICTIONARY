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

  const handleSearch = (text) => {
    setInputText(text);
    console.log(text,"text")

    const foundWord = customDictionary.find((item)=> (item.word.toLowerCase() || item.word) === text.toLowerCase() );
     if(!foundWord){
       return setDefinition('Word not found in the dictionary.')
     }
     console.log(foundWord,"foundWord")
     setDefinition(foundWord.meaning);
  };

  const displayMeaning  = ()=>{
    setShowResult(definition)
  }


  return (
    <div className="App">
      <h1>Dictionary App</h1>
        <input type="text" value={inputText} onChange={(e) => handleSearch(e.target.value)} />
        <button onClick={displayMeaning}>Search</button>
        <div>
        <strong>Definition: </strong>
            {showResult && (
              <div>
                <p>{showResult}</p>
              </div>
            )}
        
        </div>
    </div>
  );
}

export default App;
