import React, { useEffect, useState } from 'react'
import Card from '../component/Card'
import Loading from '../component/Loading';
import axios from 'axios';
const Home = (props) => {
    const [newsArr, setNews] = useState([]);
    const [loading,setLoding] = useState(false);


      
  useEffect(() => {
    fetchNews();
}, [props.para.page,props.para.category])


   const fetchNews = async () => {
    try {
    setLoding(true);
      const res = await axios.get(`${props.para.url}${props.para.category}&max=12&page=${props.para.page}&apikey=${props.para.apiKey}`);
      setNews(res.data.articles);
      console.log(res.data.articles)
      setLoding(false);
    } catch (error) {
      setLoding(false);

      console.error('Api Error : ',error )
    }
  }
  
  if(loading){
    return <Loading/>
  }
    return (
        <main>
            <div className="cards-container container flex">
                {
               
                   newsArr?.map((news,index) => (
                    <Card news={news} key={index}/>
                 ))
                }
            </div>

        </main>
    )
}

export default Home