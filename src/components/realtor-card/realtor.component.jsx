//COMPONENT TO HAVE ALL REALTOR INFO - NAME, YEARS AS REALTOR, PIC, BIO

//to be displayed on realtors route(page)

import REALTORS from '../../realtors.json'

const RealtorCard = () => {
  return (
    <div>
        {REALTORS.map((e) => e.name)}
    </div>
  )
}

export default RealtorCard