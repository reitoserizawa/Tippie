import React from 'react';
import {Link} from "react-router-dom";

function WorkerItem({id, first_name, last_name, image, bio}) {

    return(
        <>
        <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-0 shadow">
                <Link to={`/workers/${id}`}>
                    <img src={image} className="card-img-top" alt={first_name + " " + last_name} />
                </Link>
                <div className="card-body text-center">
                    <h5 className="card-title mb-0" >{first_name + " " + last_name}</h5>
                    <div className="card-text text-black-50">
                        <span><i className="fa-solid fa-comment-dots"></i> {bio}</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default WorkerItem