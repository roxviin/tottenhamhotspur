import React from "react";
import Match from "./match";
import Sponsor from "../../sponsor";

function Game  ()  {

    return(        

        <div className="Game">

    

            <header className="Player_header">
            <img className="header-img" src="img/header.png"  alt="..."></img>

            <div className="player-header-a">
                <p>MATCH</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼의 경기 일정을 알려드립니다.</p>
            </div>
           </header>
        
         

           <div className="Match">
           <Match/>
           </div>

           <footer className="Home-footer">

            <div className="sponsor">
                <Sponsor/>
            </div>
            
            </footer>

        </div>
      

    )
}

export default Game;