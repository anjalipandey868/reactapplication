
const resData = [
    {
        name: "The Italian Bistro",
        cuisine: "Italian",
        costForTwo: "$30",
        averageRating: 4.5,
        deliveryTime: "30 mins",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg"
    },
    {
        name: "Dragon's Delight",
        cuisine: "Chinese",
        costForTwo: "$25",
        averageRating: 4.2,
        deliveryTime: "25 mins",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg"
    },
    {
        name: "Spice Symphony",
        cuisine: "Indian",
        costForTwo: "$20",
        averageRating: 4.8,
        deliveryTime: "20 mins",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg"
    },
    {
        name: "Fiesta Mexicana",
        cuisine: "Mexican",
        costForTwo: "$28",
        averageRating: 4.3,
        deliveryTime: "35 mins",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg"
    },
    {
        name: "Sushi World",
        cuisine: "Japanese",
        costForTwo: "$40",
        averageRating: 4.7,
        deliveryTime: "40 mins",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg"
    },
    {
        name: "Thai Spice",
        cuisine: "Thai",
        costForTwo: "$22",
        averageRating: 4.4,
        deliveryTime: "30 mins",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg"
    },
    {
        name: "Le Gourmet",
        cuisine: "French",
        costForTwo: "$35",
        averageRating: 4.6,
        deliveryTime: "45 mins",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg"
    },
    {
        name: "Burger Haven",
        cuisine: "American",
        costForTwo: "$27",
        averageRating: 4.1,
        deliveryTime: "25 mins",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg"
    },
    {
        name: "Mediterranean Magic",
        cuisine: "Mediterranean",
        costForTwo: "$32",
        averageRating: 4.5,
        deliveryTime: "30 mins",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg"
    },
    {
        name: "Tapas Treat",
        cuisine: "Spanish",
        costForTwo: "$29",
        averageRating: 4.3,
        deliveryTime: "35 mins",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg"
    },
    {
        name: "Greek Feast",
        cuisine: "Greek",
        costForTwo: "$26",
        averageRating: 4.4,
        deliveryTime: "30 mins",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg"
    },
    {
        name: "Korean BBQ",
        cuisine: "Korean",
        costForTwo: "$31",
        averageRating: 4.6,
        deliveryTime: "40 mins",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg"
    },
    {
        name: "Pho Paradise",
        cuisine: "Vietnamese",
        costForTwo: "$24",
        averageRating: 4.2,
        deliveryTime: "25 mins",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg"
    },
    {
        name: "Lebanese Delights",
        cuisine: "Lebanese",
        costForTwo: "$33",
        averageRating: 4.5,
        deliveryTime: "35 mins",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg"
    },
    {
        name: "Turkish Treats",
        cuisine: "Turkish",
        costForTwo: "$28",
        averageRating: 4.3,
        deliveryTime: "30 mins",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg"
    }
];

export default resData;