import React, {useEffect} from 'react'
import RestaurantItem from './RestaurantItem'

function RestaurantContainer ({restaurants}) {

    const renderRestaurants = restaurants.map(restaurant => {
        return <RestaurantItem 
            key={restaurant.id}
            id={restaurant.id}
            name={restaurant.name} 
            address={restaurant.address} 
            category={restaurants.category}
            price={restaurant.price} 
            image={restaurant.image}  
            />
    })

    return(
        <>
        <div className="container" style={{height: '50vh'}}>
            <div class="row">
                <div class="col-6 col-md-4">
                    <h1 class="text-center">City</h1>
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>
                <div class="col-6 col-md-4">
                    <h1 class="text-center">Category</h1>
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>
                <div class="col-6 col-md-4">
                    <h1 class="text-center">Price</h1>
                    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>
            </div>
        </div>
        <hr />
        <div className="container">
            <div class="row">
                {renderRestaurants}
            </div>
        </div>
        </>
    )
}

export default RestaurantContainer