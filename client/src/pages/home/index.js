import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '@/components/Header'
import Heroimg from '../../../public/assests/logo.jpeg'
import Footer from '@/components/Footer'
import { Tabs } from 'antd';
export default function index() {
  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
    const [tabId, setTabId] = useState(1)
  const onChange = (key) => {
    setTabId(key)
  };
  return (
    <>
      <Header/>
        <section className='hero' style={{backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(122, 189, 31, 0.73)),url(${Heroimg.src})`}}>
          <div className='container'>
            <div className='request--box'>
         
            
             <div> Get Full Emergency Services</div>
              
                <div className='btn'>
                  
                  <a href='/login' >CLick to get service</a>
                </div>
            </div>
          </div>
        </section>
      <Footer/>
     </>
  )
}