
import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
     let [listofRestaurants, setlistofRestaurants] = useState(resData);
    
   

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredRestaurants = listofRestaurants.filter((restaurant) => restaurant.averageRating > 4.5);
                    setlistofRestaurants(filteredRestaurants);
                }}>Filter button</button>
            </div>
            <div className="res-container"> 
                {listofRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}
export default Body;