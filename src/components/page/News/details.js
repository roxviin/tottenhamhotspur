import React from "react";
import { useParams } from "react-router";




const detailData = {
   
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
    },

    7: {
        id: 6
    
    },

    8:{
        id:7
    },

    9: {
        id: 8
    
    },

    10:{
        id:9
    },

    11: {
        id: 10
    
    },

    12:{
        id:11
    }

}

const Details = () => {

    const { username } = useParams();
    const detail = detailData[username];
  
    if (detail.id === 0 ) {

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
    
            
<body>
<div className="player-title">

<h2>토트넘 비디오</h2>
<div className="title_underbar" > </div>
</div>



<div className="video" >
<iframe className='i' src="https://www.youtube.com/embed/wPLGp9AyKHU"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>
   </div>

</body>

</div>




)

}

if (detail.id === 1 ) {

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

        
<body>
<div className="player-title">

<h2>토트넘 비디오</h2>
<div className="title_underbar" > </div>
</div>



<div className="video" >
<iframe className='i' src="https://www.youtube.com/embed/XpKz-PMf1a0" 
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>
</div>

</body>

</div>

)

}
  
if (detail.id === 2 ) {

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

        
<body>
<div className="player-title">

<h2>토트넘 비디오</h2>
<div className="title_underbar" > </div>
</div>



<div className="video" >
<iframe className='i' src="https://www.youtube.com/embed/9PDY0-D_K1A"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>
</div>

</body>

</div>

)

}
      
if (detail.id === 3 ) {

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

        
<body>
<div className="player-title">

<h2>토트넘 비디오</h2>
<div className="title_underbar" > </div>
</div>



<div className="video" >
<iframe className='i' src="https://www.youtube.com/embed/shS03awXYIM"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>
</div>

</body>

</div>




)

}

if (detail.id === 4 ) {

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

    
<body>
<div className="player-title">

<h2>토트넘 비디오</h2>
<div className="title_underbar" > </div>
</div>



<div className="video" >
<iframe className='i' src="https://www.youtube.com/embed/zh_iu7POhls"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>
</div>

</body>

</div>

)

}

if (detail.id === 5 ) {

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

    
<body>
<div className="player-title">

<h2>토트넘 비디오</h2>
<div className="title_underbar" > </div>
</div>



<div className="video" >
<iframe className='i' src="https://www.youtube.com/embed/9otjcaIX8Uc"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>
</div>

</body>

</div>

)

}    


if (detail.id === 6 ) {

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

        
<body>
<div className="player-title">

<h2>토트넘 비디오</h2>
<div className="title_underbar" > </div>
</div>



<div className="video" >
<iframe className='i' src="https://www.youtube.com/embed/aPAUOkCq7f8"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>
</div>

</body>

</div>




)

}

if (detail.id === 7 ) {

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

    
<body>
<div className="player-title">

<h2>토트넘 비디오</h2>
<div className="title_underbar" > </div>
</div>



<div className="video" >
<iframe className='i' src="https://www.youtube.com/embed/-QtT6URyKE4"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>
</div>

</body>

</div>

)

}

if (detail.id === 8 ) {

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

    
<body>
<div className="player-title">

<h2>토트넘 비디오</h2>
<div className="title_underbar" > </div>
</div>



<div className="video" >
<iframe className='i' src="https://www.youtube.com/embed/XU-mtn0aDow"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>
</div>

</body>

</div>

)

}
  
if (detail.id === 9 ) {

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

    
<body>
<div className="player-title">

<h2>토트넘 비디오</h2>
<div className="title_underbar" > </div>
</div>



<div className="video" >
<iframe className='i' src="https://www.youtube.com/embed/rOCVOr130X8"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>
</div>

</body>

</div>




)

}

if (detail.id === 10 ) {

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


<body>
<div className="player-title">

<h2>토트넘 비디오</h2>
<div className="title_underbar" > </div>
</div>



<div className="video" >
<iframe className='i' src="https://www.youtube.com/embed/tw8uNhA6_fI"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>
</div>

</body>

</div>

)

}

if (detail.id === 11 ) {

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


<body>
<div className="player-title">

<h2>토트넘 비디오</h2>
<div className="title_underbar" > </div>
</div>



<div className="video" >
<iframe className='i' src="https://www.youtube.com/embed/EyetAcWemNw"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>
</div>

</body>

</div>

)

}    

}
    export default Details;