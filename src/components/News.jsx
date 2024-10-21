import React, { useEffect, useState } from 'react'
import Card from './Card';
import Navbar from './NavBar.jsx';
import './css/News.css';
const News = ({category}) => {
    const search = "cricket";
    const api ="3bd19f3433c440e68ecaed975c5e2d4d"; 
    const authorization="3bd19f3433c440e68ecaed975c5e2d4d"
    const url=`https://newsapi.org/v2/everything?q=${category}&apiKey=${api}`
    const url2=`https://newsapi.org/v2/top-headlines/sources?category=${category}apiKey=${api}`
    const [data , setdata]=useState([]);
    console.log(url);
    const getdata = async ()=>{
        try {
            const response = await fetch(url);
            if(response.ok){
                const res =await response.json();
                setdata(res.articles);
            }
        } catch (error) {
            console.log("error",error);
        }
    }
    useEffect(()=>{
        getdata();
    },[category])
  return (
    <>
    <Navbar/>
    <div className='card-cont' >
        {data.map((item,idx)=>{
            if(item.urlToImage)
            return <Card key={idx} item={item}  />
        })}
    </div>
    </>
  )
}

export default News