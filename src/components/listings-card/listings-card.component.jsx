// TO SHOW ALL HOUSE INFO - PIC, PRICE, ADDRESS, LEARN MORE(TO GO TO SHOWPAGE)

//to be displayed on listings route (page)

import HOME_INFO from "../../houseinfo";
import {Link} from 'react-router-dom'

import './listings-card.styles.scss'

const ListingsCard = () => {
  return (
    <div className="listings-container">
        <div className="sub-container">
        {HOME_INFO.map((info) => {
        return (
          <div className="information-container">
            <p className="address">{info.address}</p>
            <p className="price">${info.price}</p>
            <Link className="button" to='/showings'>
            <img className="image" src={info.imageURL} alt='home'/>
            </Link>
            <Link className="button" to='/showings'>Learn More!</Link>
          </div>
        );
      })}
        </div>
    </div>  )
}

export default ListingsCard