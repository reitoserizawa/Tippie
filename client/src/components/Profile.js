import React from 'react'
import ProfileReviewItem from './ProfileReviewItem'
import './Profile.css'

function Profile ({user}) {

    const userReviews = user.restaurant_reviews

    const renderReview = userReviews.map(review => {
        return <ProfileReviewItem name={review.restaurant_info.name} review={review.review}/>
    })

    return (
        <>
        <div class="container bootdey">
            <div class="content-page">
                {/* background picture */}
                <div class="profile-banner" style={{background:'url("https://media.istockphoto.com/photos/neon-background-abstract-blue-and-pink-with-light-shapes-line-picture-id1191658515?k=20&m=1191658515&s=612x612&w=0&h=GyYyYJB8QTutGPhOtWdz0k8adWc1q4F55oEdM37duNA=")'}}>
		            <div class="col-sm-3 avatar-container">
			            <img src={user.image} class="img-circle profile-avatar" alt="User Picture"/>
		            </div>
	            </div>
                
                <div class="content">
		            <div class="row">
			            <div class="col-sm-3">				
				            <div class="text-center user-profile-2" style={{marginTop:"120px"}}>
					            <ul class="list-group">
                                    <li class="list-group-item">
    					                <h4>Whats'up, <b>{user.first_name}!</b></h4>
					                </li>
					                <li class="list-group-item">
						                <span class="badge">3 <i class="fa-solid fa-heart"></i></span>
						                Favorites
					                </li>
					                <li class="list-group-item">
						                <span class="badge">{user.restaurant_reviews.length} <i class="fa-solid fa-utensils"></i></span>
						                Reviews
					                </li>
					                <li class="list-group-item">
						                <span class="badge">{user.worker_reviews.length} <i class="fa-solid fa-person"></i></span>
						                Reviews
					                </li>
					            </ul>
					        <div class="user-button">
						        <div class="row">
							        <div class="col-lg-12">
								        <button type="button" class="btn btn-primary btn-sm btn-block"><i class="fa fa-envelope"></i> keep</button>
                                        <button type="button" class="btn btn-primary btn-sm btn-block"><i class="fa fa-envelope"></i> keep</button>
							        </div>
						        </div>
					        </div>
				        </div>
			        </div>

			    <div class="col-sm-9">
				    <div class="widget widget-tabbed">
					    <ul class="nav nav-tabs nav-justified">
					        <li class="active"><a href="#my-timeline" data-toggle="tab"><i class="fa fa-pencil"></i>Timeline</a></li>
					        <li><a href="#about" data-toggle="tab"><i class="fa fa-user"></i> About</a></li>
					    </ul>

                        <div class="tab-content">

                        {renderReview}


                            <div class="tab-pane animated fadeInRight" id="about">
                                <div class="user-profile-content">
                                    <h5><strong>ABOUT</strong> ME</h5>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                                    </p>
                                    <hr />
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <h5><strong>CONTACT</strong> ME</h5>
                                                <address>
                                                    <strong>Phone</strong>
                                                    <abbr title="Phone">+62 857 123 4567</abbr>
                                                </address>
                                                <address>
                                                    <strong>Email</strong>
                                                    <a href="mailto:#">first.last@example.com</a>
                                                </address>
                                                <address>
                                                    <strong>Website</strong>
                                                    <a href="http://r209.com">http://r209.com</a>
                                                </address>
                                        </div>
                                        <div class="col-sm-6">
                                            <h5><strong>MY</strong> SKILLS</h5>
                                            <p>UI Design</p>
                                            <p>Clean and Modern Web Design</p>
                                            <p>PHP and MySQL Programming</p>
                                            <p>Vector Design</p>
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