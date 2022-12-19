import React from "react";
import { useParams } from "react-router";
import Sponsor from "../../sponsor";
import Photo2 from "./photo2";
import Paging2 from "../../paging2";



const news2Data = {
   
    1: {
        id: 0,
   
    },
    2: {
        id: 1,
   
    }
}

const News2D = () => {

    const { username } = useParams();
    const news2 = news2Data[username];

       
    if (news2.id === 1 ) {
        return (
            <div className='newsD'>
            <header className="Player_header">

            <img className="profile-h" src={process.env.PUBLIC_URL + '/img/header.png'}  alt="..."></img>


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
                    <Photo2/>
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
           );
 
        }

      
    }

    export default News2D;