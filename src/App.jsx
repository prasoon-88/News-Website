import React,{ useState } from "react";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Pagination from "./component/Pagination";
import Footer from "./component/Footer";
import './style/style.css'

function App() {
  const [category, setCategory] = useState('ipl');
  const [loading, setLoding] = useState(false);
  const [page,setPage] = useState(1);
  const apiKey = '1da3c640fc734f10c75c9998456d32e8';
  const url = 'https://gnews.io/api/v4/search?q='

  const para = {
    category,setLoding,apiKey,url,page
  }




  return (
    <>
      <Navbar setCategory={(setCategory)} setPage={(setPage)}/>
      {
        loading ?
          <Loading />
          : <Home para={para} />
      }
      <Pagination setPage={(setPage)} page={(page)}/>
      <Footer/>
    </>
  )
}

export default App
