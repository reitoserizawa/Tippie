import React from 'react';
import {Link} from "react-router-dom";
import './RestaurantItem.css'

function RestaurantItem({id, name, address, category, price, image}) {

    return(
        <>
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow">
                <Link to={`/restaurants/${id}`}>
                    <img src={image} class="card-img-top" alt={name} />
                </Link>
                <div class="card-body text-center">
                    <h5 class="card-title mb-0" >{name}</h5>
                    <div class="card-text text-black-50">
                        <span><i class="fa-solid fa-location-dot"></i> {address}</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default RestaurantItem