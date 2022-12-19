import React from "react";
import { useParams } from "react-router";
import Sponsor from "../../sponsor";

const detail2Data = {
   
    1: {
        id: 0
    
    },

    2:{
        id:1
    },

    3: {
        id: 2
    
    },

    4:{
        id:3
    },

    5: {
        id: 4
    
    },

    6:{
        id:5
    }
}

const Details2 = () => {

    const { username } = useParams();
    const detail2 = detail2Data[username];
  
    if (detail2.id === 0 ) {

        return (
       
            <div className='newsD'>
               <header className="Player_header">
               <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>NEWS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼의 소식을 가장 빠르고 정확하게 전해드립니다.</p>
            </div>
           </header>

<body className="News-body">


<div className="player-title">

<h2>루카스, 로얄 " 히샬리송 그가 매우 특별한 사람이기 때문에 우리는 매우 행복하다. "</h2>
<div className="title_underbar" > </div>
</div>

    <div className="card-d-img">
     <img src={process.env.PUBLIC_URL + '/img/card/Richarlison_card.png'}  class="card-img-top" alt="..."/>
    </div> 
<div>
    <p>히샬리송이 카타르 월드컵에서 계속 빛나고 있는 가운데, 두 명의 팀 동료들이 2022년 브라질의 골든 보이가 되기 위한 친구의 여정을 보며 즐거워하고 있다.</p>
</div>

<div>
    <p> 히샬리송은 월요일 16강전에서 브라질이 한국을 꺾고 전반전에 세 번째 골을 터뜨렸다.

정말 대단한 골이기도 해요. 이번에는 히샬리송이 머리 위로 공을 세 차례 컨트롤한 뒤 황인범을 따돌리고 박스 가장자리의 마르퀴뇨스에게 패스했다. 마르퀴뇨스는 동료 센터백 티아구 실바에게 첫 패스를 했고, 그는 또 다른 첫 패스로 리찰리슨을 선택했고, 그리고 그 공격수는 나머지를 해냈고, 30분 안에 8야드에서 3-0으로 골을 넣었다. 브라질이 파티 모드로 들어가면서 전반전에 4-0이 되었다.

11월 24일 G조 개막전에서 브라질이 세르비아를 2-0으로 이긴 경기에서 히샬리송의 화려한 두 번째 골은 비니시우스 주니오르의 크로스를 등을 돌린 뒤 14야드 거리에서 스핀과 발리슛으로 연결해 지금까지 대회 최고의 골로 남아 있다. 이 골은 그가 브라질의 훌륭한 월드컵 골에 대한 대화를 나누고 펠레, 지코, 호마리우, 호나우두와 같은 사람들의 발자취를 따라가게 하는 골이다.</p>

</div>

<div className="card-d-img">
     <img src={process.env.PUBLIC_URL + '/img/card/Richarlison_card-1.png'}  class="card-img-top" alt="..."/>
    </div> 
<div>
    <p>여름에 에버튼에서 영입된, 히샬리송은 브라질에 속해있는 있는 포워드로, 2022년 한국을 상대로 8경기에 출전해 10골을 넣었고, 현재 41경기에서 20골을 기록하고 있다.

월드컵 후 국내 축구 복귀를 앞두고 훈련에 복귀한 에메르송은 "히샬리송은 미쳤어! 세르비아를 상대로 한 그의 골은 매우 아름다웠고, 놀라운 골이었다. 나는 그 경기 후에 그와 이야기했다. 나는 '히샬리송, 너 미쳤구나! 이것이 골 중 최고의 골이다.' 라고 말했다.  히샬리송의 골은 펠레처럼, 로마리오처럼, 정말 멋진 골이다. 나는 그가 최고의 선수인 동시에 최고의 사람이기 때문에 너무 기쁘다."

브라질 국가대표팀 경기에 35번 출전한 루카스는 다음과 같이 덧붙였다: "그 골은 믿을 수 없을 정도였다. 분석해야 할 몇 가지 사항이 있다. 첫째, 믿을 수 없는 골입니다. 둘째, 월드컵 때입니다. 셋째, 그는 브라질 셔츠를 입고 호날두, 호마리우와 같은 선수들, 그 셔츠를 입은 놀라운 선수들을 따르고 있습니다. 그에게는 특별한 순간이고, 그가 정말 특별한 사람이기 때문에 우리 모두 행복합니다."</p>
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

if (detail2.id === 1 ) {

    return (
   
        <div className='newsD'>
           <header className="Player_header">
           <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

        <div className="player-header-a">
            <p>NEWS</p>
        </div>

        <div className="player-header-t">
        <p>토트넘 핫스퍼의 소식을 가장 빠르고 정확하게 전해드립니다.</p>
        </div>
       </header>

<body className="News-body">


<div className="player-title">

<h2>브라질이 앞서나가면서 히샬리송은 득점을 하였지만, 손흥민은 카타르에서 물러났다. "</h2>
<div className="title_underbar" > </div>
</div>

<div className="card-d-img">
 <img src={process.env.PUBLIC_URL + '/img/card/Son_card.png'}  class="card-img-top" alt="..."/>
</div> 
<div>
<p> 히샬리송은 브라질이 월요일 저녁 카타르에서 열린 월드컵 16강전에서 손흥민의 한국을 꺾었을 때 기억에 남을 또 다른 골을 넣었다.</p>
</div>

<div>
<p>히샬리송은 브라질이 월요일 저녁 카타르에서 열린 월드컵 16강전에서 손흥민의 한국을 꺾었을 때 기억에 남을 또 다른 골을 넣었다.

팀이 이미 2-0으로 앞선 상황에서 히샬리송은 머리로 공을 세 번 제어한 후 황인범을 피해 박스 가장자리에 있는 마르퀴뇨스에게 패스했다. 마르퀴뇨스는 동료 센터백 티아고 실바에게 첫 번째 패스를 했고, 또 다른 첫 번째 패스로 히샬리송을 골랐다. 히샬리송은 나머지를 해냈고, 30분 안에 8야드에서 3-0으로 골을 넣었다.

킥오프 후 7분만에 비니시우스 주니오르의 득점으로 브라질이 앞서갔고, 13분에 네이마르가 히샬리송이 얻어낸 페널티킥으로 득점을 했다. 29분에는 히샬리송이 3-0을 만들었고, 루카스 파케타의 전반전 네 번째 득점으로 브라질의 득점을 완성했습니다.

손흥민은 알리송의 절묘한 세이브에 의해 거절당한 뒤 마르킨호스에 의해 골문 앞에서 두 번이나 차단당했다.그러나 한국은 76분에 백승호의 멋진 스트라이크를 통해 위안을 얻었다.

히샬리송은 현재 3골까지 득점하고 있으며, 토트넘의 팀 동료 크리스티안 로메로, 이반 페리시치, 에릭 다이어, 해리 케인, 위고 요리스와 8강전에서 올라가게된다. 브라질은 금요일 오후 3시에 이반 페리시치의 크로아티아와 맞붙는다.</p>
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

if (detail2.id === 2 ) {

    return (
   
        <div className='newsD'>
           <header className="Player_header">
           <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

        <div className="player-header-a">
            <p>NEWS</p>
        </div>

        <div className="player-header-t">
        <p>토트넘 핫스퍼의 소식을 가장 빠르고 정확하게 전해드립니다.</p>
        </div>
       </header>

<body className="News-body">


<div className="player-title">

<h2>" 케인의 고뇌 속에서 기록을 깬 요리스가 전진하다. "</h2>
<div className="title_underbar" > </div>
</div>

<div className="card-d-img">
 <img src={process.env.PUBLIC_URL + '/img/card/kane_card.png'}  class="card-img-top" alt="..."/>
</div> 
<div>
<p>휴고 요리스는 해리 케인이 결정적인 후반전을 놓치기 전에 페널티킥으로 한 골을 넣은 잉글랜드를 희생시키면서 조국이 월드컵 4강에 진출하는 것을 도우며 역대 프랑스 최고의 남자 선수가 된 것을 축하했다.</p>
</div>

<div>
<p>  토요일 알베이트 경기장에서 열린 극적이고 감정적인 밤, 두 참가국 모두 우리 선수들이 주장으로 나와 2-1 승리를 맛 볼 수 있었던 것은 요리스였고, 정신이 나간 삼 사자군단의 선수인 해리 케인은 에릭 다이어와 함께 세 사자가 경기에서 고개를 숙이면서 삼킬 수 있는 가장 쓴 알약을 먹었다.

경기장위 경기와는 별개로, 기록이 폭락했다. 요리스는 프랑스 국가대표로 143번째 시니어 출전을 기록하여 릴리앙 튀랑의 142회 기록을 추월했습니다. 해리는 53분 페널티킥을 성공시켰을 때 웨인 루니와 함께 잉글랜드 공동 최다 득점자가 되었습니다.

그러나 해리 케인은 6분 뒤 두 번째로 페널티킥을 성공시키며 치열한 8강전을 치렀는데 해리는 해리의 뼈아픈 기억이 될 것이다. 요리스의 첫 페널티킥이 프랑스를 상대로 한 오렐리앙 추아메니의 전반전을 취소시켰지만, 위고는 올리비에 지루가 2-1로 승리한 후, 대회 막판까지 그의 팀을 유지할 기회를 가졌다.

그러나 불행하게도,  그는 요리스가 올바른 방향으로 다이빙할 때 격렬하게 강타한 슛을 골대 위로 몰고 갔고, 오랜 시간의 정지 시간에도 불구하고 선수들은 이후 동점골을 찾지 못했다.</p>

</div>

<div className="card-d-img">
 <img src={process.env.PUBLIC_URL + '/img/card/kane_card-1.png'}  class="card-img-top" alt="..."/>
</div> 
<div>
<p>해리는 전반전에 요리스를 두 번 테스트했는데, 처음에는 박스 안에서 오른쪽으로 팽팽한 각도에서 그리고 나서 먼 곳에서 굴절된 노력으로 그를 테스트했고, 그는 또한 요리스가 일상적으로 구하기 위해 내려왔던 2번째 시간 초반에 낮은 왼발 시도를 발사했다.

두 선수 모두 상대편에서 풀타임을 소화했고, 이후 포옹을 나누었고, 에릭은 잉글랜드를 대신해 출전되지 않았다. 또한 벤치에는 잉글랜드의 코칭 스태프 중 한 명인 크리스 파월 아카데미 코칭 책임자도 있었습니다.

프랑스는 이제 수요일에 모로코와 마지막 네 경기에서 맞붙을 것이다. 선발 출전한 12명 중 우리 선수 3명이 남은 가운데 아르헨티나의 크리스티안 로메로와 크로아티아의 이반 페리시치가 화요일 다른 준결승에서 맞붙을 예정이다.</p>
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

if (detail2.id === 3 ) {

    return (
   
        <div className='newsD'>
           <header className="Player_header">
           <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

        <div className="player-header-a">
            <p>NEWS</p>
        </div>

        <div className="player-header-t">
        <p>토트넘 핫스퍼의 소식을 가장 빠르고 정확하게 전해드립니다.</p>
        </div>
       </header>

<body className="News-body">


<div className="player-title">

<h2>" 크리스티안 로메로, 월드컵 8강 진출. "</h2>
<div className="title_underbar" > </div>
</div>

<div className="card-d-img">
 <img src={process.env.PUBLIC_URL + '/img/card_romero.png'}  class="card-img-top" alt="..."/>
</div> 
<div>
<p>크리스티안 로메로는 아르헨티나가 토요일 저녁 호주로부터 승리를 거두며 월드컵 8강 진출을 위해 출발했다.</p>
</div>

<div>
<p> 

수비수는 라 알비셀레스트가 아흐마드 빈 알리 경기장에서 사커루를 2-1로 꺾고 지난 금요일 8강전에서 네덜란드를 상대로 군침이 도는 경기를 펼치며 풀 시프트를 소화했다.

아르헨티나는 전반 35분 리오넬 메시가 선제골을 넣자 완벽한 제구력을 보였고, 맨시티의 줄리안 알바레스가 매트 라이언의 실수로 57분에 2배 리드를 늘렸다.

러나 크레이그 굿윈의 스트라이크가 엔조 페르난데스의 홈으로 굴절되어 13분을 남기고 2-1을 만들었고 호주는 예상치 못한 동점자에게 두 번의 좋은 기회를 만들었습니다. 먼저 아지즈 베히치는 추가 시간에 골키퍼 에밀리아노 마르티네스가 선방하기 전에 리산드로 마르티네스의 수비에 의해 거부당했다.

앞서 네덜란드는 도하 칼리파 국제경기장에서 미국을 3-1로 꺾었다.</p>

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

if (detail2.id === 4 ) {

    return (
   
        <div className='newsD'>
           <header className="Player_header">
           <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

        <div className="player-header-a">
            <p>NEWS</p>
        </div>

        <div className="player-header-t">
        <p>토트넘 핫스퍼의 소식을 가장 빠르고 정확하게 전해드립니다.</p>
        </div>
       </header>

<body className="News-body">


<div className="player-title">

<h2>" 한국의 월드컵 진출에 눈물을 흘리는 손흥민, 그러나 벤탄 쿠르에게는 절망. "</h2>
<div className="title_underbar" > </div>
</div>

<div className="card-d-img">
 <img src={process.env.PUBLIC_URL + '/img/card_son.png'}  class="card-img-top" alt="..."/>
</div> 
<div>
<p>손흥민과 로드리고 벤탄쿠르에게 월드컵의 황홀함과 고뇌는 28일 카타르에서 열린 또 다른 극적인 오후였다.</p>
</div>

<div>
<p> 손흥민는 한국이 포르투갈을 상대로 늦게 승리한 후 2010년 이후 처음으로 16강에 진출한 것을 보고 기쁨의 눈물을 흘렸다. 우루과이와 가나의 결승전을 34분 만에 부상으로 출발한 벤탄쿠르로서는 아쉬운 상황이었다. 우루과이가 2-0으로 이겼지만 승점과 골 득실차에서 소니의 한국은 H조 2위로 골득실차를 기록했다.

다시 한번, 주장 손흥민은 가장 중요한 때에 그의 나라를 향해 나아갔다. 이번에는 득점선이 1-1로 뒤졌고, 그의 팀이 골을 필요로 하는 상황에서, 소니는 포르투갈의 골에서 완전히 90야드 떨어진 우루과이 코너에서 코너킥을 얻었다. 그는 트레이드마크인 스타일로 피치 속도를 높인 후 박스 가장자리에서 세 명의 수비수와 마주쳤고, 황희찬이 득점할 수 있는 완벽한 패스로 그들을 나누었습니다.

이 골로 우루과이를 제치고 한국은 2위로 올라갔고, 손흥민은 감격에 겨워 마지막 호루라기 소리에 쓰러졌다.

그러나, 우루과이가 2-0으로 앞서고 골득실차에서 2위로 다시 도약하기 위해서는 또 다른 골이 필요한 가나와의 경기가 아직 5분 남았다. 그러나 가나는 추가 시간 8분을 포함해 굳건히 버텼고, 한국 선수들과 팬들은 듀케이션 시티 스타디움에서 열광했다.

금요일 늦게에 브라질이 카메룬과의 조별 리그 마지막 경기에서 1-0으로 패했고, 이 날 히샬리송은 출전하지 않았다

그러나 브라질은 여전히 G조에서 1위를 차지했고 우리는 월요일(오후 7시) 브라질이 한국과 16강전에서 맞붙을 때 손흥민이 히샬리송과 맞붙을 것이라는 군침이 도는 전망을 가지고 있다.</p>

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

if (detail2.id === 5 ) {

    return (
   
        <div className='newsD'>
           <header className="Player_header">
           <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

        <div className="player-header-a">
            <p>NEWS</p>
        </div>

        <div className="player-header-t">
        <p>토트넘 핫스퍼의 소식을 가장 빠르고 정확하게 전해드립니다.</p>
        </div>
       </header>

<body className="News-body">


<div className="player-title">

<h2>" 선수들은 시즌 중반 휴식 후 훈련으로 복귀. "</h2>
<div className="title_underbar" > </div>
</div>

<div className="card-d-img">
 <img src={process.env.PUBLIC_URL + '/img/card_rest.png'}  class="card-img-top" alt="..."/>
</div> 
<div>
<p>우리 선수들 중 몇몇은 시즌 중반 휴식 후 오늘(11월 28일 월요일) 핫스퍼 웨이로 돌아왔다.</p>
</div>

<div>
<p> 

이번 겨울 월드컵에서 우리 선수 12명이 캠페인을 계속하고, 그 기간 동안 국제 친선경기에서 국가를 위한 각자의 임무에 따라 휴식을 시작하고자, 최근 2022년 데게르포르스 IF 에서 임대로 스웨덴 알스벤스칸 시즌을 마친 알피 화이트만을 포함한 한 무리의 선수들이 우리의 엔필드 기지에서 훈련을 재개했다.

선수단은 경기 시작 전 프리시즌 첫 날에 볼 수 있는 유사한 테스트와 훈련을 거치며 경기를 시작했다.
</p>

</div>

<div className="card-d-img">
 <img src={process.env.PUBLIC_URL + '/img/card/card_rest-1.jpeg'}  class="card-img-top" alt="..."/>
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


}
export default  Details2;