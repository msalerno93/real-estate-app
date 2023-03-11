//THIS COMPONENT IS THE PAGE FOR ALL LISTED REALTORS / BIOS/PICS ETC

//realtor card to be displayed here//


import RealtorCard from '../../components/realtor-card/realtor.component'
import './realtors.styles.scss'

const RealtorsPage = () => {
  return (
    <div>
      <p className='title-realtor'>Checkout Our Realtors</p>
      <RealtorCard />
    </div>
  )
}

export default RealtorsPage