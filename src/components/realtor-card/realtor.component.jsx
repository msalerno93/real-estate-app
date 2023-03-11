//COMPONENT TO HAVE ALL REALTOR INFO - NAME, YEARS AS REALTOR, PIC, BIO

//to be displayed on realtors route(page)

import REALTORS from "../../realtors.json";

import "./realtor.styles.scss";

const RealtorCard = () => {
  return (
    <div className="realtor">
      {REALTORS.map((e) => {
        return (
          <div className="title">
            <div className="realtor-info-container">
              <div className="items-container">
                <img className="image" src={e.imageURL} alt="home" />
                <p className="name">{e.name}</p>
                <p className="years">Years in Real Estate: {e.years} Years</p>
                <p className="bio">{e.bio}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RealtorCard;
