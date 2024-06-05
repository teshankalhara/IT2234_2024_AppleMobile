import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"}/>
      <HorizontalCardProduct category={"mobiles"} heading={"Popular's Mobiles"}/>

      <VerticalCardProduct category={"watches"} heading={"Mobiles"}/>
      <VerticalCardProduct category={"macbook"} heading={"MacBooks"}/>
      <VerticalCardProduct category={"ipad"} heading={"Ipads"}/>
      <VerticalCardProduct category={"chargers"} heading={"Chargers"}/>
      <VerticalCardProduct category={"cables"} heading={"Cables"}/>
      <VerticalCardProduct category={"covers"} heading={"Covers"}/>
    </div>
  )
}

export default Home