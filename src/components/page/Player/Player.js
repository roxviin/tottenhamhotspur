import React from "react";
import Players from "./players";
import Sponsor from "../../sponsor";

function Player ()  {
    return(

        <div className="Player">

     
            
            <header className="Player_header">
            <img src="img/header.png"  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

        
        <body className="player-body">
            <div>
            <Players/>
            </div>

            
            
        </body>

        
        <footer className="Home-footer">

     <div className="sponsor">
      <Sponsor/>
    </div>


</footer>

        </div>

    )
}

export default Player;