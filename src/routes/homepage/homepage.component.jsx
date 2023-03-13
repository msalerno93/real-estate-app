//SHOWS SLIDESHOW OF PICS AND HAS INFO ABOUT COMPANY
//HAS BUTTON TO LISTINGS
//may not have component to render

import PhotoSlider from '../../components/photo-slider/photo-slider.component'


import './homepage.styles.scss'

const Homepage = () => {
  

  return (
    <div className='homepage-container'>
      <div className='image-container'>
        <PhotoSlider />
      </div>
    </div>
  )
}

export default Homepage