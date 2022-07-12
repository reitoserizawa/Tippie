import React, {useState} from 'react'
import ReactDom from 'react-dom'
import Errors from './Errors'
import './NewRestaurantReviewForm.css'

function EditRestaurantReviewForm ({open, onClose, id, user, star, restaurant_id, formerReview, errors, setErrors, worker_id}) {   
    const [review, setReview] = useState(!!restaurant_id ? {
        star: star,
        review: formerReview,
        user_id: 0,
        restaurant_id: restaurant_id
    } : {
        star: star,
        review: formerReview,
        user_id: 0,
        worker_id: worker_id
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setReview({ ...review, [name]: value, user_id: user.id});
    }

    const editReview = (e) => {
        e.preventDefault();
        setErrors([]);

        if (!!restaurant_id) {
            fetch(`/restaurant_reviews/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(review),
                }).then((r) => {
                if (r.ok) {
                    r.json().then((review) => console.log(review));
                    onClose();
                    window.location.reload()
                } else {
                    r.json().then((err) => 
                    setErrors(err.errors)
                    )}
                });
                setReview({})
        
        } else {
            fetch(`/worker_reviews/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(review),
                }).then((r) => {
                if (r.ok) {
                    r.json().then((review) => console.log(review));
                    onClose();
                    window.location.reload()
                } else {
                    r.json().then((err) => 
                    setErrors(err.errors)
                    )}
                });
                setReview({})
        }
    }
    
    const Overlay = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, .7)',
    }
      
    const Modal_Style = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%'
    }

    if (!open) return null

    return ReactDom.createPortal(
    <div className='overlay' style={Overlay}>
        <div className='modal-style' style={Modal_Style}>        
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-7 mx-auto my-auto">
                        <div className="card">
                            <div className="card-body px-lg-5 py-lg-5 text-center">
                                <img src={user.image} className="rounded-circle avatar-lg img-thumbnail mb-4" alt="profile-image"/>
                                <form onSubmit={editReview}>
                                    <div className="row mb-4">
                                        <fieldset className="rating" onChange={handleOnChange}>
                                            <input type="radio" id="star5" name="star" value="5" /><label className = "full" htmlFor="star5" title="Awesome - 5 stars"></label>
                                            <input type="radio" id="star4" name="star" value="4" /><label className = "full" htmlFor="star4" title="Pretty good - 4 stars"></label>
                                            <input type="radio" id="star3" name="star" value="3" /><label className = "full" htmlFor="star3" title="Meh - 3 stars"></label>
                                            <input type="radio" id="star2" name="star" value="2" /><label className = "full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
                                            <input type="radio" id="star1" name="star" value="1" /><label className = "full" htmlFor="star1" title="Sucks big time - 1 star"></label>
                                        </fieldset>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Write your review!' name="review" onChange={handleOnChange} value={review.review}></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn bg-info btn-lg my-4">Submit</button>
                                        { errors.length !== 0 ? <Errors key={errors} errors={errors} /> : null}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>,
    document.getElementById('portal')
    )
}

export default EditRestaurantReviewForm