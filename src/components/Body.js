
import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useEffect, useState } from "react";

const Body =  () => {
     let [listofRestaurants, setlistofRestaurants] = useState([]);
     let [filteredRestaurants, setfilteredRestaurants] = useState([]);
     let [searchText , setsearchText] = useState(""); 
    useEffect(() => {fetchdata()}, []);

    const fetchdata = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();
        console.log(json);
        // Assuming the data you need is in json.data.cards
        setlistofRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setfilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)   
    };

    
   

    return (
        <div className="body">
            <div className="filter">
                <div className="search-bar">
                    <input 
                    type="text" 
                    placeholder="Search for restaurants" 
                    value ={searchText}
                    onChange={(e) => {setsearchText(e.target.value)}}/>
                    <button 
                    className="search-btn"
                    onClick={() => { 
                        const filteredRestaurants = listofRestaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredRestaurants(filteredRestaurants);
                    }}>
                    Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredRestaurants = listofRestaurants.filter((restaurant) => restaurant.info.avgRating > 4.5);
                    setlistofRestaurants(filteredRestaurants);
                }}>Filter button</button>
            </div>
            <div className="res-container"> 
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}
export default Body;