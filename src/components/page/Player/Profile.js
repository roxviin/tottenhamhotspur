import React from 'react';
import { useParams } from 'react-router-dom';
import Sponsor from '../../sponsor';

// 프로필에서 사용 할 데이터
const profileData = {
   
    lloris: {
        id: 0,
        name: '위고 요리스',
        position: 'GK',
        num: '1',
        country: '프랑스, 니스',
        birth: '1986.12.26',
        play: '15',
        time:'1,350',
        Subbed_off: '0'
    },
    doherty: {
        id: 1,
        name: '맷 도허티',
        position: 'DF',
        num: '2',
        country: '아일랜드, 더블린',
        birth: '1992.01.16',
        play: '8',
        time:'347',
        Subbed_off: '2'
    },
    skipp: {
        id: 2,
        name: '올리버 스킵',
        position: 'GK',
        num: '4',
        country: '영국, 웰륀가든시티',
        birth: '2000.09.16',
        play: '6',
        time:'129',
        Subbed_off: '2'
    },
    hojbjerg: {
        id: 3,
        name: '피에르-에밀 호이비에르',
        position: 'MF',
        num: '5',
        country: '덴마크, 쾨벤하운',
        birth: '1995.08.05',
        play: '14',
        time:'1,245',
        Subbed_off: '1'
    },
    sanchez: {
        id: 4,
        name: '다빈슨 산체스',
        position: 'DF',
        num: '6',
        country: '콜롬비아, 칼로토',
        birth: '1996.06.12',
        play: '10',
        time:'530',
        Subbed_off: '3'
    },
    son: {
        id: 5,
        name: '손흥민',
        position: 'FW',
        num: '7',
        country: '대한민국, 춘천',
        birth: '1992.07.08',
        play: '13',
        time:'1,035',
        Subbed_off: '6'
    },
    richarlison: {
        id: 6,
        name: '히샬리송',
        position: 'FW',
        num: '9',
        country: '브라질, 노바 베네시아',
        birth: '1997.05.10',
        play: '1',
        time:'438',
        Subbed_off: '4'
    },
    kane: {
        id: 7,
        name: '해리 케인',
        position: 'WF',
        num: '10',
        country: '영국, 런던',
        birth: '1993.07.28',
        play: '15',
        time:'1,336',
        Subbed_off: '3'
    },
    gil: {
        id: 8,
        name: '브리안 힐',
        position: 'FW',
        num: '11',
        country: '스페인, 바르셀로나',
        birth: '2001.02.11',
        play: '1',
        time:'6',
        Subbed_off: '0'
    },
    royal: {
        id: 9,
        name: '에메르송 로얄',
        position: 'DF',
        num: '12',
        country: '브라질, 상파울루',
        birth: '1999.01.14',
        play: '12',
        time:'904',
        Subbed_off: '5'
    },
    perisic: {
        id: 10,
        name: '이반 페리시치',
        position: 'MF',
        num: '14',
        country: '크로아티아, 스플리트',
        birth: '1998.02.02',
        play: '15',
        time:'830',
        Subbed_off: '5'
    },
    dier: {
        id: 11,
        name: '에릭 다이어',
        position: 'DF',
        num: '15',
        country: '영국, 첼트넘',
        birth: '1994.02.15',
        play: '15',
        time:'1,285',
        Subbed_off: '1'
    },
    romero: {
        id: 12,
        name: '크리스티안 로메로',
        position: 'DF',
        num: '17',
        country: '아르헨티나, 코르도바',
        birth: '1998.04.27',
        play: '8',
        time:'658',
        Subbed_off: '1'
    },
    sessegnon: {
        id: 13,
        name: '라이언 세세뇽',
        position: 'DF',
        num: '19',
        country: '영국, 로햄턴',
        birth: '2000.05.18',
        play: '12',
        time:'663',
        Subbed_off: '5'
    },
    forster: {
        id: 14,
        name: '프레이저 포스터',
        position: 'GK',
        num: '20',
        country: '영국, 헥삼',
        birth: '1988.03.17',
        play: '0',
        time:'0',
        Subbed_off: '0'
   
    },
    kulusevski: {
        id: 15,
        name: '데얀 쿨루셉스키',
        position: 'MF',
        num: '21',
        country: '스웨덴, 스톡홀름',
        birth: '2000.04.25',
        play: '9',
        time:'614',
        Subbed_off: '6'
    },
    spence: {
        id: 16,
        name: '제드 스펜스',
        position: 'DF',
        num: '24',
        country: '영국, 런던',
        birth: '2000.08.09',
        play: '3',
        time:'3',
        Subbed_off: '0'
    },
    tanganga: {
        id: 17,
        name: '자펫 탕강가',
        position: 'DW',
        num: '25',
        country: '영국, 런던',
        birth: '1999.03.31',
        play: '0',
        time:'0',
        Subbed_off: '0'
    },
    moura: {
        id: 18,
        name: '루카스 모우라',
        position: 'MF',
        num: '27',
        country: '브라질, 상파울루',
        birth: '1992.08.13',
        play: '8',
        time:'93',
        Subbed_off: '0'
    },
    sarr: {
        id: 19,
        name: '파페 마타르 사르',
        position: 'MF',
        num: '29',
        country: '세네갈, 티아로이',
        birth: '2002.09.14',
        play: '0',
        time:'0',
        Subbed_off: '0'
    },
    bentancur: {
        id: 20,
        name: '로드리고 벤탄쿠르',
        position: 'MF',
        num: '30',
        country: '우루과이, 누에바 엘베시아',
        birth: '1997.06.25',
        play: '14',
        time:'1,184',
        Subbed_off: '5'
    },
    davies: {
        id: 21,
        name: '벤 데이비스',
        position: 'DF',
        num: '33',
        country: '웨일즈, 니스',
        birth: '1993.04.24',
        play: '12',
        time:'995',
        Subbed_off: '1'
    },
    lenglet: {
        id: 22,
        name: '클레망 랑글레',
        position: 'DF',
        num: '34',
        country: '프랑스, 보베',
        birth: '1995.06.17',
        play: '8',
        time:'573',
        Subbed_off: '3'
   
    },
    bissouma: {
        id: 23,
        name: '이브 비수마',
        position: 'MF',
        num: '38',
        country: '코트디부아르, 이시아',
        birth: '1996.08.30',
        play: '14',
        time:'602',
        Subbed_off: '4'
    },
    austin: {
        id: 24,
        name: '브랜던 오스틴',
        position: 'GK',
        num: '40',
        country: '영국, 헤멀헴프스테드',
        birth: '1999.01.08',
        play: '0',
        time:'0',
        Subbed_off: '0'
    },
    white: {
        id: 25,
        name: '하비 화이트',
        position: 'MF',
        num: '42',
        country: '영국, 메이드스톤',
        birth: '2001.09.19',
        play: '0',
        time:'0',
        Subbed_off: '0'
    },

    reguilon: {
        id: 26,
        name: '세르히오 레길론',
        position: 'DF',
        num: '3',
        country: '스페인, 마드리드',
        birth: '1996.12.16',
        play: '0',
        time:'0',
        Subbed_off: '0'
    },
    winks: {
        id: 27,
        name: '해리 윙크스',
        position: 'MF',
        num: '8',
        country: '영국, 헤멀헴프스테드',
        birth: '1996.02.02',
        play: '0',
        time:'0',
        Subbed_off: '0'
    },
    celso: {
        id: 28,
        name: '지오바니 로 셀소',
        position: 'MF',
        num: '18',
        country: '아르헨티나, 로사리오',
        birth: '1996.04.09',
        play: '0',
        time:'0',
        Subbed_off: '0'
   
    },
    rodon: {
        id: 29,
        name: '조 호든',
        position: 'DF',
        num: '22',
        country: '웨일스, 란지펠라치',
        birth: '1997.10.22',
        play: '0',
        time:'0',
        Subbed_off: '0'
    },
    ndombele: {
        id: 30,
        name: '탕기 은돔벨레',
        position: 'MF',
        num: '28',
        country: '프랑스, 롱쥬모',
        birth: '1996.12.28',
        play: '0',
        time:'0',
        Subbed_off: '0'
    },
    whiteman: {
        id: 31,
        name: '알피 화이트먼',
        position: 'GK',
        num: '42',
        country: '영국, 런던',
        birth: '1998.10.02',
        play: '0',
        time:'0',
        Subbed_off: '0'
    }

  
};

const Profile = () => {
  const { username } = useParams();
  const profile = profileData[username];

  if (profile.id === 0 ) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/lloris.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);


  }

  if (profile.id === 1) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/doherty.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);
    

  }


  if (profile.id ===2) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/skipp.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);

  }

  if (profile.id ===3) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/hojbjerg.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);
    

  }

  if (profile.id ===4) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/sanchez.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);

  }

  if (profile.id === 5 ) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/son.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);


  }

  if (profile.id === 6) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/richarlison.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);
    

  }


  if (profile.id ===7) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/kane.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);

  }

  if (profile.id ===8) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/gil.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);
    

  }

  if (profile.id ===9) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/royal.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);

  }
  if (profile.id === 10 ) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/perisic.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);


  }

  if (profile.id === 11) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/dier.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);
    

  }


  if (profile.id ===12) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/romero.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);

  }

  if (profile.id ===13) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/sessegnon.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);
    

  }

  if (profile.id ===14) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/forster.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);

  }
  if (profile.id === 15 ) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/kulusevski.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);


  }

  if (profile.id === 16) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/spence.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);
    

  }


  if (profile.id ===17) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/tanganga.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);

  }

  if (profile.id ===18) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/moura.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);
    

  }

  if (profile.id ===19) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/sarr.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);

  }
  if (profile.id === 20 ) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/bentancur.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);


  }

  if (profile.id === 21) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/davies.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);
    

  }


  if (profile.id ===22) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/lenglet.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);

  }

  if (profile.id ===23) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/bissouma.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);
    

  }

  if (profile.id ===24) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/austin.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);

  }

  if (profile.id === 25 ) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/white.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);


  }

  if (profile.id === 26) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/reguilon.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);
    

  }


  if (profile.id ===27) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/winks.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);

  }

  if (profile.id ===28) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/celso.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);
    

  }

  if (profile.id ===29) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/rodon.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);

  }
  if (profile.id === 30 ) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/ndombele.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);


  }

  if (profile.id === 31) {
    return (
        <div className='profile'>

            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>

            <div className="player-header-a">
                <p>TOTTENHAM HOTSPUR PLAYERS</p>
            </div>

            <div className="player-header-t">
            <p>토트넘 핫스퍼 선수단을 소개합니다.</p>
            </div>
           </header>

           <div className="profile-title">

            <p className='pro-num-t'>
            <h className='pro-num'>{profile.num}</h>
            <h className='pro-name' >{profile.name}</h>
            </p>
        

          
             </div>

             <body className='pro-body'>

             <div className='pro-img'>
            <img className='pro-p-img' src={process.env.PUBLIC_URL + '/img/players/whiteman.png'} alt='...'/>
             
             <div className='pro-p-date'>

            <div className='pro-p-data-title1'  ><h className='pro-p-data-t' >정보</h></div> 

            <div className='pro-p-data-G'>       
            <div className='pro-p-data2'>
                <p className='pro-p-info'>생년월일</p><p className='pro-p-info-c'>{profile.birth}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>출생지</p><p className='pro-p-info-c'>{profile.country}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>포지션</p><p className='pro-p-info-c'>{profile.position}  </p>
                </div>
            </div>
    
             </div>

             <div className='pro-p-play-date'>

            <div className='pro-p-data-title'><h className='pro-p-data-t' >선수 시즌 통계</h></div> 

            <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 수</p><p className='pro-p-info-c'>{profile.play}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>경기 시간</p><p className='pro-p-info-c'>{profile.time}  </p>
                </div>

                <div className='pro-p-data2'>
                <p className='pro-p-info'>교체</p><p className='pro-p-info-c'>{profile.Subbed_off}  </p>
                </div>

      
    
             </div>

           
            
          </div>
             </body>

             <footer className="Home-footer">

            <div className="sponsor">
            <Sponsor/>
            </div>

            </footer>

       
        </div>
);
    

  }


 




};

export default Profile;