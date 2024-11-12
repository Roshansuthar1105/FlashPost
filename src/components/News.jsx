import React, { useEffect, useState } from 'react'
import Card from './Card';
import './css/News.css';
import Footer from './Footer';
const News = ({category}) => {
    const [page ,setPage ] =useState(1);
    const [data , setdata]=useState([]);
    const api ="3bd19f3433c440e68ecaed975c5e2d4d"; 
    const url=`https://newsapi.org/v2/everything?q=${category?category:'technology'}&apiKey=${api}&page=${page}&pagesize=20`
    const getdata = async ()=>{
        try {
            const response = await fetch(url, {
                method: 'GET'
            });
            if(response.ok){
                const res =await response.json();
                setdata(res.articles);
                console.log("resps is ok",res.articles);
            }
        } catch (error) {
            console.log("error",error);
        }
    }
    useEffect(()=>{
        getdata();
        console.log("data recieved",data);
    },[category,page])

  return (
    <>
    <div className='card-cont container' >
        <h2 className='heading' >{category=='general'?`Latest News`:`News about ${category.toUpperCase()}`}</h2>
        {data && data.map((item,idx)=>{
            if(item.urlToImage)
            return <Card key={idx} item={item}  />
        })}
    </div>
    <Footer setPage={setPage} page={page}/>
    </>
  )
}

export default News
