import React, { useEffect, useState } from 'react';
import CreateCard from './CreateCard'

import { InputGroup, Button, FormControl} from 'react-bootstrap';

import './App.css';

export default function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('all');
 
  const [isLoading, setIsLoading] = useState(false);

  // console.log(input);

  useEffect(() => {
    getData();
  }, [input]);

  const getData = () => {
    if (input !== ''){
      const all = `https://restcountries.com/v3.1/${input}`;
      const name = `https://restcountries.com/v3.1/name/${input}`;
      fetch(input === 'all' ? all : name)
        .then((response) => response.json())
        .then((json) => {
             
          setData(json);
         
          console.log(data[0]);
  
        }).then(() => {setInput('')})
    }
   

  };

  return (
    <>
      <div className="App">
        <header>
        <h1> Countries Information</h1>
        <input
        placeholder="enter country name"
          Value={input}
          type="text"
          onChange={(e) => {
            // if (e.target.value === '') {
            //   setInput('all');
             
            // } else {
            //   setInput(e.target.value);
              
            // }
            setInput(e.target.value);
          }}
        />
        <br />
        <br />
        {/* <button onClick={ () =>{
          getData()
      
        }
          
         
        }>search</button> */}
                      
        </header>
 
      </div>
      <div className="card-main">
      {data.map((it , index) => {
      
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