import React from "react";

import Sponsor from "../../sponsor";
import History from "./history";



function Team  ()  {
    return(

        <div className="Team">

    
           <header className="Player_header">
            <img src="img/header.png"  alt="..."></img>

            <div className="player-header-a">
                <p>THE CLUB</p>
            </div>

            <div className="player-header-t">
            <p>영국 프리미어 리그의 역사, 토트넘 핫스퍼와 함께 합니다.</p>
            </div>
           </header>

           <body>

            <History/>
            
           </body>




           <footer className="Home-footer">

            <div className="sponsor">
                <Sponsor/>
            </div>

            </footer>


        </div>

    )
}

export default Team;