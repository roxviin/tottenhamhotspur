import React from "react";

import Sponsor from "../../sponsor";
import Loan from "./loan";






function Player2  ()  {

    

    return(

        <div className="Player2">


            
            <header className="Player_header">
            <img src="img/header.png"  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>


<body className="Player2-body">
    <Loan/>


</body>

           <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>


        </div>

    )
}

export default Player2;