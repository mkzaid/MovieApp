

const Pagination = ({page , setPage , totalPages}) => {
      const handleDecrement = ()=>{
         if(page>1){
                 setPage(page-1);
         }
      }
       console.log(totalPages);
    return (
        <div>
            <div style={{display:'flex', flexDirection:'row',width:'100%',justifyContent:'center' ,marginBottom:'2rem' }} >
                <button
                          style={
                        {
                            width:'3rem', height:'3rem', borderRadius:'50%', border:'none',margin:'0px 10px', cursor:'pointer'
                        }
                          }
                onClick={handleDecrement} >
                    <svg xmlns="http://www.w3.org/2000/svg" height='1.3rem' fill='black' viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
                </button>
                <p style={{textAlign:'center',marginTop:'.9rem'}} >
                    {page}
                </p>
                <button
                style={{
                    width:'3rem', height:'3rem', borderRadius:'50%', border:'none', margin:'0px 10px', cursor:'pointer'
                }}
                onClick={()=>setPage(page+1)} >
                    <svg xmlns="http://www.w3.org/2000/svg" height='1.3rem' viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                </button>
            </div>

        </div>
    )
}

export default Pagination