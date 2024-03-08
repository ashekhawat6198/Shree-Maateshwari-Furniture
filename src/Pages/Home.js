import React from 'react'
import Hero from '../Components/Hero'
import DeliveryInfo from '../Components/DeliveryInfo'
import Hero2 from '../Components/Hero2'
import LivingRoom from '../Components/LivingRoom'
import Collection from "../Components/Collection";
import Reviews from '../Components/Reviews';
import Ad1 from '../Components/Ad1'
import HomeDecor from '../Components/HomeDecor';
import DinningRoom from '../Components/DinningRoom';
import KidsRoom from '../Components/KidsRoom';

function Home() {
  return (
    <div>
      <Hero/>
      <DeliveryInfo/>
      <Hero2/>
      <Collection/>
      <LivingRoom/>
      <Ad1/>
      <HomeDecor/>
      <DinningRoom/>
      <KidsRoom/>
      <Reviews/>

    </div>
  )
}

export default Home