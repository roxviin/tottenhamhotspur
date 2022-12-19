import React from "react";

import Sponsor from "../../sponsor";
import Stadium from "./stadium";


function Game3  ()  {

   



    return(        

        <div className="Game3">



          
            <header className="Player_header">
            <img className="header-img" src="img/header.png"  alt="..."></img>

            <div className="player-header-a">
                <p>STADIUM</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 스타디움을 안내해드립니다.</p>
            </div>
           </header>

        <body>

            <Stadium/>

        </body>

        <footer className="Home-footer">



            <div className="sponsor">
            <Sponsor/>
            </div>


            </footer>


            </div>

      

    )
}

export default Game3;