import React, { useEffect, useState } from 'react';
import CreateCard from './CreateCard'


import './App.css';

export default function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('all');
 
  useEffect(() => {
    getData()
  }, [input])

  const getData = () => {
    if (input !== ''){
      const all = `https://restcountries.com/v3.1/${input}`;
      const name = `https://restcountries.com/v3.1/name/${input}`;
      fetch(input === 'all' ? all : name)
        .then((response) => response.json())
        .then((json) => {
             
          setData(json);
         
          console.log(data);
  
        }).then(() => {setInput('')})
    }
   
  };

  return (
    <>
      <div className="App">
        <header>
        <h1> Find Countries Information</h1>
        <input
        placeholder="enter country name"
          Value={input}
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <br />
        <br />
                      
        </header>
 
      </div>
      <div className="card-main">
      {data.map((it , index) => {
      console.log(it);
      return (
        <CreateCard 
        key= {index}
         cont = {it}
         input = {setInput}
        />
      );
    })}
      </div>
    </>
  );
}