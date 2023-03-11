// contact form maybe a little header
import './contact.styles.scss'


import ADDRESS from '../../houseinfo.json'
import AGENT from '../../realtors.json'

const ContactUsCard = () => {
  return (
    <div>
      <form className='contact-us-form-container' method='post' action="msalerno1993@gmail.com">
        <label className='label'>
          Name:
          <input className='text-input' type="text" name="name" />
        </label>
        <label className='label'>
          Email Address:
          <input className='text-input' type="email" name="name" />
        </label>
        <label className='label'>
          Phone Number:
          <input className='text-input' type="text" name="name" />
        </label>
        <label className='label'>
          Listing Address:
          <select className='text-input' type="text" name="name">
            {ADDRESS.map((add) => {
                return (
                <option key={add.id} value={add.id}>{add.address}</option>
                )
            })}
          </select>
        </label>
        <label className='label'>
          Listing Agent:
          <select className='text-input'  type="text" name="name">
            {AGENT.map((agent) => {
                return (
                <option key={agent.id} value={agent.id}>{agent.name}</option>
                )
            })}
          </select>
        </label>
        <button className='submit-button'> Submit </button>
      </form>
    </div>
  );
};

export default ContactUsCard;
