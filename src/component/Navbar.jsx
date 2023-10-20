import React, { useState } from 'react'

const Navbar = ({setCategory,setPage}) => {
const[search,setSearch] = useState('');

    return (
        <nav >
            <div className='main-nav container flex'>
                <div className="logoContainer">
                    <a href="#">
                        <img src="/assets/logo.svg" className='logo' />
                    </a>
                </div>
                <div className="navLinks">
                    <ul className='flex'>
                        <li className='hover-link nav-item' onClick={(e)=>{
                            setPage(1);
                            setCategory(e.target.innerText);
                        }}>IPL</li>
                        <li className='hover-link nav-item' onClick={(e)=>{
                            setPage(1);
                            setCategory(e.target.innerText)
                        }}>Finance</li>
                        <li className='hover-link nav-item' onClick={(e)=>{
                            setPage(1);
                            setCategory(e.target.innerText)
                        }}>Politics</li>
                        <li className='hover-link nav-item' onClick={(e)=>{
                            setPage(1);
                            setCategory(e.target.innerText)
                        }}>Technology</li>
                    </ul>
                </div>
                <div className="searchbar flex">
                    <input type="text" className="newsInput" placeholder='e.g. Science' onInput={(e)=>{
                        setSearch(e.target.value)
                    }}/>
                    <button className='searchBtn' onClick={()=>{
                        setPage(1);
                        setCategory(search)
                    }}>Search</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar