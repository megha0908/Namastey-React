import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
// import Shimmer from "./components/shimmer";

const Body = () => {
  // created state varibales//
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [showTopRatedOnly, setShowTopRatedOnly] = useState(false);
  const [originalList, setOriginalList] = useState([]);
  const [searchText, setSearchText]= useState("");
  const [filteredrestaurant, setFilteredrestaurant] = useState([]);

 
  const fetchData = async () => {
    const fulldata = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5787888&lng=77.06652&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await fulldata.json();
    let result = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

    if (result?.length > 0) {
      setListofRestaurants(result);
      setOriginalList(result);
      setFilteredrestaurant(result);
    }
  };

  const handleToggleTopRated = () => {
    if (showTopRatedOnly) {
      setListofRestaurants(originalList);
      setFilteredrestaurant(originalList);
    }
    else {
      const filteredList = originalList.filter((res) => {
        return res.info.avgRating > 4;
      });
      setListofRestaurants(filteredList);
      setFilteredrestaurant(filteredList);
       console.log(filteredList)
    }
    setShowTopRatedOnly(!showTopRatedOnly);
  };
  useEffect(() => {
    fetchData();
  }, [searchText]);

   
  

  return (
    <div className="body">
      <div className="filter">
        <div className="Search">
          <input type="text" className="searchbox" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);

          }}/>
            <button onClick={()=>{
              const filteredrestaurant = listofRestaurants.filter((res)=> res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredrestaurant(filteredrestaurant);
              console.log(setFilteredrestaurant)
            }}>Search</button>
        </div>


        <button className="filter-btn" onClick={handleToggleTopRated}>
          {showTopRatedOnly ? "Show All Restaurants" : "Top Rated Restaurants"}
          {console.log(showTopRatedOnly,"toprated")}
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants?.length > 0 ? (
          filteredrestaurant?.map((restaurant, index) => {
            return <RestaurantCard key={index} resdata={restaurant} />;
          })
        ) : (
          "No restaurants found"
        )}
      </div>
    </div>
  );
};

export default Body;
