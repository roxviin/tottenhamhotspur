import React from "react";
import { Link } from "react-router-dom";

function Photo2 () {
    return(

<div className="photo">



        <div className="photo-frame">
          
          <div className="card-p">
          <Link to = '/details/7'>
            <img className="card-photo" src={process.env.PUBLIC_URL + '/img/video/video7.png'}  alt="..."/>
            </Link>
            <div className="card-p-title">
              <p className="card-p-t">해리 케인, 산체스와 거짓말탐지기 해봤습니다 ㅋㅋ</p>
            </div>
          </div>

          <div className="card-p">
          <Link to = '/details/8'>
            <img className="card-photo" src={process.env.PUBLIC_URL + '/img/video/video8.png'}  alt="..."/>
            </Link>
            <div>
              <p className="card-p-t">한우에 반한 벤 데이비스와 자펫 탕강가 !</p>
            </div>
          </div>


          <div className="card-p">
          <Link to = '/details/9'>
            <img className="card-photo" src={process.env.PUBLIC_URL + '/img/video/video9.png'}  alt="..."/>
            </Link>
            <div>
              <p className="card-p-t">토트넘 레전드 선수들, 경기장에서 첫 삼겹살 먹방?!</p>
            </div>
          </div>



        </div>

        <div className="photo-frame">
          
          <div className="card-p">
          <Link to = '/details/10'>
            <img className="card-photo" src={process.env.PUBLIC_URL + '/img/video/video10.png'}  alt="..."/>
            </Link>
            <div>
              <p className="card-p-t">입맛은 아직 100% 한국인인 손흥민</p>
            </div>
          </div>

          <div className="card-p">
          <Link to = '/details/11'>
            <img className="card-photo" src={process.env.PUBLIC_URL + '/img/video/video11.png'}  alt="..."/>
            </Link>
            <div>
              <p className="card-p-t">손흥민과 케인의 쓸데없는 논쟁</p>
            </div>
          </div>

          <div className="card-p">
          <Link to = '/details/12'>
            <img className="card-photo" src={process.env.PUBLIC_URL + '/img/video/video5.png'}  alt="..."/>
            </Link>
            <div>
              <p className="card-p-t">벤탄쿠르, 손흥민에게 "어디 막아야 할 지 안다"</p>
            </div>
          </div>

       



        </div>
  
      </div>


    )
}

export default Photo2;