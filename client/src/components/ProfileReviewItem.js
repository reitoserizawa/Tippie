import React from "react";
import './Profile.css'

function ProfileReviewItem ({name, review}) {

    return(
        <div class="tab-pane animated active fadeInRight" id="my-timeline">
        <div class="user-profile-content">
            <div class="the-timeline">
                <ul>
                    <li>
                        <div class="the-date">
                            <span>01</span>
                            <small>Feb</small>
                        </div>
                        <h4>{name}</h4>
                        <p>
                        {review}
                        </p>
                    </li>
                </ul>
                <hr />
            </div>
        </div>
    </div>
    )
}

export default ProfileReviewItem