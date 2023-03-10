// TO SHOW ALL HOUSE INFO - PIC, PRICE, ADDRESS, LEARN MORE(TO GO TO SHOWPAGE)

//to be displayed on listings route (page)

import HOME_INFO from "../../houseinfo";
import {Link} from 'react-router-dom'

import './listings-card.styles.scss'

const ListingsCard = () => {

  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
  
  return (
    <div className="listings-container">
        <div className="sub-container">
        {HOME_INFO.map((info) => {
        return (
          <div key={info.id} className="information-container">
            <p className="address">{info.address}</p>
            <p className="bedrooms">Bedrooms: {info.bedroom} Bathrooms: {info.bathroom}</p>
            <p className="price">{USDollar.format(info.price)}</p>
            <div className="box-shadow">
            <Link className="button" to={`/showings/${info.id}`}>
            <img className="image" src={info.imageURL1} alt='home'/>
            <Link className="button" to={`/showings/${info.id}`}>Click For Full Listing</Link>
            </Link>
            </div>
          </div>
        );
      })}
        </div>
    </div>  )
}

export default ListingsCard