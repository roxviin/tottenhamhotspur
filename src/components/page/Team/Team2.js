import React from "react";
import Honer from "./honer";
import Sponsor from "../../sponsor";


function Team2  ()  {
    return(

        <div className="Team2">

            
           <header className="Player_header">
            <img src="img/header.png"  alt="..."></img>

            <div className="player-header-a">
                <p>HISTORY</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼의 영예에 대해 알려드립니다.</p>
            </div>
           </header>

           <body>
            <Honer/>
           </body>


           <footer className="Home-footer">

          <div className="sponsor">
            <Sponsor/>
          </div>

           </footer>

        </div>

    )
}

export default Team2;