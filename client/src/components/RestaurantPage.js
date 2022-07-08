import React, {useState, useEffect} from 'react'
import { useParams, Link, useHistory } from "react-router-dom";
import WorkerItem from './WorkerItem'
import ReviewItem from './ReviewItem'
import './RestaurantPage.css'
import ReviewHeader from './ReviewHeader';

function RestaurantPage ({user, errors, setErrors}) {
    const [data, setData] = useState([])
    const [workers, setWorkers] = useState([])
    const [reviews, setReviews] = useState([])
    const [reviewedUsers, setReviewedUsers] = useState([])
    const [showReviews, setShowReviews] = useState(false)
    const [openReviewForm, setOpenReviewForm] = useState(false)
    const history = useHistory()
    const params = useParams()

    useEffect(()=>{
        fetch(`${params.id}`)
        .then(r => r.json())
        .then(data => {
            setData(data)
            setWorkers(data.workers)
            setReviews(data.restaurant_reviews)
            setReviewedUsers(data.users)
        })
    },[])

    const renderWorkers = workers.map(worker => {
        return <WorkerItem 
        key={worker.id}
        id={worker.id}
        first_name={worker.first_name} 
        last_name={worker.last_name} 
        image={worker.image}
        bio={worker.bio}  
        />
    })

    const renderRestaurantReviews = reviews.map(review => {
        return <ReviewItem 
        key={review.id}
        id={review.id}
        name={review.user_info.first_name + ' ' + review.user_info.last_name} 
        image={review.user_info.image}
        review={review.review}
        star={review.star}
        user_id={review.user_id}
        restaurant_id={review.restaurant_id}
        worker_id={null}
        user={user}
        errors={errors}
        setErrors={setErrors}
        />
    })


    return(
        <>
        <div className="container">
            <div class="row">
                <div class="col-12 col-md-7">
                    <h1>{data.name}</h1>
                    <p class="text-secondary" style={{margin:"0"}}>{data.category} ・ {data.price}</p>
                    <p class="text-secondary"><i class="fa-solid fa-location-dot"></i> {data.address}</p>
                    <hr />
                    <p><strong>About</strong> {data.name}</p>
                </div>
                <div class="col-12 col-md-5">
                    <img src={data.image} class="restaurant-picture" alt={data.name}/>
                </div>
            </div>

            <hr />

            <div class="row">
                <div class="col-12 col-md-12">
                    <h2 class="p-3">Our Team</h2>
                    <div class="row">
                        {renderWorkers}
                    </div>
                </div>
            </div>

            <hr />

            <div class="row">
                <div class="col-12 col-md-12">
                    <h2 class="p-3">Reviews</h2>
                </div>
            </div>

            </div>

            <ReviewHeader reviews={reviews} data={data} reviewedUsers={reviewedUsers} openReviewForm={openReviewForm} setOpenReviewForm={setOpenReviewForm} restaurant_id={data.id} worker_id={null} showReviews={showReviews} setShowReviews={setShowReviews} user={user} errors={errors} setErrors={setErrors}/>

            <hr style={{marginBottom: "30px"}}/>

            <div id="reviews">
            {showReviews ? renderRestaurantReviews : null}
            </div>
        </>
    )
    
}

export default RestaurantPage