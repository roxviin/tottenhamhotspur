import React from "react";
import CardList from "./News/card";
import Slide from "../slide";
import Sponsor from "../sponsor";
import NavbarDarkExample from "../navbar";
import Photo from "./News/photo";



function Home  ()  {

    return(

  <div className="Home">
  

<header className="Home-header">

<NavbarDarkExample/>

</header>




<body className="Home-body">

<div className="Home-slide">
<Slide/>
</div>

<div className="home-title">

<h2> 토트넘 소식</h2>
<div className="title_underbar" > </div>
</div>

  <div className="H-c">
  <div className="Home-cardlist">
<CardList/>
</div>

  </div>

<div className="Home-btn">
<a class="btn btn-secondary btn-lg" href="/news" role="button">더보기</a>
</div>


<div className="home-title">

<h2> 토트넘 비디오</h2>
<div className="title_underbar" > </div>
</div>

<div className="H-c">
  <div className="Home-cardlist2">
<Photo/>
</div>

  </div>

<div className="Home-btn2">
<a class="btn btn-secondary btn-lg" href="/video" role="button">더보기</a>
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

export default Home;