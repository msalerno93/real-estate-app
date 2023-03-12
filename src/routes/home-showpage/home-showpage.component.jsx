//TO SHOW HOME-SHOWPAGE-CARD

//shows only one specific house listing with all information

import React from 'react'
import { Link } from 'react-router-dom'
import HouseShowpage from '../../components/house-showpage-card/house-showpage-card.component'
import './home-showpage.styles.scss'

const HomeShowpage = () => {
  return (
    <div className='homeshowpage-container'>
      <div>
        <Link className='back-button' to="/listings">Back to Listings</Link>
      </div>
      <HouseShowpage />
    </div>
  )
}

export default HomeShowpage