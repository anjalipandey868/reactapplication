//props destructuring ( cleaning the code)
import resData from "../utils/mockData";
const RestaurantCard = (props) => {
    const {resData} = props;
const {name, cuisine, averageRating, costForTwo, deliveryTime, img} = resData;
    return (
        <div className="res-card">
            
            <img 
            className="res-img"
            alt = "restaurant"
            src={img}>
            </img>
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>{averageRating}</h4>
            <h4>Cost for Two{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
            
        </div>
    )
}

export default RestaurantCard;