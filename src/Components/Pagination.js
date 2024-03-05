
import React from "react";
import { useState } from "react";
import './css/pagination.css'

const Pagination = ({ page, setPage, totalPage }) => {
      const [first ,setFirst] = useState(1)
      const [second,setSecond] =useState(2)
      const [third , setThrid] = useState(3)
      const [focus, setFocus] = useState({
        option1: false,
        option2: false,
        option3: false,
        all: false,
    });

    console.log(focus);
    return (
        <div className="App  ">
       <div style={{width:"100%", display:'flex', justifyContent:'center', marginBottom:'1rem'}} >
             {
                  first>3&&
               <button className='allBtn' onClick={()=>{
                setFirst(1)
               setSecond(2)
               setThrid(3)}} >
               
<svg xmlns="http://www.w3.org/2000/svg" height='1rem' viewBox="0 0 512 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>
               </button>
              }

              {
                first>3&&
                <button  className='allBtn'  onClick={()=>
                {
                  setFirst(first-3)
                  setSecond(second-3)
                  setThrid(third-3)
                }} > 
               <svg xmlns="http://www.w3.org/2000/svg" height='1rem' viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"/></svg>
               </button>

              }
               <button className='allBtn numbers' onClick={(e)=>{setPage(first)
              setFocus({option1:true,option2:false, option3:false, all:false})
              if(focus.option1)e.target.classList.add('focus')
              }} >
                {first }  
               </button>
             
            {
               totalPage>1 && <button className='allBtn numbers' onClick={()=>{setPage(second)
                setFocus({option1:false,option2:true, option3:false, all:false})} }  >
                {second}
               </button>
              } 
              {totalPage>2&&
               <button className='allBtn numbers' onClick={()=>{setPage(third) 
                setFocus({option1:false,option2:false, option3:true, all:false})}}>
                {third}
               </button>
              }
            
               {
                 third<totalPage &&
                 <button className='allBtn' onClick={()=>{if(page<totalPage-2)
                  {setFirst(first+3)
                  setSecond(second+3)
                 setThrid(third+3)}}} >
                <svg xmlns="http://www.w3.org/2000/svg" height='1rem' viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/></svg>
               </button>
              }
               {
                 third<totalPage-2 &&
                 <button className='allBtn' onClick={()=>{
                  setFirst(totalPage-2)
                  setSecond(totalPage-1)
                  setThrid(totalPage)
                 }} >
               <svg xmlns="http://www.w3.org/2000/svg" height='0.8rem' viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
               </button>
              }


       </div>
        </div>
    );
}

export default Pagination