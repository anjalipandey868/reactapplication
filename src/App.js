//nested html structure in react
import React from "react"
import ReactDOM from "react-dom/client"
import Body from "./components/Body";
import Header from "./components/Header";
const root = ReactDOM.createRoot(document.getElementById("root"))



// const RestaurantCard = ({resData}) => {
//     return (
//         <div className="res-card">
            
//             <img 
//             className="res-img"
//             alt = "restaurant"
//             src={resData.img}>
//             </img>
//             <h3>{resData.name}</h3>
//             <h4>{resData.cuisine}</h4>
//             <h4>{resData.averageRating}</h4>
//             <h4>Cost for Two{resData.costForTwo}</h4>
//             <h4>{resData.deliveryTime}</h4>
            
//         </div>
//     )
// }




const AppLayout = () => {
    return (
        <div>
            <Header/>
            <Body/>
        </div>
    )
}

root.render(<AppLayout/>)

