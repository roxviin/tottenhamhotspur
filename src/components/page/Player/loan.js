import React from "react"
import { Link } from "react-router-dom";





const Loan = ()=> {

    return(

        <div className="Players">

<header className="player-header">
    
    <div className="player-title">

        <h2>임대선수</h2>
        <div className="title_underbar" > </div>
    </div>
</header>

<div className="player-team">

    

    <div className="player-img">
     
    <Link to={'/profiles/reguilon'}>
        <div className="player_photo">
        <img className="player-p" src="img/players/reguilon.png"  alt="..." ></img>
        </div>
        </Link>
  

      <div className="player_underbar" > </div>

      <div className="player_info">
        <div className="player_name" > <p >세르히오 레길론 <br/>(Sergio Reguilon)</p> </div>
        <div className="player_country"> <p >스페인, 마드리드</p> </div>
        <div className="player_position">DF</div>
        <div className="player_num">3</div>
      
      </div>
     
    </div>

    <div className="player-img">
      <Link to={'/profiles/winks'}>
        <div className="player_photo">
        <img className="player-p" src="img/players/winks.png"  alt="..."></img>
        </div>
      </Link>

      <div className="player_underbar" > </div>

      <div className="player_info">
        <div className="player_name" > <p >해리 윙크스<br/>(Harry Winks)</p> </div>
        <div className="player_country"> <p >영국, 헤멀헴프스테드</p> </div>
        <div className="player_position">MF</div>
        <div className="player_num">8</div>
      </div>
     
    </div>

    <div className="player-img">
      <Link to={'/profiles/celso'}>
        <div className="player_photo">
        <img className="player-p" src="img/players/celso.png"  alt="..."></img>
        </div>
      </Link>

      <div className="player_underbar" > </div>

      <div className="player_info">
        <div className="player_name" > <p >지오바니 로 셀소<br/>(Giovani Lo Celso)</p> </div>
        <div className="player_country"> <p >아르헨티나, 로사리오</p> </div>
        <div className="player_position">MF</div>
        <div className="player_num">18</div>
      </div>
     
    </div>

</div>

<div className="player-team">

<div className="player-img">
<Link to={'/profiles/rodon'}>
<div className="player_photo">
<img className="player-p" src="img/players/rodon.png"  alt="..."></img>
</div>
</Link>

<div className="player_underbar" > </div>

<div className="player_info">
<div className="player_name" > <p >조 호든<br/>(Joe Rodon)</p> </div>
<div className="player_country"> <p >웨일스, 란지펠라치</p> </div>
<div className="player_position">DF</div>
<div className="player_num">22</div>
</div>

</div>

<div className="player-img">
<Link to={'/profiles/ndombele'}>
<div className="player_photo">
<img className="player-p" src="img/players/ndombele.png"  alt="..."></img>
</div>
</Link>

<div className="player_underbar" > </div>

<div className="player_info">
<div className="player_name" > <p >탕기 은돔벨레<br/>(Tangu Ndombele)</p> </div>
<div className="player_country"> <p >프랑스, 롱쥬모</p> </div>
<div className="player_position">MF</div>
<div className="player_num">28</div>
</div>

</div>

<div className="player-img">
      <Link to={'/profiles/whiteman'}>
        <div className="player_photo">
        <img className="player-p" src="img/players/whiteman.png"  alt="..."></img>
        </div>
      </Link>

      <div className="player_underbar" > </div>

      <div className="player_info">
        <div className="player_name" > <p >알피 화이트먼<br/>(Alfie Whiteman)</p> </div>
        <div className="player_country"> <p >영국, 런던</p> </div>
        <div className="player_position">GK</div>
        <div className="player_num">42</div>
      </div>
     
    </div>

</div>


    
    </div>
       

    )
}


export default Loan;