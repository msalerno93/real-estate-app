//to show HOME LISTINGS REALTORS CONTACT-US
//to be displayed on every route(page)
import {Link} from 'react-router-dom'
import './navbar.styles.scss'

const Navbar = () => {
  return (
    <div className='nav-bar'>
      <div className='title'> 
      <Link className='title-name' to='/'>Realtor Central</Link>
      </div>
      <Link className='nav-button' to="/">Home</Link>
      <Link className='nav-button' to="/listings">Listings</Link>
      <Link className='nav-button' to="/realtors">Realtors</Link>
      <Link className='nav-button' to="/contactus">Contact Us</Link>
    </div>
  )
}

export default Navbar