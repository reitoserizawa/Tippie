import React from 'react'
import './About.css'

function About () {

    return (
        <>
        <div className="container">
            <div className="wrapper">
                <nav id="sidebar">
                    <ul className="list-unstyled components">
                        <li className="active">
                            <a href="#tippie" data-toggle="tab">About Tippie</a>
                        </li>
                        <hr/>
                        <li>
                            <a href="#partnership" data-toggle="tab">Partnerships</a>
                        </li>
                        <hr/>
                        <li>
                            <a href="#review" data-toggle="tab">Review</a>
                        </li>
                        <hr/>
                        <li>
                            <a href="#contact" data-toggle="tab">Contact</a>
                        </li>
                        <hr/>
                    </ul>
                </nav>

                <div id="about">
                    <div className="tab-content">
                        <div className="tab-pane animated active fadeInRight" id="tippie">

                            <img src="https://geomarketing.com/wp-content/uploads/2016/02/ThinkstockPhotos-493694506.jpg" alt="header-1" style={{height:"350px", width:"100%", objectFit: "cover", marginBottom:"20px"}}/>

                            <h1>About Tippie</h1>
                            <p>Tippie is an application for people who love restaurants but hate bad services. You check restaurants and their workers, and review them. ALso, you can tip them through the app!</p>
                            <p>To use, simply sign up and log in to your account. You can click the restaurant picture to access their page and see the reviews and their workers. If you click a worker, you can check their page, and see the reviews or tip them. </p>

                            <div className="line"></div>
                        </div>


                        <div className="tab-pane animated fadeInRight" id="partnership">
                            
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg" alt="header-2" style={{height:"350px", width:"100%", objectFit: "cover", marginBottom:"20px"}}/>

                            <h1>Partnership</h1>
                            <p>Tippie is always looking for new partnerships!</p>
                            <p>Let me know if you are interested.</p>

                            <div className="line"></div>
                        </div>

                        <div className="tab-pane animated fadeInRight" id="review">
                            <img src="https://post.healthline.com/wp-content/uploads/2020/09/healthy-eating-ingredients-732x549-thumbnail.jpg" alt="header-3" style={{height:"350px", width:"100%", objectFit: "cover", marginBottom:"20px"}}/>

                            <h1>Review</h1>
                            <p>Please remember all the reviews are viewed by restaurants and workers.</p>
                            <p>Don't insult anyone too much, they might come after you.</p>

                            <div className="line"></div>
                        </div>

                        <div className="tab-pane animated fadeInRight" id="contact">
                            <img src="https://thumbs.dreamstime.com/b/healthy-food-background-fruits-vegetables-cereal-nuts-superfood-dietary-balanced-vegetarian-eating-products-kitchen-143677456.jpg" alt="header-4" style={{height:"350px", width:"100%", objectFit: "cover", marginBottom:"20px"}}/>

                            <h1>Contact</h1>
                            <p>Those who try to reach out to the customer service, please directry call the restaurants.</p>
                            <p>I am just an egineer who made this website.</p>

                            <div className="line"></div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
        </>
    )
}

export default About