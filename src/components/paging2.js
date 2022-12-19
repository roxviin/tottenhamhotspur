import React from "react";
import { Link } from "react-router-dom";


const Paging = () => {


  return (
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
    
    
    </li>
   <Link to='/video'><li class="page-item"><a class="page-link" href="#!">1</a></li></Link> 
   <Link to='/video/2'><li class="page-item"><a class="page-link" href="#!" >2</a></li></Link> 
  
    <li class="page-item">
     
   
    </li>
  </ul>
</nav>
  );
};

export default Paging;