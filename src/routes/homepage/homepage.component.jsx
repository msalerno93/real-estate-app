//SHOWS SLIDESHOW OF PICS AND HAS INFO ABOUT COMPANY
//HAS BUTTON TO LISTINGS
//may not have component to render
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'

// import image1 from '../../asset-pics/House1/HousePic.png'
import PhotoSlider from '../../components/photo-slider/photo-slider.component'
// import { useState, useEffect } from 'react'

import './homepage.styles.scss'

const Homepage = () => {

  // const [counter, setCounter] = useState(0)  

  // useEffect(() => {
  //   const storedCount = localStorage.getItem('counter')
  //   if (storedCount) {
  //     setCounter(parseInt(storedCount))
  //   } else {
  //     setCounter(1)
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('counter', counter.toString())
  // }, [counter])
  
  

  return (
    <div className='homepage-container'>
      {/* <div>{counter}</div> */}
      <div className='image-container'>
        {/* <img className='images' src={image1} alt="House" /> */}
        <PhotoSlider />
      </div>
    </div>
  )
}

export default Homepage