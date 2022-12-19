import React from "react";
import { Link } from "react-router-dom";

function Photo () {
    return(

<div className="photo">



        <div className="photo-frame">
          
          <div className="card-p">
          <Link to = '/details/1'>
            <img className="card-photo" src={process.env.PUBLIC_URL + '/img/video/video1.png'}  alt="..."/>
            </Link>
            <div className="card-p-title">
              <p className="card-p-t">카타르 월드컵, 케인 울고, 요리스 웃었다</p>
            </div>
          </div>

          <div className="card-p">
          <Link to = '/details/2'>
            <img className="card-photo" src={process.env.PUBLIC_URL + '/img/video/video2.png'}  alt="..."/>
            </Link>
            <div>
              <p className="card-p-t">카타르 월드컵, 손흥민 위로한 히샬리송</p>
            </div>
          </div>


          <div className="card-p">
          <Link to = '/details/3'>
            <img className="card-photo" src={process.env.PUBLIC_URL + '/img/video/video3.png'}  alt="..."/>
            </Link>
            <div>
              <p className="card-p-t">카타르 월드컵, 한 시간 같던 1분 1초</p>
            </div>
          </div>



        </div>

        <div className="photo-frame">
          
          <div className="card-p">
          <Link to = '/details/4'>
            <img className="card-photo" src={process.env.PUBLIC_URL + '/img/video/video4.png'}  alt="..."/>
            </Link>
            <div>
              <p className="card-p-t">로드리고 벤탄쿠르 스페셜<br/>(Rodrigo Bentancur Special)</p>
            </div>
          </div>

          <div className="card-p">
          <Link to = '/details/5'>
            <img className="card-photo" src={process.env.PUBLIC_URL + '/img/video/video12.png'}  alt="..."/>
            </Link>
            <div>
              <p className="card-p-t">브라질 히샬리송 환상적인 터닝슛..<br/>20년 만에 우승 정조준</p>
            </div>
          </div>


          <div className="card-p">
          <Link to = '/details/6'>
            <img className="card-photo" src={process.env.PUBLIC_URL + '/img/video/video6.png'}  alt="..."/>
            </Link>
            <div>
              <p className="card-p-t">해리 케인에게 '이것'을 선물로 줬는데<br/>반응이...?</p>
            </div>
          </div>



        </div>
  
      </div>


    )
}

export default Photo;