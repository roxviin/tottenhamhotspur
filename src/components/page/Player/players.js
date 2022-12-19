import React from "react"
import { Link } from "react-router-dom";

function Players () {
    return (

 <div className="Players">

    <header className="player-header">
    
        <div className="player-title">

            <h2>출전선수</h2>
            <div className="title_underbar" > </div>
            
        </div>
    </header>

    <div className="player-team">

        <div className="player-img">
          <Link to={'/profiles/lloris'}>
            <div className="player_photo">
            <img className="player-p" src="img/players/lloris.png"  alt="..."></img>
            </div>
          </Link>

          <div className="player_underbar" > </div>

          <div className="player_info">
            <div className="player_name" > <p >위고 요리스  <br/>(Hugo Lloris)</p> </div>
            <div className="player_country"> <p >프랑스, 니스</p> </div>
            <div className="player_position">GK</div>
            <div className="player_num">1</div>
          
          </div>
         
        </div>

        <div className="player-img">
          <Link to={'/profiles/doherty'}>
            <div className="player_photo">
            <img className="player-p" src="img/players/doherty.png"  alt="..."></img>
            </div>
          </Link>

          <div className="player_underbar" > </div>

          <div className="player_info">
            <div className="player_name" > <p >맷 도허티 <br/>(Matt Doherty)</p> </div>
            <div className="player_country"> <p >아일랜드, 더블린</p> </div>
            <div className="player_position">DF</div>
            <div className="player_num">2</div>
          </div>
         
        </div>

        <div className="player-img">
          <Link to={'/profiles/skipp'}>
            <div className="player_photo">
            <img className="player-p" src="img/players/skipp.png"  alt="..."></img>
            </div>
          </Link>

          <div className="player_underbar" > </div>

          <div className="player_info">
            <div className="player_name" > <p >올리버 스킵 <br/>(Oliver Skipp)</p> </div>
            <div className="player_country"> <p >영국, 웰륀가든시티</p> </div>
            <div className="player_position">MF</div>
            <div className="player_num">4</div>
          </div>
         
        </div>
   
    </div>

    <div className="player-team">

<div className="player-img">
  <Link to={'/profiles/hojbjerg'}>
    <div className="player_photo">
    <img className="player-p" src="img/players/hojbjerg.png"  alt="..."></img>
    </div>
  </Link>

  <div className="player_underbar" > </div>

  <div className="player_info">
    <div className="player_name" > <p >피에르-에밀 호이비에르 <br/>(Pierre-Emile Højbjerg)</p> </div>
    <div className="player_country"> <p >덴마크, 쾨벤하운</p> </div>
    <div className="player_position">MF</div>
    <div className="player_num">5</div>
  </div>
 
</div>

<div className="player-img">
  <Link to={'/profiles/sanchez'}>
    <div className="player_photo">
    <img className="player-p" src="img/players/sanchez.png"  alt="..."></img>
    </div>
  </Link>

  <div className="player_underbar" > </div>

  <div className="player_info">
    <div className="player_name" > <p >다빈슨 산체스 <br/>(Davinson sanchez)</p> </div>
    <div className="player_country"> <p >콜롬비아, 칼로토</p> </div>
    <div className="player_position">DF</div>
    <div className="player_num">6</div>
  </div>
 
</div>

<div className="player-img">
          <Link to={'/profiles/son'}>
            <div className="player_photo">
            <img className="player-p" src="img/players/son.png"  alt="..."></img>
            </div>
          </Link>

          <div className="player_underbar" > </div>

          <div className="player_info">
            <div className="player_name" > <p >손흥민<br/>(Heung-Min Son)</p> </div>
            <div className="player_country"> <p >대한민국, 춘천</p> </div>
            <div className="player_position">FW</div>
            <div className="player_num">7</div>
          </div>
         
        </div>

</div>

<div className="player-team">

<div className="player-img">
  <Link to={'/profiles/richarlison'}>
    <div className="player_photo">
    <img className="player-p" src="img/players/richarlison.png"  alt="..."></img>
    </div>
  </Link>

  <div className="player_underbar" > </div>

  <div className="player_info">
    <div className="player_name" > <p >히샬리송<br/>(Richarlison)</p> </div>
    <div className="player_country"> <p >브라질, 노바 베네시아</p> </div>
    <div className="player_position">FW</div>
    <div className="player_num">9</div>
  </div>
 
</div>

<div className="player-img">
          <Link to={'/profiles/kane'}>
            <div className="player_photo">
            <img className="player-p" src="img/players/kane.png"  alt="..."></img>
            </div>
          </Link>

          <div className="player_underbar" > </div>

          <div className="player_info">
            <div className="player_name" > <p >해리 케인<br/>(Harry Kane)</p> </div>
            <div className="player_country"> <p >영국, 런던</p> </div>
            <div className="player_position">FW</div>
            <div className="player_num">10</div>
          </div>
         
        </div>

<div className="player-img">
  <Link to={'/profiles/gil'}>
    <div className="player_photo">
    <img className="player-p" src="img/players/gil.png"  alt="..."></img>
    </div>
  </Link>

  <div className="player_underbar" > </div>

  <div className="player_info">
    <div className="player_name" > <p >브리안 힐 <br/>(Bryan Gil)</p> </div>
    <div className="player_country"> <p >스페인, 바르셀로나</p> </div>
    <div className="player_position">FW</div>
    <div className="player_num">11</div>
  </div>
 
</div>

</div>

<div className="player-team">

<div className="player-img">
  <Link to={'/profiles/royal'}>
    <div className="player_photo">
    <img className="player-p" src="img/players/royal.png"  alt="..."></img>
    </div>
  </Link>

  <div className="player_underbar" > </div>

  <div className="player_info">
    <div className="player_name" > <p >에메르송 로얄<br/>(Emerson Royal)</p> </div>
    <div className="player_country"> <p >브라질, 상파울루</p> </div>
    <div className="player_position">DF</div>
    <div className="player_num">12</div>
  </div>
 
</div>

<div className="player-img">
          <Link to={'/profiles/perisic'}>
            <div className="player_photo">
            <img className="player-p" src="img/players/perisic.png"  alt="..."></img>
            </div>
          </Link>

          <div className="player_underbar" > </div>

          <div className="player_info">
            <div className="player_name" > <p>이반 페리시치<br/>(Ivan Perisic)</p> </div>
            <div className="player_country"> <p >크로아티아, 스플리트</p> </div>
            <div className="player_position">MF</div>
            <div className="player_num">14</div>
          </div>
         
        </div>

<div className="player-img">
  <Link to={'/profiles/dier'}>
    <div className="player_photo">
    <img className="player-p" src="img/players/dier.png"  alt="..."></img>
    </div>
  </Link>

  <div className="player_underbar" > </div>

  <div className="player_info">
    <div className="player_name" > <p>에릭 다이어<br/>(Eric Dier)</p> </div>
    <div className="player_country"> <p >영국, 첼트넘</p> </div>
    <div className="player_position">DF</div>
    <div className="player_num">15</div>
  </div>
 
</div>

</div>

<div className="player-team">

<div className="player-img">
  <Link to={'/profiles/romero'}>
    <div className="player_photo">
    <img className="player-p" src="img/players/romero.png"  alt="..."></img>
    </div>
  </Link>

  <div className="player_underbar" > </div>

  <div className="player_info">
    <div className="player_name" > <p >크리스티안 로메로<br/>(Cristian Romero)</p> </div>
    <div className="player_country"> <p >아르헨티나, 코르도바</p> </div>
    <div className="player_position">DF</div>
    <div className="player_num">17</div>
  </div>
 
</div>

<div className="player-img">
  <Link to={'/profiles/sessegnon'}>
    <div className="player_photo">
    <img className="player-p" src="img/players/sessegnon.png"  alt="..."></img>
    </div>
  </Link>

  <div className="player_underbar" > </div>

  <div className="player_info">
    <div className="player_name" > <p>라이언 세세뇽<br/>(Ryan Sessegnon)</p> </div>
    <div className="player_country"> <p >영국, 로햄턴</p> </div>
    <div className="player_position">DF</div>
    <div className="player_num">19</div>
  </div>
 
</div>

<div className="player-img">
          <Link to={'/profiles/forster'}>
            <div className="player_photo">
            <img className="player-p" src="img/players/forster.png"  alt="..."></img>
            </div>
          </Link>

          <div className="player_underbar" > </div>

          <div className="player_info">
            <div className="player_name" > <p>프레이저 포스터<br/>(Fraser Forster)</p> </div>
            <div className="player_country"> <p >영국, 헥삼</p> </div>
            <div className="player_position">GK</div>
            <div className="player_num">20</div>
          </div>
         
        </div>



</div>

<div className="player-team">

<div className="player-img">
  <Link to={'/profiles/kulusevski'}>
    <div className="player_photo">
    <img className="player-p" src="img/players/kulusevski.png"  alt="..."></img>
    </div>
  </Link>

  <div className="player_underbar" > </div>

  <div className="player_info">
    <div className="player_name" > <p >데얀 쿨루셉스키<br/>(Dejan Kulusevski)</p> </div>
    <div className="player_country"> <p >스웨덴, 스톡홀름</p> </div>
    <div className="player_position">MF</div>
    <div className="player_num">21</div>
  </div>
 
</div>

<div className="player-img">
  <Link to={'/profiles/spence'}>
    <div className="player_photo">
    <img className="player-p" src="img/players/spence.png"  alt="..."></img>
    </div>
  </Link>

  <div className="player_underbar" > </div>

  <div className="player_info">
    <div className="player_name" > <p>제드 스펜스<br/>(Djed Spence)</p> </div>
    <div className="player_country"> <p >영국, 런던</p> </div>
    <div className="player_position">DF</div>
    <div className="player_num">24</div>
  </div>
 
</div>

<div className="player-img">
          <Link to={'/profiles/tanganga'}>
            <div className="player_photo">
            <img className="player-p" src="img/players/tanganga.png"  alt="..."></img>
            </div>
          </Link>

          <div className="player_underbar" > </div>

          <div className="player_info">
            <div className="player_name" > <p>자펫 탕강가<br/>(Japhet Tanganga)</p> </div>
            <div className="player_country"> <p >영국, 런던</p> </div>
             <div className="player_position">DF</div>
            <div className="player_num">25</div>
          </div>
         
        </div>

</div>

<div className="player-team">

<div className="player-img">
  <Link to={'/profiles/moura'}>
    <div className="player_photo">
    <img className="player-p" src="img/players/moura.png"  alt="..."></img>
    </div>
  </Link>

  <div className="player_underbar" > </div>

  <div className="player_info">
    <div className="player_name" > <p >루카스 모우라<br/>(Lucas Moura)</p> </div>
    <div className="player_country"> <p >브라질, 상파울루</p> </div>
    <div className="player_position">MF</div>
    <div className="player_num">27</div>
  </div>
 
</div>

<div className="player-img">
  <Link to={'/profiles/sarr'}>
    <div className="player_photo">
    <img className="player-p" src="img/players/sarr.png"  alt="..."></img>
    </div>
  </Link>

  <div className="player_underbar" > </div>

  <div className="player_info">
    <div className="player_name" > <p> 파페 마타르 사르<br/>(Pape Matar Sarr)</p> </div>
    <div className="player_country"> <p >세네갈, 티아로이</p> </div>
    <div className="player_position">MF</div>
    <div className="player_num">29</div>
  </div>
 
</div>

<div className="player-img">
          <Link to={'/profiles/bentancur'}>
            <div className="player_photo">
            <img className="player-p" src="img/players/bentancur.png"  alt="..."></img>
            </div>
          </Link>

          <div className="player_underbar" > </div>

          <div className="player_info">
            <div className="player_name" > <p>로드리고 벤탄쿠르<br/>(Rodrigo Bentancur)</p> </div>
            <div className="player_country"> <p >우루과이, 누에바 엘베시아</p> </div>
            <div className="player_position">MF</div>
            <div className="player_num">30</div>
          </div>
         
        </div>

</div>

<div className="player-team">

<div className="player-img">
  <Link to={'/profiles/davies'}>
    <div className="player_photo">
    <img className="player-p" src="img/players/davies.png"  alt="..."></img>
    </div>
  </Link>

  <div className="player_underbar" > </div>

  <div className="player_info">
    <div className="player_name" > <p >벤 데이비스<br/>(Ben Davies)</p> </div>
    <div className="player_country"> <p >웨일즈, 니스</p> </div>
    <div className="player_position">DF</div>
    <div className="player_num">33</div>
  </div>
 
</div>

<div className="player-img">
  <Link to={'/profiles/lenglet'}>
    <div className="player_photo">
    <img className="player-p" src="img/players/lenglet.png"  alt="..."></img>
    </div>
  </Link>

  <div className="player_underbar" > </div>

  <div className="player_info">
    <div className="player_name" > <p>클레망 랑글레<br/>(Clement Lenglet)</p> </div>
    <div className="player_country"> <p >프랑스, 보베</p> </div>
    <div className="player_position">DF</div>
    <div className="player_num">34</div>
  </div>
 
</div>

<div className="player-img">
          <Link to={'/profiles/bissouma'}>
            <div className="player_photo">
            <img className="player-p" src="img/players/bissouma.png"  alt="..."></img>
            </div>
          </Link>

          <div className="player_underbar" > </div>

          <div className="player_info">
            <div className="player_name" > <p>이브 비수마<br/>(Yves Bissouma)</p> </div>
            <div className="player_country"> <p >코트디부아르, 이시아</p> </div>
            <div className="player_position">MF</div>
            <div className="player_num">38</div>
          </div>
         
        </div>

</div>

<div className="player-team">

<div className="player-img">
  <Link to={'/profiles/austin'}>
    <div className="player_photo">
    <img className="player-p" src="img/players/austin.png"  alt="..."></img>
    </div>
  </Link>

  <div className="player_underbar" > </div>

  <div className="player_info">
    <div className="player_name" > <p >브랜던 오스틴<br/>(Brandon Austin)</p> </div>
    <div className="player_country"> <p >영국, 헤멀헴프스테드</p> </div>
    <div className="player_position">GK</div>
    <div className="player_num">40</div>
  </div>
 
</div>

<div className="player-img">
  <Link to={'/profiles/white'}>
    <div className="player_photo">
    <img className="player-p" src="img/players/white.png"  alt="..."></img>
    </div>
  </Link>

  <div className="player_underbar" > </div>

  <div className="player_info">
    <div className="player_name" > <p> 하비 화이트<br/>(Harvey White)</p> </div>
    <div className="player_country"> <p >영국, 메이드스톤</p> </div>
    <div className="player_position">MF</div>
    <div className="player_num">42</div>
  </div>
 
</div>

    <div className="player-img"></div>

</div>


</div>
   

        
    )
}

export default Players;


