import React from 'react'
import RestaurantItem from './RestaurantItem'

function RestaurantContainer ({restaurants, user}) {

    const renderRestaurants = restaurants.map(restaurant => {
        return <RestaurantItem 
            key={restaurant.id + 'key'}
            id={restaurant.id}
            name={restaurant.name} 
            address={restaurant.address} 
            category={restaurants.category}
            price={restaurant.price} 
            image={restaurant.image}  
            user={user}
            />
    })

    return(
        <>
        <div className="container" style={{height: '50vh'}}>
            <div className="row">
                <div className="col-6 col-md-4">
                    <h1 className="text-center">City</h1>
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>
                <div className="col-6 col-md-4">
                    <h1 className="text-center">Category</h1>
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>
                <div className="col-6 col-md-4">
                    <h1 className="text-center">Price</h1>
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>
            </div>
        </div>
        <hr />
        <div className="container">
            <div className="row">
                {renderRestaurants}
            </div>
        </div>
        </>
    )
}

export default RestaurantContainer