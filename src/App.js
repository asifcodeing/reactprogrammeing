import React ,{useState,useEffect}from 'react'
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
const spotify=new SpotifyWebApi();

function App() {
  const [token,setToken]=useState(null);
  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash="";
    const _token=hash.access_token;
    if(_token){
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user=>{
        console.log('Men',user);
      })
    }
    console.log('I HAVE A TOKEN on',token);
  });
  return (
    <div className="app">
      {token ? <h1>I am loggod in</h1>:( <Login />)}
     
    </div>
  );
}

export default App;
