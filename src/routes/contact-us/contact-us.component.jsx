// contact component to be shown here
//should have form to be submitted to contact

import './contact-us.styles.scss'
import ContactUsCard from '../../components/contact/contact.component'

const ContactUs = () => {
  return (
    <div>
      <div className="title-contact">Contact Us!</div>
      <ContactUsCard />
    </div>
  )
}

export default ContactUs