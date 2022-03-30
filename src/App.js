import { BrowserRouter, Route, Routes} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from './components/Home';
import {Programming} from './components/Programming';
import {Misc} from './components/Misc';
import {Dark} from './components/Dark';
import {Pun} from './components/Pun';
import {Spooky} from './components/Spooky';
import {Christmas} from './components/Christmas';
import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';


function App() {

  const images=[
    'https://i.ibb.co/W3jGCf2/1.png',
'https://i.ibb.co/FWm3qjy/2.png',
'https://i.ibb.co/c3wdhkq/3.png',
'https://i.ibb.co/6rQ8ph3/4.png',
'https://i.ibb.co/DwKPJZf/5.png',
'https://i.ibb.co/jk4hcCR/6.png'
  ]

  const [path,setPath]=useState('');
  const [jokes,setJokes]=useState([]);
  const [reshuffle,setReshuffle]=useState(0);

  const fetch=async (path)=>{

    const urls={
      '/':'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Spooky,Christmas?amount=6',
      '/programming':'https://v2.jokeapi.dev/joke/Programming?amount=6',
      '/misc':'https://v2.jokeapi.dev/joke/Miscellaneous?amount=6',
      '/dark':'https://v2.jokeapi.dev/joke/Dark?amount=6',
      '/pun' : 'https://v2.jokeapi.dev/joke/Pun?amount=6',
      '/spooky' : 'https://v2.jokeapi.dev/joke/Spooky?amount=6',
      '/christmas' : 'https://v2.jokeapi.dev/joke/Christmas?amount=6'
    }

    const {data}=await axios.get(urls[path]);
    setJokes([...data.jokes]);
  }

useEffect(()=>{
fetch(path);
},[path,reshuffle]
)

  const pathHandler=(path)=>{
    setPath(path);
  }


  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home images={images} pathHandler={pathHandler} jokes={jokes}/>} />
    <Route path="/programming" element={<Programming images={images} pathHandler={pathHandler} jokes={jokes}/>}/>
    <Route path='/misc' element={<Misc images={images} pathHandler={pathHandler} jokes={jokes}/>}/>
    <Route path='/dark' element={<Dark images={images} pathHandler={pathHandler} jokes={jokes}/>}/>
    <Route path='/spooky' element={<Spooky images={images} pathHandler={pathHandler} jokes={jokes}/>}/>
    <Route path='/pun' element={<Pun images={images} pathHandler={pathHandler} jokes={jokes}/>}/>
    <Route path='/christmas' element={<Christmas images={images} pathHandler={pathHandler} jokes={jokes}/>}/>
     </Routes>
     <div className='reshuffle-container'><button onClick={()=>setReshuffle(count=>count+1)}>Reshuffle</button></div>
    </BrowserRouter>
  );
}

export default App;
