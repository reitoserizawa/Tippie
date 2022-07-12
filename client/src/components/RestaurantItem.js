import React from 'react';
import {Link} from "react-router-dom";
import './RestaurantItem.css'

function RestaurantItem({id, name, address, category, price, image, user}) {

    return(
        <>
        <div className="col-xl-3 col-md-6 mb-4">
            <Link to={`/restaurants/${id}`}>
            <div className="card border-0 shadow">
                    <img src={image} className="card-img-top" alt={name} />
                
                <div className="card-body text-center">
                    <h5 className="card-title mb-0" >{name}</h5>
                    <div className="card-text text-black-50">
                        <span><i className="fa-solid fa-location-dot"></i> {address}</span>
                    </div>
                </div>
            </div>
            </Link>
        </div>
        </>
    )
}

export default RestaurantItem