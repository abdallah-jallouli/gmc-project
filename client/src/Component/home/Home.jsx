import React from 'react'
import Header from '../header/Header'
import Rent from './rent/Rent'
import Buy from './buy/Buy'
import Sell from './sell/Sell'
import Footer from './footer/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Rent/>
        <Sell/>
        <Buy/>
        <Footer/>
    </div>
  )
}

export default Home