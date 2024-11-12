import React, { useEffect, useState } from 'react'
import Card from './Card';
import './css/News.css';
import Footer from './Footer';
const News = ({category}) => {
    const [page ,setPage ] =useState(1);
    const api ="3bd19f3433c440e68ecaed975c5e2d4d"; 
    const authorization="3bd19f3433c440e68ecaed975c5e2d4d"
    // const url=`https://newsapi.org/v2/everything?q=${category}&apiKey=${api}&page=${page}&pagesize=20`
    const url=`https://newsapi.org/v2/everything?q=${category}&apiKey=${api}&page=${page}&pagesize=20`
    const url2=`https://newsapi.org/v2/top-headlines/sources?category=${category}&apiKey=${api}`
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
    },[category,page])

    const onNext = () => {
        console.log("first")
    }

    const onPrev = () => {
        console.log("Previous page");
    }

    const onPageContentSize = () => {
        console.log("Page content size changed");
    }

  return (
    <>
    <div className='card-cont container' >
        <h2 className='heading' >{category=='general'?`Latest News`:`News about ${category.toUpperCase()}`}</h2>
        {data.map((item,idx)=>{
            if(item.urlToImage)
            return <Card key={idx} item={item}  />
        })}
    </div>
    <Footer setPage={setPage} page={page} onPageContentSize={onPageContentSize} />
    </>
  )
}

export default News