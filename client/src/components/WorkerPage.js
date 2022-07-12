import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import ReviewItem from './ReviewItem'
import './RestaurantPage.css'
import ReviewHeader from './ReviewHeader';

function WorkerPage ({user, errors, setErrors}) {
    const [data, setData] = useState([])
    const [reviews, setReviews] = useState([])
    const [reviewedUsers, setReviewedUsers] = useState([])
    const [showReviews, setShowReviews] = useState(false)
    const [openReviewForm, setOpenReviewForm] = useState(false)
    const params = useParams()

    useEffect(()=>{
        fetch(`${params.id}`)
        .then(r => r.json())
        .then(data => {
            setData(data)
            setReviews(data.worker_reviews)
            setReviewedUsers(data.users)
        })
    },[])

    const renderRestaurantReviews = reviews.map(review => {
        return <ReviewItem 
        key={review.id + 'key'}
        id={review.id}
        name={review.user_info.first_name + ' ' + review.user_info.last_name} 
        image={review.user_info.image}
        review={review.review}
        star={review.star}
        user_id={review.user_id}
        worker_id={review.worker_id}
        restaurant_id={null}
        user={user}
        errors={errors}
        setErrors={setErrors}
        />
    })

    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5">
                    <img src={data.image} className="worker-picture" alt={data.first_name}/>
                </div>
                <div className="col-12 col-md-5">
                    <h1>{data.first_name + ' ' + data.last_name}</h1>
                    <p className="text-secondary" style={{margin:"0"}}>from 
                    {/* <b>{data.restaurant.name}</b> */}
                    </p>
                    <hr />
                    <p><strong>About</strong> {data.first_name}</p>
                    <p className="text-secondary" style={{margin:"0"}}>{data.bio}</p>
                </div>
                <div className="col-12 col-md-2" style={{marginTop: "8px"}}>
                    <a href="https://venmo.com/code?user_id=3577965187171567239"><button type="button" className="btn btn-warning"><i className="fa fa-money"></i> Send Money</button></a>
                </div>
            </div>
            
            <hr />

            <div className="row">
                <div className="col-12 col-md-12">
                    <h2 className="p-3">Reviews</h2>
                </div>
            </div>    

            <ReviewHeader reviews={reviews} data={data} reviewedUsers={reviewedUsers} openReviewForm={openReviewForm} setOpenReviewForm={setOpenReviewForm} restaurant_id={null} worker_id={data.id} showReviews={showReviews} setShowReviews={setShowReviews} user={user} errors={errors} setErrors={setErrors}/>

            <hr style={{marginBottom: "30px"}}/>
        
            <div id="reviews">
                {renderRestaurantReviews}
            </div>
        </div>
        </>
    )
}

export default WorkerPage