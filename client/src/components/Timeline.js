import React from "react";
import './Profile.css'

function ProfileReviewItem ({restaurant_reviews, worker_reviews}) {

    return(
        <div class="tab-pane animated active fadeInRight" id="my-timeline">
        <div class="user-profile-content">
            <div class="the-timeline">
                <form role="form" class="post-to-timeline">
                    <textarea class="form-control" style={{height: "70px", marginBottom:"10px"}} placeholder="Whats on your mind..."></textarea>
                    <div class="row">
                        <div class="col-sm-6">
                            <a class="btn btn-sm btn-default"><i class="fa fa-camera"></i></a>
                            <a class="btn btn-sm btn-default"><i class="fa fa-video-camera"></i></a>
                            <a class="btn btn-sm btn-default"><i class="fa fa-map-marker"></i></a>
                        </div>
                        <div class="col-sm-6 text-right"><button type="submit" class="btn btn-primary">Post</button></div>
                    </div>
                </form>
                <hr />
                <ul>
                    <li>
                        <div class="the-date">
                            <span>01</span>
                            <small>Feb</small>
                        </div>
                        <h4>Lorem ipsum dolor!</h4>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default ProfileReviewItem