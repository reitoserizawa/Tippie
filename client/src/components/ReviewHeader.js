import React from 'react';
import './RestaurantPage.css'
import NewRestaurantReviewForm from './NewRestaurantReviewForm';

function ReviewHeader({reviews, data, reviewedUsers, openReviewForm, setOpenReviewForm, restaurant_id, worker_id, setShowReviews, showReviews, errors, setErrors, user}) {

    const renderUserPictures = reviewedUsers.map((user, i) => {
        return <a key={user.id + i} className="mr-2" data-toggle="tooltip" data-placement="top"><img src={user.image} className="rounded-circle" width="45" alt="user"/></a>
    })

    const fiveStar = reviews.filter(review => review.star === 5)
    const fourStar = reviews.filter(review => review.star === 4)
    const threeStar = reviews.filter(review => review.star === 3)
    const twoStar = reviews.filter(review => review.star === 2)
    const oneStar = reviews.filter(review => review.star === 1)

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="row">
                            <div className="col-sm-12 col-lg-4">
                                <div className="card-body">
                                    <h4 className="card-title">{!!restaurant_id ? data.name : data.first_name + " " + data.last_name}</h4>
                                    <h5 className="card-subtitle">Overview of Review</h5>
                                    <h2 className="font-medium mt-5 mb-0">{reviews.length}</h2>
                                    <span className="text-muted">This month we got 0 New Reviews</span>
                                    <div className="image-box mt-4 mb-4">
                                        {renderUserPictures}
                                    </div>
                                    <button href="#reviews" className="btn btn btn-info waves-effect waves-light" onClick={() => setShowReviews(!showReviews)}>Checkout All Reviews</button>
                                    <button href="#reviews" className="btn btn btn-outline-info waves-effect waves-light" style={{marginLeft: "10px"}} onClick={() => setOpenReviewForm(!openReviewForm)} open={openReviewForm} onClose={() => setOpenReviewForm(false)}><i className="fa-solid fa-plus"></i></button>
                                    <NewRestaurantReviewForm open={openReviewForm} onClose={() => setOpenReviewForm(false)} restaurant_id={restaurant_id} worker_id={worker_id} user={user} errors={errors} setErrors={setErrors}/>
                                </div>
                            </div>

                            <div className="col-sm-12 col-lg-8 border-left">
                                <div className="card-body">
                                    <ul className="list-style-none" style={{marginBottom:"0px"}}>
                                        <li className="mt-1">
                                            <div className="d-flex align-items-center">
                                                <i className="fa-solid fa-star fa-2x text-muted"></i><i className="fa-solid fa-star fa-2x text-muted"></i><i className="fa-solid fa-star fa-2x text-muted"></i><i className="fa-solid fa-star fa-2x text-muted"></i><i className="fa-solid fa-star fa-2x text-muted"></i>
                                                <div className="ml-2">
                                                    <span className="text-muted">{fiveStar.length} Reviews</span>
                                                </div>
                                            </div>

                                            <div className="progress" style={{marginTop: '5px'}}>
                                                <div className="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar" style={{width: `${fiveStar.length / reviews.length * 100}%`}}>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="mt-4">
                                            <div className="d-flex align-items-center">
                                                <i className="fa-solid fa-star fa-2x text-muted"></i><i className="fa-solid fa-star fa-2x text-muted"></i><i className="fa-solid fa-star fa-2x text-muted"></i><i className="fa-solid fa-star fa-2x text-muted"></i><i className="fa-regular fa-star fa-2x text-muted"></i>
                                                <div className="ml-2">
                                                    <span className="text-muted">{fourStar.length} Reviews</span>
                                                </div>
                                            </div>
                                                
                                            <div className="progress" style={{marginTop: '5px'}}>
                                                <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated" role="progressbar" style={{width: `${fourStar.length / reviews.length * 100}%`}}>
                                                </div>
                                            </div>
                                        </li>
                                                
                                        <li className="mt-4">
                                            <div className="d-flex align-items-center">
                                                <i className="fa-solid fa-star fa-2x text-muted"></i><i className="fa-solid fa-star fa-2x text-muted"></i><i className="fa-solid fa-star fa-2x text-muted"></i><i className="fa-regular fa-star fa-2x text-muted"></i><i className="fa-regular fa-star fa-2x text-muted"></i>
                                                <div className="ml-2">
                                                    <span className="text-muted">{threeStar.length} Reviews</span>
                                                </div>
                                            </div>
                                            <div className="progress" style={{marginTop: '5px'}}>
                                                <div className="progress-bar progress-bar-striped bg-info progress-bar-animated" role="progressbar" style={{width: `${threeStar.length / reviews.length * 100}%`}}>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="mt-4">
                                            <div className="d-flex align-items-center">
                                                <i className="fa-solid fa-star fa-2x text-muted"></i><i className="fa-solid fa-star fa-2x text-muted"></i><i className="fa-regular fa-star fa-2x text-muted"></i><i className="fa-regular fa-star fa-2x text-muted"></i><i className="fa-regular fa-star fa-2x text-muted"></i>
                                                    <div className="ml-2">
                                                        <span className="text-muted">{twoStar.length} Reviews</span>
                                                    </div>
                                            </div>
                                            <div className="progress" style={{marginTop: '5px'}}>
                                                <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" style={{width: `${twoStar.length / reviews.length * 100}%`}}>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="mt-4">
                                            <div className="d-flex align-items-center">
                                                <i className="fa-solid fa-star fa-2x text-muted"></i><i className="fa-regular fa-star fa-2x text-muted"></i><i className="fa-regular fa-star fa-2x text-muted"></i><i className="fa-regular fa-star fa-2x text-muted"></i><i className="fa-regular fa-star fa-2x text-muted"></i>
                                                    <div className="ml-2">
                                                        <span className="text-muted">{oneStar.length} Reviews</span>
                                                    </div>
                                            </div>
                                            <div className="progress" style={{marginTop: '5px'}}>
                                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: `${oneStar.length / reviews.length * 100}%`}}>
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