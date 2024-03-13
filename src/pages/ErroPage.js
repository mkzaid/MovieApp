import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErroPage = () => {
    const navigate = useNavigate();
  return (
    <div style={{display:'flex', backgroundColor:'black',flexDirection:'column' , width:'100%' , height:'100vh', justifyContent:'center' , alignItems:'center' }} >
        <p style={{ display:'block', color:'red' , fontSize:'48px', letterSpacing:'1px' , fontWeight:'600'  }} > 404 Error .... Page Not Found</p>
      <p style={{display:'block',fontSize:'28px', color:'white'}} >Sorry for inconvinence. The current page is not available</p>
      <button   onClick={()=>navigate("/")} 
      style={{border:'none',background:'none' , color:'blue' , cursor:'pointer' , fontSize:'28px'  }}   >Go Back</button>
    </div>
  )
}

export default ErroPage