import React from "react";
import Photo from "./photo";
import Sponsor from "../../sponsor";
import Paging2 from "../../paging2";

function News2  ()  {
    return(

        <div className="News2">
            
            <header className="Player_header">
            <img src="img/header.png"  alt="..."></img>

            <div className="player-header-a">
                <p>VIDEO</p>
            </div>

            <div className="player-header-t">
            <p>영상으로 보는 토트넘 핫스퍼의 소식입니다.</p>
            </div>
           </header>

<body className="News2-body" >
<div className="player-title">

<h2>토트넘 비디오</h2>
<div className="title_underbar" > </div>
</div>

   

<div className="news-photo1">
            <Photo/>
        </div>
        
   

    


        <div className="news-paging">
            <Paging2/>
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

export default News2;