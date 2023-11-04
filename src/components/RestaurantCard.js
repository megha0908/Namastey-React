import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  // const { resdata } = props;
  // console.log(resdata.data.avgRating)

  // const { cloudinaryImageId, name, cuisines, costForTwoString, avgRating } = resdata?.data 
  // console.log(resdata.data,"name");
  // console.log(props,"props")

  return (
    <div className='card'>
      <img src={CDN_URL +props?.resdata?.info?.cloudinaryImageId}/>
      <div className="card_detail">
        <h2>{props?.resdata?.info?.name}</h2>
        {/* <h2>{props?.resdata?.info?.avgRating}</h2> */}
        <p className="cuisine">{props?.resdata?.info?.cuisines.join(", ")} </p>
      <span>
        <h4><i className='fa-solidfa-star'>★</i>
          {props?.resdata?.info?.avgRating}
        </h4>
        <h4>{props?.resdata?.info?.deliveryTime}</h4>
        <h4>{props?.resdata?.info?.costForTwo}</h4>
      </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
