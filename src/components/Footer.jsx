import React from 'react';

const Footer = ({page, setPage}) => {
  return (
    <div className="footer">
      <button onClick={()=>setPage(page-1)} disabled={page==0} >Prev</button>
      <span>Created by <a href="https://github.com/Roshansuthar1105/">Roshan Suthar</a> </span>
      <button onClick={()=>setPage(page+1)} >Next</button>
      {/* <button onClick={onPageContentSize}></button> */}
    </div>
  );
};

export default Footer;

