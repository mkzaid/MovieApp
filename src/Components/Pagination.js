
import React from "react";
import { useState } from "react";
import './pagination.css'

const Pagination = ({ page, setPage, totalPage }) => {
      
    

    console.log(totalPage);
    return (
        <div className="App  ">
            <div style={{ width: "100%", display: 'flex', marginBottom: '2rem', justifyContent: 'center' }} >
                {
                    page > 1 &&
                    <button className='allBtn' onClick={() => setPage(1)} >

                        <svg xmlns="http://www.w3.org/2000/svg" height='1rem' viewBox="0 0 512 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z" /></svg>
                    </button>
                }

                {
                    page > 1 &&
                    <button className='allBtn' onClick={() => page > 1 && setPage(page - 1)} >
                        <svg xmlns="http://www.w3.org/2000/svg" height='1rem' viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" /></svg>
                    </button>

                }
                <button className='allBtn numbers' onClick={() => page > 1 && setPage(page - 1)} >
                    {page}
                </button>
                <button className='allBtn numbers' onClick={() => setPage(page + 1)}   >
                    {page + 1}
                </button>
                <button className='allBtn numbers' onClick={() => page < totalPage - 2 && setPage(page + 1)}>
                    {page + 2}
                </button>
                {
                    page < totalPage - 2 &&
                    <button className='allBtn' onClick={() => page < totalPage - 2 && setPage(page + 1)} >
                        <svg xmlns="http://www.w3.org/2000/svg" height='1rem' viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
                    </button>
                }
                {
                    page < totalPage - 2 &&
                    <button className='allBtn' onClick={() => setPage(totalPage - 2)} >
                        <svg xmlns="http://www.w3.org/2000/svg" height='0.8rem' viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" /></svg>
                    </button>
                }


            </div>
        </div>
    );
}

export default Pagination