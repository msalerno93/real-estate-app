// contact component to be shown here
//should have form to be submitted to contact

import './contact-us.styles.scss'
import ContactUsCard from '../../components/contact/contact.component'

const ContactUs = () => {
  return (
    <div>
      <div className="title-contact">Contact Us!</div>
      <p className='contact-header'>Fill out the information below and we will get back to you within 48 hours.</p>
      <ContactUsCard />
    </div>
  )
}

export default ContactUs