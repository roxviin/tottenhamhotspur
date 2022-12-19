import React from "react";
import { useParams } from "react-router";
import Paging from "../../paging";
import Sponsor from "../../sponsor";

import CardList2 from "./card2";




const newsData = {
   
    1: {
        id: 0,
   
    },
    2: {
        id: 1,
   
    },
    3: {
        id: 2,
   
    },
    4: {
        id: 3,
   
    }
}

const NewsD = () => {

    const { username } = useParams();
    const news = newsData[username];
  

         if (news.id === 1 ) {
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
     
              <body>
   
   
               <div className="player-title">
   
                   <h2>토트넘 소식</h2>
                   <div className="title_underbar" > </div>
                   </div>
                   <div className="Home-cardlist">
                    <CardList2/>
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
               );
     
            }

           
      
    }

    export default NewsD;