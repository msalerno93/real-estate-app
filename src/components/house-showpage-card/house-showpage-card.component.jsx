//TO SHOW INDIVIDUAL HOUSE WITH ALL NECESSARY INFO
// to be displayed on home-showpage (route)

import { useParams } from 'react-router-dom';

const HouseShowpage = () => {

  let { houseId } = useParams();


  return (
    <div>
      <div>
        {houseId}
      </div>
    </div>
  );
};

export default HouseShowpage;
