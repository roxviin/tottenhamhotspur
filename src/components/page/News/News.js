import React from "react";
import Paging from "../../paging";
import Sponsor from "../../sponsor";
import CardList from "./card";



function News  ()  {



    return(

        <div className="News">

            
            <header className="Player_header">
            <img src="img/header.png"  alt="..."></img>

            <div className="player-header-a">
                <p>NEWS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼의 소식을 가장 빠르고 정확하게 전해드립니다.</p>
            </div>
           </header>
<body className="News-body">


<div className="player-title">

<h2>토트넘 소식</h2>
<div className="title_underbar" > </div>
</div>
    
<div className="Home-cardlist">
<CardList/>
</div>

    <div className="news-paging">
        <Paging/>
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

export default News;