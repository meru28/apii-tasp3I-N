import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import imgSection3 from '../images/Rectangle 10.png'


export default function Carousel({ prop }) {

  const renderImageSwiper = () => {
    var listImage = prop.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <figure className='overflow-hidden rounded-2xl aspect-[16/11]'>
            <img className='w-full h-full object-cover' src={item.image} alt="" />
          </figure>
        </SwiperSlide>
      )
    }) 
    return listImage
  }

  const [cards, setCards] = useState(prop)
  console.log('cek cards ::', cards)
  const handleLeftClick = (isLeft) => {
    const prevState = [...cards]
    // find inactive card index - top
    const nextCardIdx = prevState.filter((ft) => ft.active === true)
      .sort((a, b)  => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx
    // reset
    prevState.find((f) => f.active === false).active = true
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false
    // maximize pos
    prevState.find((f) => f.idx === nextCardIdx).pos =
      Math.max.apply(null, prevState.map((o) => o.pos)) + 1
    // update state
    setCards(prevState)
  }

  const handleRightClick = () => {
    const prevState = [...cards]
    // find next inactive card index - bottom
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
      .pop(1).idx
    // minimize pos
    prevState.find((f) => f.active === false).pos =
      Math.min.apply(
        null,
        prevState.map((o) =>  o.pos)) - 1
    // reset
    prevState.find((f) => f.active === false).active = true
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false

    // update state
    setCards(prevState)
  }

  const renderImage = () => {
    var listImage = cards
      .filter((f) => f.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
      .map((card, index) => {
        return (
          <div className='flex justify-center items-center'>
            <figure key={index} className='overflow-hidden rounded-2xl'>
              <img className='w-full' src={card.image} alt="" />
            </figure>
          </div>
        )
      })
    return listImage
  }

  return (
    <>
      <div className=''>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={1}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          >
          {renderImageSwiper()}
        </Swiper>
        {/* <div className='cursor-pointer inline-block' onClick={() => handleLeftClick()}>
          <i className='icon-left-open' />
        </div> */}
        {/* {renderImage()} */}
        {/* <div className='cursor-pointer inline-block' onClick={() => handleRightClick()}>
          <i className='icon-right-open' /> */}
        {/* </div> */}
      </div>
    </>
  )
}
