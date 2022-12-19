import React from "react";
import Sponsor from "../../sponsor";

function Game2 ()  {

    return(        

        <div className="Game2">

     

            <header className="Player_header">
            <img className="header-img" src="img/header.png"  alt="..."></img>

            <div className="player-header-a">
                <p>TICKET</p>
            </div>

            <div className="player-header-t">
            <p>입장권 구입에 대해 알려드립니다.</p>
            </div>
           </header>

           <div className="std-title">

            <h2>입장권 안내</h2>
                <div className="title_underbar" > </div>
            </div>
        
           <body className="Players">
            <div className="std-img">
        <img className="A" src="img/stadium/std_A.png"  alt="..."></img>
            </div>

            <div className="std-img">
        <img className="B" src="img/stadium/std_B.png"  alt="..."></img>
            </div>

            <div className="std-img">
        <img className="C" src="img/stadium/std_C.png"  alt="..."></img>
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

export default Game2;