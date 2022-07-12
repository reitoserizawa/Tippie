import React from "react";
import './Profile.css'

function ProfileReviewItem ({name, review, object_id, image}) {

    return(
        <>
        <ul>
            <li>
                <div className="container">
                    <div className="row">
                        <div className="col-1">
                            <img src={image} style={{display: "inline", margin: "0 5px", height:"55px", width:"55px", objectFit:"cover"}}/>
                        </div>
                        <div className="col-11">
                            <span>01</span>
                            <small>Feb</small>
                            <h4>{name}</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{review}</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <hr />
                </>

    )
}

export default ProfileReviewItem