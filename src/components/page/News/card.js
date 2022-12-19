import React from "react";
import { Link } from "react-router-dom";


function CardList() {
  return (

    <div className="CardList">

    <div className="CardLists">
    
       <div className="card">
        <Link to ='/details2/1'>
          <img  className="cardlist-img" src={process.env.PUBLIC_URL + '/img/card/Richarlison_card.png'}  class="card-img-top" alt="..."/>
          </Link>
          <div class="card-body">
            <h5 class="card-title">루카스, 로얄 " 히샬리송 그가 매우 특별한 사람이기 때문에 우리는 매우 행복하다. "</h5>
            <p class="card-text"> 히샬리송이 카타르 월드컵에서 계속 빛나고 있는 가운데, 두 명의 팀 동료들이 2022년 브라질의 골든 보이가 되기 위한 친구의 여정을 보며 즐거워하고 있다.</p>
          </div>
        </div>
   

   
        <div className="card">
        <Link to ='/details2/2'>
          <img className="cardlist-img" src={process.env.PUBLIC_URL + '/img/card/Son_card.png'} class="card-img-top" alt="..."/>
         </Link>
          <div class="card-body">
            <h5 class="card-title">"브라질이 앞서나가면서 히샬리송은 득점을 하였지만, 손흥민은 카타르에서 물러났다."</h5>
            <p class="card-text">히샬리송은 브라질이 월요일 저녁 카타르에서 열린 월드컵 16강전에서 손흥민의 한국을 꺾었을 때 기억에 남을 또 다른 골을 넣었다.</p>
          </div>
        </div>
   

  
        <div className="card">
        <Link to ='/details2/3'>
          <img className="cardlist-img" src={process.env.PUBLIC_URL + '/img/card/kane_card.png'} class="card-img-top" alt="..."/>
         </Link>
          <div class="card-body">
            <h5 class="card-title">" 케인의 고뇌 속에서 기록을 깬 요리스가 전진하다. "</h5>
            <p class="card-text">휴고 요리스는 해리 케인이 결정적인 후반전을 놓치기 전에 페널티킥으로 한 골을 넣은 잉글랜드를 희생시키면서 조국이 월드컵 4강에 진출하는 것을 도우며 역대 프랑스 최고의 남자 선수가 된 것을 축하했다.</p>
          </div>
        </div>
  
  </div>

 
    
    <div className="CardLists">


        <div className="card">
        <Link to ='/details2/4'>
          <img className="cardlist-img" src={process.env.PUBLIC_URL + '/img/card_romero.png'} class="card-img-top" alt="..."/>
          </Link>
          <div class="card-body">
            <h5 class="card-title">" 크리스티안 로메로, 월드컵 8강 진출. "</h5>
            <p class="card-text">
            Cristian Romero 는 토요일 저녁 아르헨티나가 월드컵 8강에 진출하기 위해 호주를 상대로 막판에 경기를 펼쳤을 때 출발했습니다.</p>
          </div>
        </div>
  
    
      
        <div className="card">
        <Link to ='/details2/5'>
        <img className="cardlist-img" src={process.env.PUBLIC_URL + '/img/card_son.png'} class="card-img-top" alt="..."/>
          </Link>
          <div class="card-body">
            <h5 class="card-title">" 한국의 월드컵 진출에 눈물을 흘리는 손흥민, 그러나 벤탄 쿠르에게는 절망. "</h5>
            <p class="card-text"> 손흥민은 한국이 포르투갈을 상대로 뒤늦게 승리하며 2010년 이후 처음으로 본선 토너먼트에 진출한 뒤 기쁨의 눈물을 흘렸다.
                                  아쉽게도 가나와 우루과이의 경기에서 부상으로 34분 만에 결장한 로드리고 벤탄 쿠르에게는 절망이었다.
                                 </p>
          </div>
        </div>

     

        <div className="card">
        <Link to ='/details2/6'>
          <img className="cardlist-img" src={process.env.PUBLIC_URL + '/img/card_rest.png'} class="card-img-top" alt="..."/>
          </Link>
          <div class="card-body">
            <h5 class="card-title">" 선수들은 시즌 중반 휴식 후 훈련으로 복귀. "</h5>
            <p class="card-text">많은 선수가 해당 기간 동안 국제 친선 경기에서 각자의 의무를 마치고 휴식을 시작함에 선수 그룹이 기지에서 훈련을 다시 시작했습니다.
                                  선수단은 경기장으로 향하기 전에 프리 시즌 첫날에 볼 수 있는 유사한 경가와 훈련을 통해 시즌을 시작했습니다.</p>
          </div>
        </div>
      </div>
    
        </div>
     
      );
    }

export default CardList;