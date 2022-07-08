import React from 'react';
import {Link} from "react-router-dom";

function WorkerItem({id, first_name, last_name, image, bio}) {

    return(
        <>
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card border-0 shadow">
                <Link to={`/workers/${id}`}>
                    <img src={image} class="card-img-top" alt={first_name + " " + last_name} />
                </Link>
                <div class="card-body text-center">
                    <h5 class="card-title mb-0" >{first_name + " " + last_name}</h5>
                    <div class="card-text text-black-50">
                        <span><i class="fa-solid fa-comment-dots"></i> {bio}</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default WorkerItem