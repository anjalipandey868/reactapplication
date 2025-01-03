//props destructuring ( cleaning the code)
const RestaurantCard = (props) => {
    const {resData} = props;
    const baseURL = "https://media-assets.swiggy.com/swiggy/image/upload/"
//const {name, cuisine, averageRating, costForTwo, deliveryTime, img} = resData;
    return (
        <div className="res-card">
            
            <img 
            className="res-img"
            alt = "restaurant"
            src={baseURL.concat(resData.info.cloudinaryImageId)}>
            </img>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.cuisines.join(" ,")}</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime}min</h4>
            
        </div>
    )
}

export default RestaurantCard;