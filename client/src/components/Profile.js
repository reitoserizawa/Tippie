import React from 'react'
import ProfileReviewItem from './ProfileReviewItem'
import './Profile.css'

function Profile ({user}) {

    const userRestaurantReviews = user.restaurant_reviews
    const userWorkerReviews = user.worker_reviews
    const userFavorites = user.favorites

    let renderRestaurantReview
    let renderWorkerReview
    let renderFavorites

    if (userRestaurantReviews.length !== 0) {
        renderRestaurantReview = userRestaurantReviews.map(review => {
        return <ProfileReviewItem key={review.id + 'key'} name={review.restaurant_info.name} review={review.review} object_id={review.restaurant_info.id} image={review.restaurant_info.image}/>
    })
    }

    if (userWorkerReviews.length !== 0) {
        renderWorkerReview = userWorkerReviews.map(review => {
        return <ProfileReviewItem key={review.id + 'key'} name={review.worker_info.first_name} review={review.review} object_id={review.worker_info.id} image={review.worker_info.image}/>
    })
    }

    if (userFavorites.length !== 0) {
        renderFavorites = userFavorites.map(favorite => {
        return <ProfileReviewItem key={favorite.id + 'key'} name={favorite.restaurant_info.name} review={favorite.restaurant_info.address} object_id={favorite.restaurant_info.id} image={favorite.restaurant_info.image}/>
    })
    }

    return (
        <>
        <div className="container bootdey">
            <div className="content-page">
                <div className="profile-banner" style={{background:'url("https://img.freepik.com/free-vector/abstract-background-with-monochrome-low-poly-design_1048-14453.jpg?w=2000")'}}>
		            <div className="col-sm-3 avatar-container">
			            <img src={user.image} className="img-circle profile-avatar" alt="User Picture"/>
		            </div>
	            </div>
                
                <div className="content">
		            <div className="row">
			            <div className="col-sm-3">				
				            <div className="text-center user-profile-2" style={{marginTop:"120px"}}>
					            <ul className="list-group">
                                    <li className="list-group-item">
    					                <h4>Whats'up, <b>{user.first_name}!</b></h4>
					                </li>
					                <li className="list-group-item">
						                <span className="badge">{userFavorites.length} <i className="fa-solid fa-heart"></i></span>
						                Favorites
					                </li>
					                <li className="list-group-item">
						                <span className="badge">{user.restaurant_reviews.length} <i className="fa-solid fa-utensils"></i></span>
						                Reviews
					                </li>
					                <li className="list-group-item">
						                <span className="badge">{user.worker_reviews.length} <i className="fa-solid fa-person"></i></span>
						                Reviews
					                </li>
					            </ul>
					        <div className="user-button">
						        <div className="row">
							        {/* <div className="col-lg-12">
								        <button type="button" className="btn btn-primary btn-sm btn-block"><i className="fa-solid fa-pen-to-square"></i> Edit Profile</button>
                                        
							        </div> */}
						        </div>
					        </div>
				        </div>
			        </div>

			    <div className="col-sm-9">
				    <div className="widget widget-tabbed">

					    <ul className="nav nav-tabs nav-justified" style={{marginTop:"50px"}}>
                            <li className="active" style={{marginRight:"10px"}}><a href="#favorite" data-toggle="tab"><i className="fa-solid fa-heart"></i> Favorite</a></li>
					        <li style={{marginRight:"10px"}}><a href="#restaurant-review" data-toggle="tab"><i className="fa-solid fa-utensils"></i> Restaurant Reviews</a></li>
                            <li style={{marginRight:"10px"}}><a href="#worker-review" data-toggle="tab"><i className="fa-solid fa-person"></i> Worker Reviews</a></li>
					        <li style={{marginRight:"10px"}}><a href="#about" data-toggle="tab"><i className="fa fa-user"></i> Profile</a></li>
					    </ul>

                        <div className="tab-content">

                            <div className="tab-pane animated active fadeInRight" id="favorite">
                                <div className="user-profile-content">
                                    <div className="the-timeline">
                                        {renderFavorites}
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane animated fadeInRight" id="restaurant-review">
                                <div className="user-profile-content">
                                    <div className="the-timeline">
                                        {renderRestaurantReview}
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane animated fadeInRight" id="worker-review">
                                <div className="user-profile-content">
                                        {renderWorkerReview}
                                </div>
                            </div>


                            <div className="tab-pane animated fadeInRight" id="about">
                                <div className="user-profile-content">
                                    <h5><strong>ABOUT</strong> ME</h5>
                                    <p>
                                    {user.bio}
                                    </p>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <h5><strong>CONTACT INFORMATION</strong></h5>
                                                <address>
                                                    <strong>Phone</strong>
                                                    <abbr title="Phone">{user.phone}</abbr>
                                                </address>
                                                <address>
                                                    <strong>Email</strong>
                                                    <a href="mailto:#">{user.email}</a>
                                                </address>
                                        </div>
                                    </div>
                                </div>
                            </div>

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

export default Profile