import React from 'react'

const Pagination = ({page,setPage}) => {
    const left = '<';
    const right = '>';
  return (
    <div className='container pagination flex'>
        <div className="pagination-main flex">
            <div className="pageBtn"
            onClick={()=>{
                setPage(page == 1?page:page-1);
            }}><h2>{left}</h2></div>
            <div className="pageNumber">
                <h4>{page}</h4>
            </div>
            <div className="pageBtn" onClick={()=>{
                setPage(page+1);
            }}><h2>{right}</h2></div>
        </div>
    </div>
  )
}

export default Pagination