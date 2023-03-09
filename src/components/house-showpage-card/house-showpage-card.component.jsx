//TO SHOW INDIVIDUAL HOUSE WITH ALL NECESSARY INFO
// to be displayed on home-showpage (route)
import HOME_INFO from "../../houseinfo";

const HouseShowpage = () => {
  return (
    <div>
      {HOME_INFO.map((info) => {
        return (
          <div>
            <h1>{info.address}</h1>
            <p>{info.price}</p>
            <img src={info.imageURL} alt='home'/>
          </div>
        );
      })}
    </div>
  );
};

export default HouseShowpage;
