import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Team from './components/page/Team/Team';
import Player from './components/page/Player/Player';
import Home from './components/page/Home';
import News from './components/page/News/News';
import Team2 from './components/page/Team/Team2';
import Player2 from './components/page/Player/Player2';
import News2 from './components/page/News/News2';
import Game from './components/page/Game/Game';
import Game2 from './components/page/Game/Game2';
import Game3 from './components/page/Game/Game3';
import Profile from './components/page/Player/Profile';
import NavbarDarkExample from './components/navbar';
import Details from './components/page/News/details';
import NewsD from './components/page/News/news_D';
import News2D from './components/page/News/news2_D';
import Details2 from './components/page/News/details2';






function App() {


  return (
    <div className="App">

<div className="Player">

<NavbarDarkExample/>

</div>





<>

       
<BrowserRouter basename="/tottenhamhotspur">


  <Routes>



      <Route path="/" exact element={<Home />} />

      <Route path="/team" element={<Team />} />
      <Route path="/team2" element={<Team2 />} />
    

   


      <Route path="/player" element={<Player />} />
      <Route path="/player2" element={<Player2/>} />

      <Route path="/profiles/:username" element={<Profile />} />
     

     

      <Route path="/Game" element={<Game />} />
      <Route path="/Game2" element={<Game2 />} />
      <Route path="/Game3" element={<Game3 />} />

      <Route path="/news" element={<News />} />
      <Route path="/news/:username" element={<NewsD />} />

      <Route path="/video" element={<News2 />} />
      <Route path="/video/:username" element={<News2D />} />

      <Route path="/details/:username" element={<Details />} />
      <Route path="/details2/:username" element={<Details2 />} />
     
     

  </Routes>
</BrowserRouter>
</>

</div>

  );
}
export default App;
