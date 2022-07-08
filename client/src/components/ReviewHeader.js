import React, {useState, useEffect} from 'react';
import { useParams, Link, useHistory } from "react-router-dom";
import './RestaurantPage.css'
import NewRestaurantReviewForm from './NewRestaurantReviewForm';

// data is restaurant/setrestaurant
//  openReviewForm is setOpenRestaurantReviewForm
function ReviewHeader({reviews, data, reviewedUsers, openReviewForm, setOpenReviewForm, restaurant_id, worker_id, setShowReviews, showReviews, errors, setErrors, user}) {

    const renderUserPictures = reviewedUsers.map(user => {
        return <a key={user.id} class="mr-2" data-toggle="tooltip" data-placement="top"><img src={user.image} class="rounded-circle" width="45" alt="user"/></a>
    })

    const fiveStar = reviews.filter(review => review.star === 5)
    const fourStar = reviews.filter(review => review.star === 4)
    const threeStar = reviews.filter(review => review.star === 3)
    const twoStar = reviews.filter(review => review.star === 2)
    const oneStar = reviews.filter(review => review.star === 1)

    return (
        <>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="row">
                            <div class="col-sm-12 col-lg-4">
                                <div class="card-body">
                                    <h4 class="card-title">{!!restaurant_id ? data.name : data.first_name + " " + data.last_name}</h4>
                                    <h5 class="card-subtitle">Overview of Review</h5>
                                    <h2 class="font-medium mt-5 mb-0">{reviews.length}</h2>
                                    <span class="text-muted">This month we got 0 New Reviews</span>
                                    <div class="image-box mt-4 mb-4">
                                        {renderUserPictures}
                                    </div>
                                    <button href="#reviews" class="btn btn btn-info waves-effect waves-light" onClick={() => setShowReviews(!showReviews)}>Checkout All Reviews</button>
                                    <button href="#reviews" class="btn btn btn-outline-info waves-effect waves-light" style={{marginLeft: "10px"}} onClick={() => setOpenReviewForm(!openReviewForm)} open={openReviewForm} onClose={() => setOpenReviewForm(false)}><i class="fa-solid fa-plus"></i></button>
                                    <NewRestaurantReviewForm open={openReviewForm} onClose={() => setOpenReviewForm(false)} restaurant_id={restaurant_id} worker_id={worker_id} user={user} errors={errors} setErrors={setErrors}/>
                                </div>
                            </div>

                            <div class="col-sm-12 col-lg-8 border-left">
                                <div class="card-body">
                                    <ul class="list-style-none" style={{marginBottom:"0px"}}>
                                        <li class="mt-1">
                                            <div class="d-flex align-items-center">
                                                <i class="fa-solid fa-star fa-2x text-muted"></i><i class="fa-solid fa-star fa-2x text-muted"></i><i class="fa-solid fa-star fa-2x text-muted"></i><i class="fa-solid fa-star fa-2x text-muted"></i><i class="fa-solid fa-star fa-2x text-muted"></i>
                                                <div class="ml-2">
                                                    <span class="text-muted">{fiveStar.length} Reviews</span>
                                                </div>
                                            </div>

                                            <div class="progress" style={{marginTop: '5px'}}>
                                                <div class="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" style={{width: `${fiveStar.length / reviews.length * 100}%`}}>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="mt-4">
                                            <div class="d-flex align-items-center">
                                                <i class="fa-solid fa-star fa-2x text-muted"></i><i class="fa-solid fa-star fa-2x text-muted"></i><i class="fa-solid fa-star fa-2x text-muted"></i><i class="fa-solid fa-star fa-2x text-muted"></i><i class="fa-regular fa-star fa-2x text-muted"></i>
                                                <div class="ml-2">
                                                    <span class="text-muted">{fourStar.length} Reviews</span>
                                                </div>
                                            </div>
                                                
                                            <div class="progress" style={{marginTop: '5px'}}>
                                                <div class="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" style={{width: `${fourStar.length / reviews.length * 100}%`}}>
                                                </div>
                                            </div>
                                        </li>
                                                
                                        <li class="mt-4">
                                            <div class="d-flex align-items-center">
                                                <i class="fa-solid fa-star fa-2x text-muted"></i><i class="fa-solid fa-star fa-2x text-muted"></i><i class="fa-solid fa-star fa-2x text-muted"></i><i class="fa-regular fa-star fa-2x text-muted"></i><i class="fa-regular fa-star fa-2x text-muted"></i>
                                                <div class="ml-2">
                                                    <span class="text-muted">{threeStar.length} Reviews</span>
                                                </div>
                                            </div>
                                            <div class="progress" style={{marginTop: '5px'}}>
                                                <div class="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar" style={{width: `${threeStar.length / reviews.length * 100}%`}}>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="mt-4">
                                            <div class="d-flex align-items-center">
                                                <i class="fa-solid fa-star fa-2x text-muted"></i><i class="fa-solid fa-star fa-2x text-muted"></i><i class="fa-regular fa-star fa-2x text-muted"></i><i class="fa-regular fa-star fa-2x text-muted"></i><i class="fa-regular fa-star fa-2x text-muted"></i>
                                                    <div class="ml-2">
                                                        <span class="text-muted">{twoStar.length} Reviews</span>
                                                    </div>
                                            </div>
                                            <div class="progress" style={{marginTop: '5px'}}>
                                                <div class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style={{width: `${twoStar.length / reviews.length * 100}%`}}>
                                                </div>
                                            </div>
                                        </li>

                                        <li class="mt-4">
                                            <div class="d-flex align-items-center">
                                                <i class="fa-solid fa-star fa-2x text-muted"></i><i class="fa-regular fa-star fa-2x text-muted"></i><i class="fa-regular fa-star fa-2x text-muted"></i><i class="fa-regular fa-star fa-2x text-muted"></i><i class="fa-regular fa-star fa-2x text-muted"></i>
                                                    <div class="ml-2">
                                                        <span class="text-muted">{oneStar.length} Reviews</span>
                                                    </div>
                                            </div>
                                            <div class="progress" style={{marginTop: '5px'}}>
                                                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: `${oneStar.length / reviews.length * 100}%`}}>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ReviewHeader